/**
 * Mimic patience system — the chest is alive and gets angrier as you fumble.
 * Patience drains from player actions; behavior stages create escalating tension.
 */

export type MimicStage = 'calm' | 'twitchy' | 'agitated' | 'snap';

export interface PatienceState {
  value: number;              // 0–1, starts at 1
  stage: MimicStage;
  prevStage: MimicStage;      // detect stage transitions
  snapTriggered: boolean;     // true once snap sequence begins
  snapPhase: number;          // 0=warning growl, 1=freeze, 2=snap, 3=dark, 4=results
  snapTimer: number;          // countdown within current snap phase
  gameOver: boolean;          // true after snap completes
  // Ambient behavior timers
  shiverTimer: number;        // countdown to next random shiver (twitchy)
  shiverActive: number;       // >0 = currently shivering (duration remaining)
  justShivered: boolean;      // true for one frame when shiver starts
  chatterTimer: number;       // countdown to next teeth chatter (agitated)
  justChattered: boolean;     // true for one frame when chatter fires
  growlIntensity: number;     // 0–1, ramps up in agitated stage
}

// --- Drain amounts ---
export const DRAIN_TELEGRAPH_EXTRACT = 0.008;   // minimal — skilled play
export const DRAIN_MISSED_TELEGRAPH = 0.03;     // moderate — you blew a window
export const DRAIN_BRUTEFORCE_SHAKE = 0.01;     // per hit — 8 hits = 0.08 total
export const DRAIN_NEAR_MISS = 0.002;           // tiny nudge
export const DRAIN_COMBO_EXTRACT = 0.002;       // combo — stunned mimic barely resists

// --- Stage thresholds ---
export const STAGE_CALM_MIN = 0.7;
export const STAGE_TWITCHY_MIN = 0.4;
export const STAGE_AGITATED_MIN = 0.15;

// --- Snap sequence timing ---
export const SNAP_WARNING_DUR = 0.5;    // warning growl
export const SNAP_FREEZE_DUR = 0.6;     // eerie stillness
export const SNAP_ANIM_DUR = 0.3;       // the snap itself
export const SNAP_DARK_DUR = 0.8;       // fade to black
export const SNAP_TOTAL = SNAP_WARNING_DUR + SNAP_FREEZE_DUR + SNAP_ANIM_DUR + SNAP_DARK_DUR;

// --- Behavior timers ---
const SHIVER_INTERVAL_MIN = 1.5;
const SHIVER_INTERVAL_MAX = 4.0;
const SHIVER_DURATION = 0.2;
const CHATTER_INTERVAL_MIN = 0.8;
const CHATTER_INTERVAL_MAX = 2.5;

export function createPatienceState(): PatienceState {
  return {
    value: 1.0,
    stage: 'calm',
    prevStage: 'calm',
    snapTriggered: false,
    snapPhase: 0,
    snapTimer: 0,
    gameOver: false,
    shiverTimer: SHIVER_INTERVAL_MIN + Math.random() * (SHIVER_INTERVAL_MAX - SHIVER_INTERVAL_MIN),
    shiverActive: 0,
    justShivered: false,
    chatterTimer: CHATTER_INTERVAL_MIN + Math.random() * (CHATTER_INTERVAL_MAX - CHATTER_INTERVAL_MIN),
    justChattered: false,
    growlIntensity: 0,
  };
}

export function getStage(value: number): MimicStage {
  if (value >= STAGE_CALM_MIN) return 'calm';
  if (value >= STAGE_TWITCHY_MIN) return 'twitchy';
  if (value >= STAGE_AGITATED_MIN) return 'agitated';
  return 'snap';
}

export function drainPatience(state: PatienceState, amount: number): void {
  if (state.snapTriggered || state.gameOver) return;
  state.prevStage = state.stage;
  state.value = Math.max(0, state.value - amount);
  state.stage = getStage(state.value);
}

/** Returns true when a new stage transition just happened */
export function stageChanged(state: PatienceState): boolean {
  return state.stage !== state.prevStage;
}

/** Update per-frame behavior timers and snap sequence */
export function updatePatience(state: PatienceState, dt: number): void {
  state.justShivered = false;
  state.justChattered = false;

  if (state.gameOver) return;

  // --- Snap sequence ---
  if (state.stage === 'snap' && !state.snapTriggered) {
    state.snapTriggered = true;
    state.snapPhase = 0;
    state.snapTimer = SNAP_WARNING_DUR;
  }

  if (state.snapTriggered && !state.gameOver) {
    state.snapTimer -= dt;
    if (state.snapTimer <= 0) {
      state.snapPhase++;
      if (state.snapPhase === 1) state.snapTimer = SNAP_FREEZE_DUR;
      else if (state.snapPhase === 2) state.snapTimer = SNAP_ANIM_DUR;
      else if (state.snapPhase === 3) state.snapTimer = SNAP_DARK_DUR;
      else state.gameOver = true;
    }
    return; // no ambient behavior during snap
  }

  // --- Twitchy shivers ---
  if (state.stage === 'twitchy' || state.stage === 'agitated') {
    if (state.shiverActive > 0) {
      state.shiverActive -= dt;
    } else {
      state.shiverTimer -= dt;
      if (state.shiverTimer <= 0) {
        state.shiverActive = SHIVER_DURATION;
        state.justShivered = true;
        const range = state.stage === 'agitated'
          ? SHIVER_INTERVAL_MIN * 0.5
          : SHIVER_INTERVAL_MAX - SHIVER_INTERVAL_MIN;
        const min = state.stage === 'agitated' ? SHIVER_INTERVAL_MIN * 0.3 : SHIVER_INTERVAL_MIN;
        state.shiverTimer = min + Math.random() * range;
      }
    }
  }

  // --- Agitated teeth chatter ---
  if (state.stage === 'agitated') {
    state.chatterTimer -= dt;
    if (state.chatterTimer <= 0) {
      state.justChattered = true;
      state.chatterTimer = CHATTER_INTERVAL_MIN + Math.random() * (CHATTER_INTERVAL_MAX - CHATTER_INTERVAL_MIN);
    }
    // Growl ramps up over time in agitated
    state.growlIntensity = Math.min(1, state.growlIntensity + dt * 0.5);
  } else {
    state.growlIntensity = Math.max(0, state.growlIntensity - dt * 2);
  }
}

/** Breathing speed multiplier based on stage */
export function breathSpeedMultiplier(state: PatienceState): number {
  switch (state.stage) {
    case 'calm': return 1.0;
    case 'twitchy': return 1.6;
    case 'agitated': return 2.4;
    case 'snap': return 0; // frozen
  }
}

/** Breathing amplitude multiplier — agitated breathing is bigger */
export function breathAmplitudeMultiplier(state: PatienceState): number {
  switch (state.stage) {
    case 'calm': return 1.0;
    case 'twitchy': return 1.3;
    case 'agitated': return 1.8;
    case 'snap': return 0;
  }
}

/** Candle flicker intensity multiplier */
export function candleFlickerMultiplier(state: PatienceState): number {
  switch (state.stage) {
    case 'calm': return 1.0;
    case 'twitchy': return 1.5;
    case 'agitated': return 2.5;
    case 'snap': return 0;
  }
}
