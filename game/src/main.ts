import { Application, Container, Graphics, Text, TextStyle } from 'pixi.js';
import { InputManager, type InputAction, SHAKE_TOLERANCE_MS } from './input';
import { AudioEngine } from './audio';
import { createChest, createCoin, bestProximity, extractRandom, nearestCoin, coinProximity, BRUTEFORCE_THRESHOLD, type CoinType } from './coins';
import { createTelegraphState, updateTelegraph, isNearMiss } from './telegraph';
import {
  createPatienceState, updatePatience, drainPatience, stageChanged,
  breathSpeedMultiplier, breathAmplitudeMultiplier, candleFlickerMultiplier,
  DRAIN_TELEGRAPH_EXTRACT, DRAIN_MISSED_TELEGRAPH, DRAIN_BRUTEFORCE_SHAKE, DRAIN_NEAR_MISS, DRAIN_COMBO_EXTRACT,
  type MimicStage,
} from './patience';
import { Particles3D } from './particles3d';
import { HapticEngine } from './haptics';
import './style.css';

// --- Colors ---
const BG_COLOR = 0x1a1a2e;
const CHEST_COLOR = 0x8b5e3c;
const CHEST_OUTLINE = 0x5c3a1e;
const LEFT_FLASH = 0x4488ff;
const RIGHT_FLASH = 0xff8844;
const SHAKE_FLASH = 0xff4444;
const HAND_COLOR = 0xd4a574;
const HAND_OUTLINE = 0x8b6914;
const TELEGRAPH_GLOW = 0xffdd44;
const COIN_COLORS: Record<CoinType, number> = {
  copper: 0xb87333,
  silver: 0xc0c0c0,
  gold: 0xffd700,
};

// --- Scoring ---
const TIME_LIMIT = 30;            // seconds for 2-star rating
const STAR_COLOR_EARNED = 0xffd700;
const STAR_COLOR_DIM = 0x333340;
const STAR_REVEAL_INTERVAL = 0.5; // seconds between star reveals

// --- Discrete rotation ---
const POSITIONS = 12;
const POS_ANGLE = (Math.PI * 2) / POSITIONS;
const SNAP_SPEED = 60;

// --- Shake ---
const SHAKE_WINDUP_MS = 50;
const SHAKE_JITTER_POS = 8;
const SHAKE_JITTER_ROT = 0.05;
const SHAKE_HIT_INTERVAL = 0.25;

// --- Hands ---
const HAND_W = 36;
const HAND_H = 60;
const HAND_SQUEEZE = 0.82;
const HAND_NORMAL = 1.0;
const HAND_SQUEEZE_SPEED = 16;

// --- Breathing ---
const BREATH_SPEED = 1.8;
const BREATH_AMOUNT = 0.006;

// --- Chest size ---
const CHEST_W = 240;
const CHEST_H = 160;

// --- Coin-out animation ---
const COIN_RADIUS = 10;
const COIN_GRAVITY = 600;
const COIN_LIFETIME = 2.0;
const COIN_OUT_SPEED_BRUTEFORCE = 180;
const COIN_OUT_SPEED_TELEGRAPH = 360;
const REWARD_SILENCE = 0.25;

// --- Slot visual ---
const SLOT_W = 30;
const SLOT_H = 6;


interface FlyingCoin {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotSpeed: number;
  type: CoinType;
  graphic: Graphics;
  age: number;
}

async function main() {
  const app = new Application();
  await app.init({
    background: BG_COLOR,
    resizeTo: window,
    antialias: true,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
  });

  const container = document.getElementById('game')!;
  container.appendChild(app.canvas);

  const input = new InputManager(app.canvas as HTMLCanvasElement);
  const audio = new AudioEngine();
  const particles3d = new Particles3D(container);
  const haptics = new HapticEngine();

  // Unlock audio on first interaction
  const unlockAudio = () => { audio.unlock(); };
  window.addEventListener('keydown', unlockAudio, { once: true });
  window.addEventListener('touchstart', unlockAudio, { once: true });
  window.addEventListener('mousedown', unlockAudio, { once: true });

  // --- Coin pool (spawned one at a time) ---
  const COIN_POOL: CoinType[] = [
    'copper', 'copper', 'copper', 'copper', 'copper',
    'copper', 'copper', 'copper', 'copper', 'copper',
    'silver', 'silver', 'silver', 'silver', 'silver', 'silver',
    'gold', 'gold', 'gold', 'gold',
  ];
  const totalCoins = COIN_POOL.length;
  let coinPoolIndex = 0;

  // --- Coin state ---
  const coins = createChest(COIN_POOL, POSITIONS);

  // Next coin's sweet spot — exists only for direction hint, not extractable yet
  let nextSpot = -1;
  function rollNextSpot() {
    coinPoolIndex++;
    if (coinPoolIndex < COIN_POOL.length) {
      let spot: number;
      do { spot = Math.floor(Math.random() * POSITIONS); } while (spot === currentPos);
      nextSpot = spot;
    } else {
      nextSpot = -1; // no more coins
    }
  }

  // --- Telegraph state ---
  const telegraph = createTelegraphState();

  // --- Patience state ---
  const patience = createPatienceState();

  // --- Flying coin animations ---
  const flyingCoins: FlyingCoin[] = [];

  // --- Environment background ---
  const bg = new Graphics();
  app.stage.addChild(bg);

  function drawBg(w: number, h: number) {
    bg.clear();
    bg.rect(0, 0, w, h);
    bg.fill({ color: 0x22222e });
    const floorY = h * 0.72;
    bg.rect(0, floorY, w, h - floorY);
    bg.fill({ color: 0x151518 });
    bg.moveTo(0, floorY);
    bg.lineTo(w, floorY);
    bg.stroke({ color: 0x2a2a35, width: 2 });
    for (let row = 0; row < 5; row++) {
      const y = row * (floorY / 5);
      bg.moveTo(0, y);
      bg.lineTo(w, y);
      bg.stroke({ color: 0x1e1e28, width: 1 });
      const offset = (row % 2) * 80;
      for (let x = offset; x < w; x += 160) {
        bg.moveTo(x, y);
        bg.lineTo(x, y + floorY / 5);
        bg.stroke({ color: 0x1e1e28, width: 1 });
      }
    }
  }

  // --- Candle ---
  const candleContainer = new Container();
  candleContainer.scale.set(1.5);
  app.stage.addChild(candleContainer);

  // Candle body (static)
  const candleBody = new Graphics();
  candleBody.roundRect(-6, 0, 12, 40, 3);
  candleBody.fill({ color: 0xd4c8a0 });
  candleBody.roundRect(-6, 0, 12, 40, 3);
  candleBody.stroke({ color: 0x9a9070, width: 1 });
  // Wick
  candleBody.moveTo(0, 0);
  candleBody.lineTo(0, -6);
  candleBody.stroke({ color: 0x222222, width: 1.5 });
  // Holder plate
  candleBody.roundRect(-14, 38, 28, 6, 2);
  candleBody.fill({ color: 0x666655 });
  candleBody.roundRect(-14, 38, 28, 6, 2);
  candleBody.stroke({ color: 0x444438, width: 1 });
  candleContainer.addChild(candleBody);

  // Flame (redrawn each frame)
  const flame = new Graphics();
  candleContainer.addChild(flame);

  // Glow behind flame
  const candleGlow = new Graphics();
  candleGlow.circle(0, -10, 30);
  candleGlow.fill({ color: 0xff9933 });
  candleGlow.alpha = 0.06;
  candleContainer.addChildAt(candleGlow, 0);

  // --- Gargoyles ---
  const GARG_SCALE = 2.2;
  function createGargoyle(facingRight: boolean): { container: Container; eyeGlow: Graphics } {
    const c = new Container();
    c.scale.set(GARG_SCALE);
    const flip = facingRight ? 1 : -1;

    // Head shape — rough stone wedge
    const head = new Graphics();
    head.moveTo(-18 * flip, -20);
    head.lineTo(22 * flip, -14);
    head.lineTo(26 * flip, 4);
    head.quadraticCurveTo(20 * flip, 18, 0, 20);
    head.quadraticCurveTo(-22 * flip, 16, -22 * flip, -4);
    head.lineTo(-18 * flip, -20);
    head.fill({ color: 0x3a3a42 });
    head.moveTo(-18 * flip, -20);
    head.lineTo(22 * flip, -14);
    head.lineTo(26 * flip, 4);
    head.quadraticCurveTo(20 * flip, 18, 0, 20);
    head.quadraticCurveTo(-22 * flip, 16, -22 * flip, -4);
    head.lineTo(-18 * flip, -20);
    head.stroke({ color: 0x2a2a30, width: 2 });

    // Brow ridge
    head.moveTo(-14 * flip, -12);
    head.lineTo(18 * flip, -8);
    head.stroke({ color: 0x2a2a30, width: 3 });

    // Nose ridge
    head.moveTo(4 * flip, -6);
    head.lineTo(8 * flip, 6);
    head.lineTo(2 * flip, 10);
    head.stroke({ color: 0x2e2e36, width: 2 });

    // Mouth slit
    head.moveTo(-6 * flip, 12);
    head.quadraticCurveTo(6 * flip, 16, 16 * flip, 10);
    head.stroke({ color: 0x222228, width: 2 });

    // Eye sockets (dark)
    head.circle(-4 * flip, -4, 5);
    head.fill({ color: 0x18181e });
    head.circle(12 * flip, -2, 5);
    head.fill({ color: 0x18181e });

    c.addChild(head);

    // Eye glow overlay (both eyes)
    const eyeGlow = new Graphics();
    eyeGlow.circle(-4 * flip, -4, 4);
    eyeGlow.circle(12 * flip, -2, 4);
    eyeGlow.fill({ color: 0xff3300 });
    eyeGlow.alpha = 0;
    c.addChild(eyeGlow);

    return { container: c, eyeGlow };
  }

  const leftGarg = createGargoyle(true);   // left gargoyle faces right (toward chest)
  const rightGarg = createGargoyle(false);  // right gargoyle faces left (toward chest)
  app.stage.addChild(leftGarg.container);
  app.stage.addChild(rightGarg.container);

  // --- Chest assembly ---
  const chestAssembly = new Container();
  app.stage.addChild(chestAssembly);

  const chestBody = new Graphics();
  drawChest(chestBody, CHEST_W, CHEST_H);
  chestAssembly.addChild(chestBody);

  // Slot visual
  const slot = new Graphics();
  slot.roundRect(-SLOT_W / 2, -CHEST_H / 2 - SLOT_H / 2, SLOT_W, SLOT_H, 2);
  slot.fill({ color: 0x111118 });
  slot.roundRect(-SLOT_W / 2, -CHEST_H / 2 - SLOT_H / 2, SLOT_W, SLOT_H, 2);
  slot.stroke({ color: CHEST_OUTLINE, width: 1 });
  chestAssembly.addChild(slot);

  // Keyhole
  const keyhole = new Graphics();
  keyhole.circle(0, -10, 8);
  keyhole.roundRect(-4, -6, 8, 20, 2);
  keyhole.fill({ color: 0x2a1a0a });
  chestBody.addChild(keyhole);

  // --- Mimic eyes (appear halfway through extraction) ---
  const EYE_SPACING = 38;
  const EYE_Y = -36;
  const EYE_RX = 18;          // sclera horizontal radius
  const EYE_RY = 13;          // sclera vertical radius
  const IRIS_RADIUS = 9;
  const PUPIL_RADIUS = 5;

  const mimicEyes = new Container();
  mimicEyes.alpha = 0;
  chestBody.addChild(mimicEyes);

  function buildEye(): { container: Container; iris: Graphics; pupil: Graphics; highlight: Graphics } {
    const c = new Container();

    // Sclera (white of the eye)
    const sclera = new Graphics();
    sclera.ellipse(0, 0, EYE_RX, EYE_RY);
    sclera.fill({ color: 0xe8ddd0 });
    // Bloodshot tint at edges
    sclera.ellipse(0, 0, EYE_RX, EYE_RY);
    sclera.stroke({ color: 0xc4a080, width: 2 });
    c.addChild(sclera);

    // Vein lines
    const veins = new Graphics();
    veins.moveTo(-EYE_RX + 3, -2);
    veins.lineTo(-EYE_RX + 10, -1);
    veins.stroke({ color: 0xcc8866, width: 0.5 });
    veins.moveTo(EYE_RX - 3, 1);
    veins.lineTo(EYE_RX - 9, 2);
    veins.stroke({ color: 0xcc8866, width: 0.5 });
    veins.moveTo(-EYE_RX + 4, 3);
    veins.lineTo(-EYE_RX + 11, 2);
    veins.stroke({ color: 0xbb7755, width: 0.4 });
    c.addChild(veins);

    // Iris — amber ring with darker edge
    const iris = new Graphics();
    iris.circle(0, 0, IRIS_RADIUS);
    iris.fill({ color: 0xbb6600 });
    // Darker iris rim
    iris.circle(0, 0, IRIS_RADIUS);
    iris.stroke({ color: 0x663300, width: 1.5 });
    // Inner iris ring (lighter)
    iris.circle(0, 0, IRIS_RADIUS * 0.65);
    iris.stroke({ color: 0xdd8822, width: 1 });
    c.addChild(iris);

    // Pupil
    const pupil = new Graphics();
    pupil.circle(0, 0, PUPIL_RADIUS);
    pupil.fill({ color: 0x080808 });
    c.addChild(pupil);

    // Specular highlight
    const highlight = new Graphics();
    highlight.circle(-2, -2, 2);
    highlight.fill({ color: 0xffffff });
    highlight.alpha = 0.7;
    c.addChild(highlight);

    // Upper eyelid shadow
    const lidShadow = new Graphics();
    lidShadow.ellipse(0, -EYE_RY + 3, EYE_RX - 1, 5);
    lidShadow.fill({ color: 0x000000 });
    lidShadow.alpha = 0.12;
    c.addChild(lidShadow);

    // Eyelid outlines
    const lids = new Graphics();
    // Upper lid
    lids.ellipse(0, 0, EYE_RX + 1, EYE_RY + 1);
    lids.stroke({ color: CHEST_OUTLINE, width: 2 });
    c.addChild(lids);

    return { container: c, iris, pupil, highlight };
  }

  const leftEye = buildEye();
  const leftEyeContainer = leftEye.container;
  leftEyeContainer.x = -EYE_SPACING;
  leftEyeContainer.y = EYE_Y;
  mimicEyes.addChild(leftEyeContainer);
  const leftIris = leftEye.iris;
  const leftPupil = leftEye.pupil;
  const leftHighlight = leftEye.highlight;

  const rightEye = buildEye();
  const rightEyeContainer = rightEye.container;
  rightEyeContainer.x = EYE_SPACING;
  rightEyeContainer.y = EYE_Y;
  mimicEyes.addChild(rightEyeContainer);
  const rightIris = rightEye.iris;
  const rightPupil = rightEye.pupil;
  const rightHighlight = rightEye.highlight;

  // Hands
  const leftHand = new Graphics();
  drawHand(leftHand, HAND_W, HAND_H, true);
  leftHand.x = -CHEST_W / 2 - HAND_W / 2 + 6;
  leftHand.y = 8;
  chestAssembly.addChild(leftHand);

  const rightHand = new Graphics();
  drawHand(rightHand, HAND_W, HAND_H, false);
  rightHand.x = CHEST_W / 2 + HAND_W / 2 - 6;
  rightHand.y = 8;
  chestAssembly.addChild(rightHand);

  // --- Flash overlays ---
  const leftFlash = new Graphics();
  const rightFlash = new Graphics();
  leftFlash.alpha = 0;
  rightFlash.alpha = 0;
  app.stage.addChild(leftFlash);
  app.stage.addChild(rightFlash);

  // --- Telegraph flash (full screen golden flash on telegraph extract) ---
  const telegraphFlash = new Graphics();
  telegraphFlash.alpha = 0;
  app.stage.addChild(telegraphFlash);

  // --- Coin counter ---
  const coinText = new Text({
    text: '',
    style: new TextStyle({ fontFamily: 'monospace', fontSize: 20, fontWeight: 'bold', fill: 0xccccaa }),
  });
  coinText.anchor.set(0.5, 1);
  app.stage.addChild(coinText);

  // --- Debug text ---
  const debugText = new Text({
    text: '',
    style: new TextStyle({ fontFamily: 'monospace', fontSize: 14, fill: 0x555570 }),
  });
  debugText.anchor.set(0.5, 0);
  app.stage.addChild(debugText);

  // --- Action label ---
  const actionLabel = new Text({
    text: '',
    style: new TextStyle({ fontFamily: 'monospace', fontSize: 28, fontWeight: 'bold', fill: 0xffffff }),
  });
  actionLabel.anchor.set(0.5, 0.5);
  actionLabel.alpha = 0;
  app.stage.addChild(actionLabel);

  // --- Snap / game over overlay ---
  const darkOverlay = new Graphics();
  darkOverlay.alpha = 0;
  app.stage.addChild(darkOverlay);

  const snapText = new Text({
    text: 'SNAP!',
    style: new TextStyle({ fontFamily: 'monospace', fontSize: 64, fontWeight: 'bold', fill: 0xff3333 }),
  });
  snapText.anchor.set(0.5, 0.5);
  snapText.alpha = 0;
  app.stage.addChild(snapText);

  const resultsText = new Text({
    text: '',
    style: new TextStyle({ fontFamily: 'monospace', fontSize: 24, fill: 0xccccaa, align: 'center' }),
  });
  resultsText.anchor.set(0.5, 0.5);
  resultsText.alpha = 0;
  app.stage.addChild(resultsText);

  const retryText = new Text({
    text: 'tap to continue',
    style: new TextStyle({ fontFamily: 'monospace', fontSize: 18, fill: 0x666688 }),
  });
  retryText.anchor.set(0.5, 0.5);
  retryText.alpha = 0;
  app.stage.addChild(retryText);

  // --- Win header (replaces snapText for victories) ---
  const winText = new Text({
    text: 'CHEST CLEARED!',
    style: new TextStyle({ fontFamily: 'monospace', fontSize: 48, fontWeight: 'bold', fill: STAR_COLOR_EARNED }),
  });
  winText.anchor.set(0.5, 0.5);
  winText.alpha = 0;
  app.stage.addChild(winText);

  // --- Star rating display ---
  function drawStar(g: Graphics, radius: number, color: number): void {
    const points = 5;
    const inner = radius * 0.4;
    g.moveTo(0, -radius);
    for (let i = 0; i < points; i++) {
      const outerAngle = (i * 2 * Math.PI) / points - Math.PI / 2;
      const innerAngle = outerAngle + Math.PI / points;
      g.lineTo(Math.cos(outerAngle) * radius, Math.sin(outerAngle) * radius);
      g.lineTo(Math.cos(innerAngle) * inner, Math.sin(innerAngle) * inner);
    }
    g.closePath();
    g.fill({ color });
  }

  const STAR_RADIUS = 28;
  const STAR_GAP = 80;
  const starGraphics: Graphics[] = [];
  for (let i = 0; i < 3; i++) {
    const g = new Graphics();
    g.alpha = 0;
    app.stage.addChild(g);
    starGraphics.push(g);
  }

  // --- Menu screen ---
  const menuContainer = new Container();
  app.stage.addChild(menuContainer);

  const menuOverlay = new Graphics();
  menuContainer.addChild(menuOverlay);

  const titleText = new Text({
    text: 'SUNDUK',
    style: new TextStyle({ fontFamily: 'monospace', fontSize: 72, fontWeight: 'bold', fill: STAR_COLOR_EARNED }),
  });
  titleText.anchor.set(0.5, 0.5);
  menuContainer.addChild(titleText);

  const playText = new Text({
    text: 'tap to play',
    style: new TextStyle({ fontFamily: 'monospace', fontSize: 22, fill: 0x888899 }),
  });
  playText.anchor.set(0.5, 0.5);
  menuContainer.addChild(playText);

  // --- Layout ---
  function layout() {
    const w = app.screen.width;
    const h = app.screen.height;

    chestAssembly.x = w / 2;
    chestAssembly.y = h / 2;

    candleContainer.x = w / 2 - CHEST_W / 2 - 60;
    candleContainer.y = h * 0.72 - 44;

    // Gargoyles on the wall, flanking the chest
    leftGarg.container.x = w / 2 - CHEST_W / 2 - 140;
    leftGarg.container.y = h / 2 - 30;
    rightGarg.container.x = w / 2 + CHEST_W / 2 + 140;
    rightGarg.container.y = h / 2 - 30;

    debugText.x = w / 2;
    debugText.y = 8;

    coinText.x = w / 2;
    coinText.y = h - 12;

    actionLabel.x = w / 2;
    actionLabel.y = h / 2 + CHEST_H / 2 + 60;

    leftFlash.clear();
    leftFlash.rect(0, 0, w / 2, h);
    leftFlash.fill({ color: LEFT_FLASH });

    rightFlash.clear();
    rightFlash.rect(w / 2, 0, w / 2, h);
    rightFlash.fill({ color: RIGHT_FLASH });

    telegraphFlash.clear();
    telegraphFlash.rect(0, 0, w, h);
    telegraphFlash.fill({ color: TELEGRAPH_GLOW });

    darkOverlay.clear();
    darkOverlay.rect(0, 0, w, h);
    darkOverlay.fill({ color: 0x000000 });

    snapText.x = w / 2;
    snapText.y = h / 2 - 80;
    winText.x = w / 2;
    winText.y = h / 2 - 80;
    resultsText.x = w / 2;
    resultsText.y = h / 2 + 40;
    retryText.x = w / 2;
    retryText.y = h / 2 + 80;

    // Stars centered horizontally above results text
    for (let i = 0; i < 3; i++) {
      starGraphics[i].x = w / 2 + (i - 1) * STAR_GAP;
      starGraphics[i].y = h / 2 - 20;
    }

    // Menu overlay
    menuOverlay.clear();
    menuOverlay.rect(0, 0, w, h);
    menuOverlay.fill({ color: 0x000000 });
    menuOverlay.alpha = 0.7;
    titleText.x = w / 2;
    titleText.y = h / 2 - 30;
    playText.x = w / 2;
    playText.y = h / 2 + 40;

    drawBg(w, h);
    particles3d.resize(w, h);
  }

  layout();
  window.addEventListener('resize', layout);

  // --- Spawn next coin: place at nextSpot, then roll a new nextSpot ---
  function spawnNextCoin() {
    if (nextSpot >= 0 && coinPoolIndex < COIN_POOL.length) {
      const coin = createCoin(COIN_POOL[coinPoolIndex], POSITIONS);
      coin.sweetSpot = nextSpot;
      coins.push(coin);
      rollNextSpot();
    }
  }

  // --- Direction to next coin from nextSpot ---
  function dirToNext(): number {
    if (nextSpot < 0) return 0;
    let diff = nextSpot - currentPos;
    if (diff > POSITIONS / 2) diff -= POSITIONS;
    if (diff < -POSITIONS / 2) diff += POSITIONS;
    return diff > 0 ? 1 : diff < 0 ? -1 : 0;
  }

  // --- Spawn flying coin ---
  function spawnFlyingCoin(type: CoinType, isTelegraph: boolean, comboIntensity = 0) {
    const g = new Graphics();
    const r = isTelegraph ? COIN_RADIUS * (1.3 + comboIntensity * 0.3) : COIN_RADIUS;
    g.circle(0, 0, r);
    g.fill({ color: COIN_COLORS[type] });
    g.circle(0, 0, r);
    g.stroke({ color: 0x333333, width: 1.5 });
    g.circle(0, 0, r * 0.55);
    g.stroke({ color: 0x333333, width: 1 });
    app.stage.addChild(g);

    const slotLocalX = 0;
    const slotLocalY = -CHEST_H / 2 - SLOT_H / 2;
    const angle = chestAssembly.rotation;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const worldX = chestAssembly.x + slotLocalX * cos - slotLocalY * sin;
    const worldY = chestAssembly.y + slotLocalX * sin + slotLocalY * cos;

    const launchAngle = angle - Math.PI / 2;
    const spread = (Math.random() - 0.5) * 0.4;
    const baseSpeed = isTelegraph ? COIN_OUT_SPEED_TELEGRAPH : COIN_OUT_SPEED_BRUTEFORCE;
    const speed = baseSpeed * (1 + comboIntensity * 0.6);

    flyingCoins.push({
      x: worldX,
      y: worldY,
      vx: Math.cos(launchAngle + spread) * speed,
      vy: Math.sin(launchAngle + spread) * speed - (isTelegraph ? 180 + comboIntensity * 120 : 80),
      rotation: 0,
      rotSpeed: (Math.random() - 0.5) * (isTelegraph ? 18 + comboIntensity * 10 : 8),
      type,
      graphic: g,
      age: 0,
    });
  }

  // --- Game state machine ---
  type GameState = 'menu' | 'playing' | 'results';
  let gameState: GameState = 'menu';
  let telegraphExtracts = 0;   // count of telegraph/combo extractions (for star rating)
  let resultsTimer = 0;        // timer for animated star reveal
  let starsEarned = 0;         // computed on transition to results
  let starsRevealed = 0;       // how many stars have been revealed so far
  let resultsReady = false;    // true when tap-to-continue is active
  let isWin = false;           // true = chest cleared, false = snap

  // --- State ---
  let currentPos = 0;
  rollNextSpot(); // initialize direction target for first coin
  let displayAngle = 0;
  let snapVel = 0;
  let leftFlashAlpha = 0;
  let rightFlashAlpha = 0;
  let telegraphFlashAlpha = 0;
  let actionLabelAlpha = 0;
  let prevAction: InputAction = 'none';
  let shakeWindup = 0;
  let shakeActive = false;
  let leftHandSqueeze = HAND_NORMAL;
  let rightHandSqueeze = HAND_NORMAL;
  let breathTime = 0;
  let lastTickTime = 0;
  let lastTickDelta = 0;
  let shakeHitTimer = 0;
  let bruteforceCounter = 0;
  let rewardSilence = 0;
  let comboCount = 0;        // consecutive telegraph extractions (0 = no combo)
  let screenShakeIntensity = 0; // general-purpose screen shake (coin extract, combo, celebration)
  let celebrationFired = false; // true once chest-empty celebration triggers
  let flameBlink = 0;    // sharp bright blink on telegraph open (countdown)
  let leftEyeGlow = 0;  // gargoyle eye glow intensity (0-1)
  let rightEyeGlow = 0;
  let tellIsCandle = true; // true = candle tell, false = gargoyle tell
  let flameLean = 0;        // current lean angle (-1 to 1, where sign = direction)
  let flameTime = 0;
  let runTimer = 0;
  let runStarted = false;
  let runFinished = false;
  let mimicEyeAlpha = 0;         // current fade-in (0-1)
  let mimicPupilX = 0;           // current pupil x offset (glancing)
  let mimicEyeWiden = 1;         // current eye scale Y (1 = normal, >1 = wide, <1 = squint)
  let mimicBlinkTimer = 0;       // countdown for next blink
  let mimicBlinkPhase = 0;       // 0 = not blinking, >0 = blink progress (0-1)
  const MIMIC_BLINK_DURATION = 0.12;

  // --- Patience audio state ---
  let growlTimer = 0;            // timer for periodic growl audio in agitated stage
  let snapWarningPlayed = false;
  let snapSoundPlayed = false;
  let snapShakeIntensity = 0;    // screen shake during snap
  let prevPatienceStage: MimicStage = 'calm';

  // --- Retry handler ---
  function resetGame() {
    // Reset coins — clear array, start fresh
    coins.length = 0;
    coinPoolIndex = 0;
    coins.push(createCoin(COIN_POOL[0], POSITIONS));
    rollNextSpot();
    // Reset all state
    Object.assign(patience, createPatienceState());
    Object.assign(telegraph, createTelegraphState());
    currentPos = 0;
    displayAngle = 0;
    snapVel = 0;
    bruteforceCounter = 0;
    comboCount = 0;
    runTimer = 0;
    runStarted = false;
    runFinished = false;
    growlTimer = 0;
    snapWarningPlayed = false;
    snapSoundPlayed = false;
    snapShakeIntensity = 0;
    screenShakeIntensity = 0;
    celebrationFired = false;
    prevPatienceStage = 'calm';
    mimicEyeAlpha = 0;
    darkOverlay.alpha = 0;
    snapText.alpha = 0;
    winText.alpha = 0;
    resultsText.alpha = 0;
    retryText.alpha = 0;
    telegraphExtracts = 0;
    resultsTimer = 0;
    starsEarned = 0;
    starsRevealed = 0;
    resultsReady = false;
    isWin = false;
    for (const sg of starGraphics) sg.alpha = 0;
    // Clean up flying coins
    for (const fc of flyingCoins) {
      app.stage.removeChild(fc.graphic);
      fc.graphic.destroy();
    }
    flyingCoins.length = 0;
  }

  // --- Global input handler for state transitions ---
  const handleGlobalInput = () => {
    if (gameState === 'menu') {
      // Menu → Playing
      gameState = 'playing';
      menuContainer.visible = false;
      audio.unlock();
      resetGame();
    } else if (gameState === 'results' && resultsReady) {
      // Results → Menu
      gameState = 'menu';
      resultsReady = false;
      resetGame();
      menuContainer.visible = true;
    }
  };
  window.addEventListener('keydown', handleGlobalInput);
  window.addEventListener('touchstart', handleGlobalInput);
  window.addEventListener('mousedown', handleGlobalInput);

  // --- Game loop ---
  app.ticker.add((ticker) => {
    const dt = ticker.deltaMS / 1000;
    const cx = app.screen.width / 2;
    const cy = app.screen.height / 2;

    // Menu state: just animate ambient elements (breathing, candle)
    if (gameState === 'menu') {
      // Consume inputs so they don't queue
      input.getAction();
      input.consumeLeftPresses();
      input.consumeRightPresses();

      // Keep breathing and candle alive for ambience
      breathTime += dt * BREATH_SPEED * Math.PI * 2;
      const breathScale = 1 + Math.sin(breathTime) * BREATH_AMOUNT;
      chestAssembly.x = cx;
      chestAssembly.y = cy;
      chestAssembly.scale.set(breathScale);
      chestAssembly.rotation = 0;

      flameTime += dt;
      const flicker1 = Math.sin(flameTime * 11) * 0.08;
      const flicker2 = Math.sin(flameTime * 17 + 2) * 0.05;
      const flameScale = 0.9 + Math.sin(flameTime * 5) * 0.1 + flicker1 + flicker2;
      flame.clear();
      flame.moveTo(0, -4);
      flame.quadraticCurveTo(-8, -28 * 0.55, 0, -28 * flameScale);
      flame.quadraticCurveTo(8, -28 * 0.55, 0, -4);
      flame.fill({ color: 0xff8800 });
      flame.moveTo(0, -5);
      flame.quadraticCurveTo(-4, -28 * 0.45, 0, -28 * 0.7 * flameScale);
      flame.quadraticCurveTo(4, -28 * 0.45, 0, -5);
      flame.fill({ color: 0xffdd44 });
      candleGlow.alpha = 0.04 + flameScale * 0.03;

      // Menu pulse on "tap to play"
      playText.alpha = 0.5 + Math.sin(flameTime * 2) * 0.3;

      // Hide HUD during menu
      coinText.text = '';
      debugText.text = '';
      return;
    }

    // Results state: animate star reveals
    if (gameState === 'results') {
      // Consume inputs
      input.getAction();
      input.consumeLeftPresses();
      input.consumeRightPresses();

      resultsTimer += dt;

      // Fade in overlay
      const overlayTarget = isWin ? 0.85 : 1;
      darkOverlay.alpha += (overlayTarget - darkOverlay.alpha) * Math.min(1, 5 * dt);

      // Header
      if (isWin) {
        winText.alpha += (1 - winText.alpha) * Math.min(1, 4 * dt);
      } else {
        snapText.alpha += (1 - snapText.alpha) * Math.min(1, 4 * dt);
      }

      // Star reveal (win only) — one by one with chimes
      if (isWin && resultsTimer > 0.5) {
        const starTime = resultsTimer - 0.5;
        const shouldReveal = Math.min(3, Math.floor(starTime / STAR_REVEAL_INTERVAL) + 1);

        for (let i = 0; i < 3; i++) {
          if (i < shouldReveal && i < starsEarned) {
            // Reveal this star
            if (i >= starsRevealed) {
              starsRevealed = i + 1;
              audio.playStarChime(i);
              haptics.starReveal();
              // Redraw star as earned
              starGraphics[i].clear();
              drawStar(starGraphics[i], STAR_RADIUS, STAR_COLOR_EARNED);
            }
            // Animate: fade in + scale bounce
            const t = starTime - i * STAR_REVEAL_INTERVAL;
            const bounce = t < 0.15 ? 1 + (0.15 - t) * 3 : 1;
            starGraphics[i].alpha += (1 - starGraphics[i].alpha) * Math.min(1, 8 * dt);
            starGraphics[i].scale.set(bounce);
          } else if (i < 3 && starTime > i * STAR_REVEAL_INTERVAL) {
            // Show dim outline for unearned star
            if (starGraphics[i].alpha < 0.01) {
              starGraphics[i].clear();
              drawStar(starGraphics[i], STAR_RADIUS, STAR_COLOR_DIM);
            }
            starGraphics[i].alpha += (0.4 - starGraphics[i].alpha) * Math.min(1, 4 * dt);
            starGraphics[i].scale.set(1);
          }
        }
      }

      // Stats + continue text (delayed)
      if (resultsTimer > 0.8 + (isWin ? starsEarned * STAR_REVEAL_INTERVAL : 0)) {
        resultsText.alpha += (1 - resultsText.alpha) * Math.min(1, 3 * dt);
      }
      if (resultsTimer > 1.2 + (isWin ? starsEarned * STAR_REVEAL_INTERVAL : 0)) {
        retryText.alpha += (1 - retryText.alpha) * Math.min(1, 2 * dt);
        if (!resultsReady) {
          resultsReady = true;
        }
      }

      // Keep particles updating
      particles3d.update(dt);
      return;
    }

    // --- Playing state ---
    const action = patience.snapTriggered ? 'none' as InputAction : input.getAction();
    const extractedCount = coins.filter(c => c.extracted).length;
    const remaining = totalCoins - extractedCount;

    // --- Snap sequence / game over ---
    if (patience.snapTriggered) {
      // Consume inputs so they don't queue up
      input.consumeLeftPresses();
      input.consumeRightPresses();
    }

    // --- Discrete rotation ---
    if (action !== 'shake') {
      const leftPresses = input.consumeLeftPresses();
      const rightPresses = input.consumeRightPresses();
      const net = rightPresses - leftPresses;
      if (net !== 0) {
        currentPos = ((currentPos + net) % POSITIONS + POSITIONS) % POSITIONS;
        audio.playTick();
        haptics.tick();
        lastTickTime = performance.now();
        lastTickDelta = net;
      }
    } else {
      input.consumeLeftPresses();
      input.consumeRightPresses();
      if (prevAction !== 'shake' && lastTickDelta !== 0 && performance.now() - lastTickTime < SHAKE_TOLERANCE_MS) {
        currentPos = ((currentPos - lastTickDelta) % POSITIONS + POSITIONS) % POSITIONS;
        lastTickDelta = 0;
      }
    }

    const targetAngle = currentPos * POS_ANGLE;

    // --- Telegraph system ---
    updateTelegraph(telegraph, currentPos, coins, POSITIONS, dt);

    if (telegraph.justMissed) {
      drainPatience(patience, DRAIN_MISSED_TELEGRAPH);
      comboCount = 0;
    }
    if (telegraph.justReassigned) {
      audio.playCoinShift();
    }

    if (telegraph.justOpened) {
      audio.playTelegraphChime();
      haptics.telegraphOpen();
      tellIsCandle = Math.random() < 0.5;
      if (tellIsCandle) flameBlink = 1.0;  // sharp candle blink
    }
    flameBlink = Math.max(0, flameBlink - dt * 4);  // fade over ~0.25s

    // --- Shake windup ---
    if (action === 'shake') {
      if (prevAction !== 'shake') {
        shakeWindup = SHAKE_WINDUP_MS;
        shakeActive = false;
        shakeHitTimer = 0;
      }
      if (shakeWindup > 0) {
        shakeWindup -= ticker.deltaMS;
        if (shakeWindup <= 0) {
          shakeActive = true;
          shakeHitTimer = SHAKE_HIT_INTERVAL;
        }
      }
    } else {
      shakeWindup = 0;
      shakeActive = false;
      shakeHitTimer = 0;
    }

    // --- Shake hits ---
    if (shakeActive) {
      shakeHitTimer += dt;
      if (shakeHitTimer >= SHAKE_HIT_INTERVAL) {
        shakeHitTimer -= SHAKE_HIT_INTERVAL;
        haptics.shakeHit();

        // Slot screen position for 3D particle spawning
        const slotAngle = chestAssembly.rotation;
        const slotCos = Math.cos(slotAngle);
        const slotSin = Math.sin(slotAngle);
        const slotScreenX = chestAssembly.x + (-(- CHEST_H / 2 - SLOT_H / 2)) * slotSin;
        const slotScreenY = chestAssembly.y + (-CHEST_H / 2 - SLOT_H / 2) * slotCos;

        // Telegraph extract: instant, bright
        if (telegraph.activeCoin && !telegraph.activeCoin.extracted) {
          const coin = telegraph.activeCoin;
          coin.extracted = true;
          comboCount++;
          telegraphExtracts++;

          // Combo intensity: smooth 0→1 ramp from count 1 to 6
          const comboIntensity = Math.min(1, (comboCount - 1) / 5);

          // Audio: escalating combo sound or normal telegraph extract
          if (comboCount >= 2) {
            audio.playComboExtract(coin.type, comboCount);
          } else {
            audio.playTelegraphExtract(coin.type);
          }
          haptics.coinOut(true, comboIntensity);

          // Visual: flash scales with combo
          spawnFlyingCoin(coin.type, true, comboIntensity);
          telegraphFlashAlpha = 0.2 + comboIntensity * 0.25;
          rewardSilence = REWARD_SILENCE;

          // 3D particle burst — scales with combo
          particles3d.spawnCoinBurst(
            slotScreenX, slotScreenY,
            COIN_COLORS[coin.type],
            8 + Math.round(comboIntensity * 10),
            comboIntensity,
          );

          // Screen shake — subtle on normal extract, escalates with combo
          screenShakeIntensity = Math.max(screenShakeIntensity, 0.1 + comboIntensity * 0.3);

          // Combo milestones: confetti bursts
          if (comboCount === 3) {
            particles3d.spawnConfetti(20);
            screenShakeIntensity = Math.max(screenShakeIntensity, 0.4);
            haptics.comboMilestone(3);
          } else if (comboCount === 5) {
            particles3d.spawnConfetti(40);
            screenShakeIntensity = Math.max(screenShakeIntensity, 0.6);
            haptics.comboMilestone(5);
          } else if (comboCount === 10) {
            particles3d.spawnConfetti(80);
            screenShakeIntensity = Math.max(screenShakeIntensity, 0.8);
            haptics.comboMilestone(10);
          }

          // Patience: combo drains much less
          drainPatience(patience, comboCount >= 2 ? DRAIN_COMBO_EXTRACT : DRAIN_TELEGRAPH_EXTRACT);

          // Spawn next coin from pool
          spawnNextCoin();

          // Clear telegraph state
          telegraph.directionHint = 0;
          telegraph.directionHintTimer = 0;
          telegraph.activeCoin = null;
          telegraph.windowTimer = 0;
          telegraph.cooldown = 0;
        } else {
          // Combo breaks on any non-telegraph shake
          comboCount = 0;

          // Near-miss check
          const nearMiss = isNearMiss(currentPos, coins, POSITIONS, telegraph);

          // Bruteforce
          bruteforceCounter++;
          drainPatience(patience, DRAIN_BRUTEFORCE_SHAKE);
          if (bruteforceCounter >= BRUTEFORCE_THRESHOLD) {
            bruteforceCounter = 0;
            const extracted = extractRandom(coins);
            if (extracted) {
              audio.playCoinOut(extracted.type);
              haptics.coinOut(false, 0);
              spawnFlyingCoin(extracted.type, false, 0);
              rewardSilence = REWARD_SILENCE;
              // Small 3D burst for bruteforce (duller, fewer particles)
              particles3d.spawnCoinBurst(slotScreenX, slotScreenY, COIN_COLORS[extracted.type], 4, 0);
              screenShakeIntensity = Math.max(screenShakeIntensity, 0.08);
              spawnNextCoin();
            }
          } else if (nearMiss) {
            audio.playNearMiss();
            drainPatience(patience, DRAIN_NEAR_MISS);
          } else {
            const prox = bestProximity(currentPos, coins, POSITIONS);
            audio.playShakeRattle(Math.max(0.15, prox));
          }
        }
      }
    }

    // --- Proximity audio (Geiger counter) ---
    rewardSilence = Math.max(0, rewardSilence - dt);
    if (action !== 'shake' && rewardSilence <= 0) {
      const prox = bestProximity(currentPos, coins, POSITIONS);
      audio.updateProximity(prox, dt);
      haptics.updateProximity(prox, dt);
    } else if (action === 'shake') {
      audio.resetProximity();
      haptics.resetProximity();
    }

    // --- Hand squeeze ---
    const leftTarget = (action === 'left' || action === 'shake') ? HAND_SQUEEZE : HAND_NORMAL;
    const rightTarget = (action === 'right' || action === 'shake') ? HAND_SQUEEZE : HAND_NORMAL;
    leftHandSqueeze += (leftTarget - leftHandSqueeze) * Math.min(1, HAND_SQUEEZE_SPEED * dt);
    rightHandSqueeze += (rightTarget - rightHandSqueeze) * Math.min(1, HAND_SQUEEZE_SPEED * dt);
    leftHand.scale.x = leftHandSqueeze;
    rightHand.scale.x = rightHandSqueeze;

    // --- Patience update (skip if all coins extracted — don't snap on a win) ---
    if (remaining > 0) {
      updatePatience(patience, dt);
    }

    // Stage transition audio
    if (stageChanged(patience)) {
      if (patience.stage === 'twitchy' && prevPatienceStage === 'calm') {
        audio.playMimicShiver();
      }
      prevPatienceStage = patience.stage;
    }

    // Periodic audio per stage
    if (patience.stage === 'agitated' && !patience.snapTriggered) {
      growlTimer -= dt;
      if (growlTimer <= 0) {
        audio.playMimicGrowl(patience.growlIntensity);
        haptics.mimicGrowl();
        growlTimer = 0.3 + Math.random() * 0.2;
      }
    }
    if (patience.justShivered) {
      audio.playMimicShiver();
      haptics.mimicShiver();
    }
    if (patience.justChattered) {
      audio.playTeethChatter();
      haptics.mimicChatter();
    }

    // Snap sequence audio
    if (patience.snapTriggered && !snapWarningPlayed && patience.snapPhase === 0) {
      audio.playWarningGrowl();
      haptics.snapWarning();
      snapWarningPlayed = true;
    }
    if (patience.snapTriggered && !snapSoundPlayed && patience.snapPhase === 2) {
      audio.playMimicSnap();
      haptics.mimicSnap();
      snapSoundPlayed = true;
      snapShakeIntensity = 1.0;
    }

    // --- Breathing ---
    const bSpeedMul = breathSpeedMultiplier(patience);
    const bAmpMul = breathAmplitudeMultiplier(patience);
    breathTime += dt * BREATH_SPEED * bSpeedMul * Math.PI * 2;
    const breathScale = 1 + Math.sin(breathTime) * BREATH_AMOUNT * bAmpMul;

    // --- Snap animation ---
    let angleDiff = targetAngle - displayAngle;
    while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
    while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;

    const springForce = angleDiff * SNAP_SPEED;
    const damping = 16.0;
    snapVel += (springForce - snapVel * damping) * dt;
    displayAngle += snapVel * dt;

    // --- Stage-based tremor ---
    let stageJitterX = 0;
    let stageJitterY = 0;
    let stageJitterRot = 0;
    if (patience.shiverActive > 0) {
      // Sharp involuntary shiver
      stageJitterX = (Math.random() - 0.5) * 6;
      stageJitterY = (Math.random() - 0.5) * 4;
      stageJitterRot = (Math.random() - 0.5) * 0.03;
    } else if (patience.stage === 'agitated' && !patience.snapTriggered) {
      // Constant subtle vibration
      stageJitterX = (Math.random() - 0.5) * 3;
      stageJitterY = (Math.random() - 0.5) * 2;
      stageJitterRot = (Math.random() - 0.5) * 0.015;
    }

    // --- Screen shake (snap + coin extraction/combo) ---
    snapShakeIntensity = Math.max(0, snapShakeIntensity - dt * 3);
    screenShakeIntensity = Math.max(0, screenShakeIntensity - dt * 6);
    const totalShake = Math.max(snapShakeIntensity, screenShakeIntensity);
    const snapShakeX = totalShake > 0 ? (Math.random() - 0.5) * 30 * totalShake : 0;
    const snapShakeY = totalShake > 0 ? (Math.random() - 0.5) * 20 * totalShake : 0;

    // --- Apply chest position ---
    if (patience.snapTriggered && patience.snapPhase >= 1) {
      // During freeze + snap: chest locked in place (no breathing, no jitter)
      const posLerp = Math.min(1, 12 * dt);
      chestAssembly.x += (cx + snapShakeX - chestAssembly.x) * posLerp;
      chestAssembly.y += (cy + snapShakeY - chestAssembly.y) * posLerp;
      chestAssembly.rotation = displayAngle;
      chestAssembly.scale.set(1);
    } else if (shakeActive) {
      chestAssembly.x = cx + (Math.random() - 0.5) * SHAKE_JITTER_POS;
      chestAssembly.y = cy + (Math.random() - 0.5) * SHAKE_JITTER_POS * 0.6;
      chestAssembly.rotation = displayAngle + (Math.random() - 0.5) * SHAKE_JITTER_ROT;
      chestAssembly.scale.set(breathScale);
    } else {
      const posLerp = Math.min(1, 12 * dt);
      chestAssembly.x += (cx + stageJitterX - chestAssembly.x) * posLerp;
      chestAssembly.y += (cy + stageJitterY - chestAssembly.y) * posLerp;
      chestAssembly.rotation = displayAngle + stageJitterRot;
      chestAssembly.scale.set(breathScale);
    }

    // --- Candle flame ---
    flameTime += dt;
    // Target lean: during telegraph (candle tell only), lean hard toward next coin direction
    const candleDir = (tellIsCandle && telegraph.activeCoin) ? dirToNext() : 0;
    // Lean toward next coin during telegraph, also linger after extract
    const leanTarget = candleDir !== 0 ? candleDir
      : (tellIsCandle && telegraph.directionHintTimer > 0 ? telegraph.directionHint * 0.8 : 0);
    flameLean += (leanTarget - flameLean) * Math.min(1, 6 * dt);
    // Flicker noise — intensifies with mimic agitation
    const flickMul = candleFlickerMultiplier(patience);
    const flicker1 = Math.sin(flameTime * 11) * 0.08 * flickMul;
    const flicker2 = Math.sin(flameTime * 17 + 2) * 0.05 * flickMul;
    const flicker3 = Math.sin(flameTime * 7 + 5) * 0.04 * flickMul;
    const flickerTotal = flicker1 + flicker2 + flicker3;
    const isTelegraphing = telegraph.activeCoin != null || telegraph.directionHintTimer > 0;
    const blinkBoost = flameBlink * flameBlink;  // quadratic ease-out for sharp attack
    const flameH = (isTelegraphing ? 38 : 28) + blinkBoost * 20;  // surge taller on blink
    const flameScale = 0.9 + Math.sin(flameTime * 5) * 0.1 + flickerTotal;
    const flameTilt = flameLean * 2.0 + flickerTotal * 0.3;
    // Flame color: lerp toward white during blink
    const outerR = 0xff, outerG = 0x88 + Math.round(blinkBoost * 0x77), outerB = Math.round(blinkBoost * 0xcc);
    const innerR = 0xff, innerG = 0xdd + Math.round(blinkBoost * 0x22), innerB = 0x44 + Math.round(blinkBoost * 0xbb);
    const outerColor = (outerR << 16) | (outerG << 8) | outerB;
    const innerColor = (innerR << 16) | (innerG << 8) | innerB;
    // Draw flame — bigger and more dramatically tilted
    flame.clear();
    flame.moveTo(0, -4);
    flame.quadraticCurveTo(-8 + flameTilt * 14, -flameH * 0.55, flameTilt * 12, -flameH * flameScale);
    flame.quadraticCurveTo(8 + flameTilt * 14, -flameH * 0.55, 0, -4);
    flame.fill({ color: outerColor });
    // Inner bright core
    flame.moveTo(0, -5);
    flame.quadraticCurveTo(-4 + flameTilt * 8, -flameH * 0.45, flameTilt * 7, -flameH * 0.7 * flameScale);
    flame.quadraticCurveTo(4 + flameTilt * 8, -flameH * 0.45, 0, -5);
    flame.fill({ color: innerColor });
    // Glow intensity tracks flame — bigger glow during telegraph + blink surge + combo flare
    const comboGlow = comboCount >= 2 ? Math.min(1, (comboCount - 1) / 5) * 0.2 : 0;
    candleGlow.alpha = 0.04 + flameScale * 0.03 + (isTelegraphing ? 0.08 : 0) + blinkBoost * 0.25 + comboGlow;
    candleGlow.x = flameTilt * 10;


    // --- Flying coins ---
    for (let i = flyingCoins.length - 1; i >= 0; i--) {
      const fc = flyingCoins[i];
      fc.age += dt;
      fc.vy += COIN_GRAVITY * dt;
      fc.x += fc.vx * dt;
      fc.y += fc.vy * dt;
      fc.rotation += fc.rotSpeed * dt;

      fc.graphic.x = fc.x;
      fc.graphic.y = fc.y;
      fc.graphic.rotation = fc.rotation;

      const fadeStart = COIN_LIFETIME * 0.7;
      if (fc.age > fadeStart) {
        fc.graphic.alpha = 1 - (fc.age - fadeStart) / (COIN_LIFETIME - fadeStart);
      }

      if (fc.age >= COIN_LIFETIME) {
        app.stage.removeChild(fc.graphic);
        fc.graphic.destroy();
        flyingCoins.splice(i, 1);
      }
    }

    // --- 3D particles ---
    particles3d.update(dt);

    // --- Gargoyle eyes (only when gargoyle tell is active) ---
    const gargDir = (!tellIsCandle && telegraph.activeCoin) ? dirToNext() : 0;
    const leftEyeTarget = gargDir < 0 ? 1 : 0;
    const rightEyeTarget = gargDir > 0 ? 1 : 0;
    leftEyeGlow += (leftEyeTarget - leftEyeGlow) * Math.min(1, 8 * dt);
    rightEyeGlow += (rightEyeTarget - rightEyeGlow) * Math.min(1, 8 * dt);
    // Pulse while active
    const eyePulse = telegraph.activeCoin ? 0.15 * Math.sin(flameTime * 6) : 0;
    leftGarg.eyeGlow.alpha = Math.max(0, leftEyeGlow + (leftEyeGlow > 0.1 ? eyePulse : 0));
    rightGarg.eyeGlow.alpha = Math.max(0, rightEyeGlow + (rightEyeGlow > 0.1 ? eyePulse : 0));

    // --- Mimic eyes ---
    const extractionRatio = extractedCount / totalCoins;
    // Fade in: 0 below 40% extraction OR when patience drops below twitchy
    const eyeFromExtraction = Math.max(0, Math.min(1, (extractionRatio - 0.4) / 0.2));
    const eyeFromPatience = patience.stage !== 'calm' ? 1 : 0;
    const eyeTargetAlpha = Math.max(eyeFromExtraction, eyeFromPatience);
    mimicEyeAlpha += (eyeTargetAlpha - mimicEyeAlpha) * Math.min(1, 3 * dt);
    mimicEyes.alpha = mimicEyeAlpha;

    if (mimicEyeAlpha > 0.05) {
      // Pupil glance: toward direction hint, or dart randomly when agitated
      let eyeDir = telegraph.activeCoin ? dirToNext() : 0;

      // Agitated/twitchy: occasional random darting — faster during combo (panicking)
      const comboPanic = comboCount >= 3 ? 0.08 + Math.min(1, (comboCount - 1) / 5) * 0.12 : 0;
      if ((patience.stage === 'agitated' || comboPanic > 0) && Math.random() < 0.05 + comboPanic) {
        eyeDir = Math.random() < 0.5 ? -1 : 1;
      } else if (patience.stage === 'twitchy' && Math.random() < 0.02) {
        eyeDir = Math.random() < 0.5 ? -1 : 1;
      }

      const pupilTarget = eyeDir * 6;
      mimicPupilX += (pupilTarget - mimicPupilX) * Math.min(1, 10 * dt);
      leftPupil.x = mimicPupilX;
      leftIris.x = mimicPupilX * 0.6;
      leftHighlight.x = -2 + mimicPupilX;
      rightPupil.x = mimicPupilX;
      rightIris.x = mimicPupilX * 0.6;
      rightHighlight.x = -2 + mimicPupilX;

      // Widen: telegraph > agitated > twitchy > calm
      let widenTarget = 1.0;
      if (telegraph.activeCoin) widenTarget = 1.4;
      else if (patience.stage === 'agitated') widenTarget = 1.3;
      else if (patience.stage === 'twitchy') widenTarget = 1.1;
      // Combo panic: mimic eyes widen as combo escalates
      if (comboCount >= 2) {
        const ci = Math.min(1, (comboCount - 1) / 5);
        widenTarget = Math.max(widenTarget, 1.4 + ci * 0.4);
      }
      // Snap warning: eyes go very wide
      if (patience.snapTriggered && patience.snapPhase === 0) widenTarget = 1.6;
      mimicEyeWiden += (widenTarget - mimicEyeWiden) * Math.min(1, 8 * dt);

      // Blink — random interval, skip during telegraph, faster when agitated
      if (mimicBlinkPhase <= 0 && !telegraph.activeCoin) {
        mimicBlinkTimer -= dt;
        if (mimicBlinkTimer <= 0) {
          mimicBlinkPhase = 1.0;
          const blinkInterval = patience.stage === 'agitated' ? 1 + Math.random() * 2
            : patience.stage === 'twitchy' ? 1.5 + Math.random() * 3
            : 2 + Math.random() * 4;
          mimicBlinkTimer = blinkInterval;
        }
      }
      if (mimicBlinkPhase > 0) {
        mimicBlinkPhase -= dt / MIMIC_BLINK_DURATION;
        if (mimicBlinkPhase < 0) mimicBlinkPhase = 0;
      }

      // Apply: blink overrides widen (squash to 0 at peak of blink)
      const blinkCurve = mimicBlinkPhase > 0.5
        ? 1 - (mimicBlinkPhase - 0.5) * 2   // closing: 1→0
        : mimicBlinkPhase * 2;                // opening: 0→1
      const finalScaleY = mimicEyeWiden * (mimicBlinkPhase > 0 ? blinkCurve : 1);
      leftEyeContainer.scale.y = finalScaleY;
      rightEyeContainer.scale.y = finalScaleY;
    }

    // --- Flash overlays ---
    const fadeOut = 8;
    const flashOn = 0.1;

    if (action === 'left') {
      leftFlashAlpha = flashOn;
      rightFlashAlpha = Math.max(0, rightFlashAlpha - fadeOut * dt);
    } else if (action === 'right') {
      rightFlashAlpha = flashOn;
      leftFlashAlpha = Math.max(0, leftFlashAlpha - fadeOut * dt);
    } else if (action === 'shake') {
      leftFlashAlpha = flashOn;
      rightFlashAlpha = flashOn;
      leftFlash.tint = SHAKE_FLASH;
      rightFlash.tint = SHAKE_FLASH;
    } else {
      leftFlashAlpha = Math.max(0, leftFlashAlpha - fadeOut * dt);
      rightFlashAlpha = Math.max(0, rightFlashAlpha - fadeOut * dt);
    }
    if (action !== 'shake') {
      leftFlash.tint = LEFT_FLASH;
      rightFlash.tint = RIGHT_FLASH;
    }

    leftFlash.alpha = leftFlashAlpha;
    rightFlash.alpha = rightFlashAlpha;

    // Telegraph flash (golden)
    telegraphFlashAlpha = Math.max(0, telegraphFlashAlpha - 3 * dt);
    telegraphFlash.alpha = telegraphFlashAlpha;

    // --- Action label ---
    if (action !== prevAction && action !== 'none') {
      actionLabel.text = action.toUpperCase();
      actionLabelAlpha = 1;
      if (action === 'shake') actionLabel.style.fill = SHAKE_FLASH;
      else if (action === 'left') actionLabel.style.fill = LEFT_FLASH;
      else actionLabel.style.fill = RIGHT_FLASH;
    }
    actionLabelAlpha = Math.max(0, actionLabelAlpha - 2.5 * dt);
    actionLabel.alpha = actionLabelAlpha;

    // --- Snap sequence visuals (in-game, before transition to results) ---
    if (patience.snapTriggered) {
      if (patience.snapPhase >= 3) {
        const darkTarget = 1;
        darkOverlay.alpha += (darkTarget - darkOverlay.alpha) * Math.min(1, 5 * dt);
      } else if (patience.snapPhase >= 2) {
        darkOverlay.alpha = 0.3 * snapShakeIntensity;
      }

      // Transition to results state when snap completes
      if (patience.gameOver && gameState === 'playing') {
        isWin = false;
        starsEarned = 0;
        resultsText.text = `${extractedCount} / ${totalCoins} coins extracted`;
        gameState = 'results';
        resultsTimer = 0;
      }
    } else {
      darkOverlay.alpha = 0;
    }

    // --- Run timer ---
    if (!runStarted && action !== 'none') runStarted = true;
    if (runStarted && !runFinished && !patience.snapTriggered) runTimer += dt;
    if ((remaining === 0 || patience.gameOver) && !runFinished) {
      runFinished = true;
      // Chest-empty celebration + transition to results
      if (remaining === 0 && !celebrationFired) {
        celebrationFired = true;
        particles3d.spawnCelebration();
        screenShakeIntensity = 1.0;
      }
      if (remaining === 0 && gameState === 'playing') {
        isWin = true;
        // Star rating
        starsEarned = 1; // always 1 star for clearing
        if (runTimer < TIME_LIMIT) starsEarned = 2;
        if (telegraphExtracts >= totalCoins) starsEarned = 3;
        const secs = runTimer;
        const timerStr = secs < 60
          ? `${secs.toFixed(1)}s`
          : `${Math.floor(secs / 60)}:${(secs % 60).toFixed(1).padStart(4, '0')}`;
        resultsText.text = `${totalCoins} coins  ·  ${timerStr}`;
        // Delay transition slightly so celebration particles are visible
        setTimeout(() => {
          if (gameState === 'playing') {
            gameState = 'results';
            resultsTimer = 0;
          }
        }, 800);
      }
    }

    // --- Coin counter ---
    if (!patience.snapTriggered && !runFinished) {
      const secs = runTimer;
      const timerStr = secs < 60
        ? `${secs.toFixed(1)}s`
        : `${Math.floor(secs / 60)}:${(secs % 60).toFixed(1).padStart(4, '0')}`;
      const patiencePct = Math.round(patience.value * 100);
      coinText.text = `${extractedCount}/${totalCoins}  ${timerStr}`;
      // Patience debug in debug text
      const deg = (currentPos * 360 / POSITIONS) % 360;
      const nearest = nearestCoin(currentPos, coins, POSITIONS);
      const nearProx = nearest ? coinProximity(currentPos, nearest, POSITIONS).toFixed(2) : '0';
      const tgState = telegraph.activeCoin ? `TG:${telegraph.windowTimer.toFixed(1)}s` : 'tg:off';
      const dirHint = telegraph.directionHint < 0 ? 'dir:<' : telegraph.directionHint > 0 ? 'dir:>' : '';
      const missInfo = nearest ? `miss:${nearest.misses}/2` : '';
      const comboStr = comboCount > 0 ? `combo:${comboCount}x` : '';
      debugText.text = `${action}  |  pos: ${currentPos}/${POSITIONS}  |  ${deg}°  |  prox: ${nearProx}  |  bf: ${bruteforceCounter}/${BRUTEFORCE_THRESHOLD}  |  ${tgState}  ${dirHint}  ${missInfo}  ${comboStr}  |  ${remaining} left  |  patience: ${patiencePct}% [${patience.stage}]`;
    } else {
      coinText.text = '';
      debugText.text = '';
    }

    prevAction = action;
  });
}

// --- Drawing functions ---

function drawChest(g: Graphics, w: number, h: number) {
  g.roundRect(-w / 2, -h / 2, w, h, 12);
  g.fill({ color: CHEST_COLOR });
  g.roundRect(-w / 2, -h / 2, w, h, 12);
  g.stroke({ color: CHEST_OUTLINE, width: 4 });

  g.moveTo(-w / 2 + 8, -h / 2 + h * 0.35);
  g.lineTo(w / 2 - 8, -h / 2 + h * 0.35);
  g.stroke({ color: CHEST_OUTLINE, width: 2 });

  for (const y of [-h / 2 + h * 0.15, h / 2 - h * 0.15]) {
    g.roundRect(-w / 2 - 2, y - 4, w + 4, 8, 2);
    g.fill({ color: 0x666655 });
  }

  g.roundRect(-16, -20, 32, 40, 6);
  g.fill({ color: 0x888870 });
  g.roundRect(-16, -20, 32, 40, 6);
  g.stroke({ color: 0x555540, width: 2 });
}

function drawHand(g: Graphics, w: number, h: number, isLeft: boolean) {
  const flip = isLeft ? 1 : -1;

  g.roundRect(-w / 2, -h / 2, w, h, 10);
  g.fill({ color: HAND_COLOR });
  g.roundRect(-w / 2, -h / 2, w, h, 10);
  g.stroke({ color: HAND_OUTLINE, width: 2 });

  const fingerSide = isLeft ? w / 2 : -w / 2;
  for (let i = 0; i < 4; i++) {
    const fy = -h / 2 + 10 + i * 13;
    g.roundRect(fingerSide - 5 * flip, fy, 10 * flip, 10, 4);
    g.fill({ color: HAND_COLOR });
    g.roundRect(fingerSide - 5 * flip, fy, 10 * flip, 10, 4);
    g.stroke({ color: HAND_OUTLINE, width: 1 });
  }

  const thumbX = isLeft ? -w / 2 + 4 : w / 2 - 4;
  g.ellipse(thumbX, -h / 2 + 8, 7, 10);
  g.fill({ color: HAND_COLOR });
  g.ellipse(thumbX, -h / 2 + 8, 7, 10);
  g.stroke({ color: HAND_OUTLINE, width: 1 });
}

main();
