# SUNDUK — Implementation Plan

## Tech Stack

- **PixiJS** — 2D rendering (gameplay, UI, environment)
- **Three.js** — 3D particle overlay (coin bursts, confetti, celebrations)
- **Howler.js** — Audio (primary feedback channel — coins are invisible)
- **Vite** — Bundler
- **TypeScript** — Language
- **Capacitor** — Mobile wrapper (iOS/Android) when ready to ship

## Feel-First Development

Feel is not a polish pass — it's the core product. Coins are invisible. The player experiences the game entirely through feedback: audio, visual response, haptics, and rhythm. Every phase below includes feel work as a first-class deliverable, not a follow-up.

The rule: **if an action doesn't feel like something, it doesn't exist.**

---

## Phase 1: Project Scaffold + Input Feel

- [ ] Init project: Vite + TypeScript + PixiJS
- [ ] Landscape-only viewport with responsive scaling
- [ ] Basic PixiJS scene: colored background, centered placeholder rectangle (chest)
- [ ] PC input handler: A/Left = left, D/Right = right, detect simultaneous press for shake
- [ ] Touch input handler: left half / right half of screen, multi-touch for shake
- [ ] Game loop with delta time
- [ ] **Feel: simultaneous press tolerance window** (~80ms) — pressing both buttons within this window counts as "shake" even if not frame-perfect
- [ ] **Feel: input visualization** — placeholder visual response for every input (color flash on press, different color for shake) so you can see the input system working before any gameplay exists

**Done when:** Every press and release produces immediate, visible feedback. Simultaneous press detection feels reliable — no accidental shakes, no missed intentional shakes.

## Phase 2: Chest Rotation + Hands

- [ ] Chest sprite (placeholder art) centered on screen
- [ ] Hand sprites attached to left/right edges of chest, rotate with it
- [ ] Environment background layer (static placeholder — dungeon wall, floor)
- [ ] **Feel: rotation inertia curve** — slow acceleration (~200ms to full speed), chest keeps spinning briefly on release (momentum), overshoots if you're careless
- [ ] **Feel: rotation has weight** — not linear. Starts sluggish, builds to steady speed. Different from a UI spinner — this is a heavy object
- [ ] **Feel: hand squeeze** — pressing a button visibly tightens the corresponding hand's grip (sprite frame swap or scale squeeze)
- [ ] **Feel: shake is violent** — rapid angular jitter (not smooth oscillation), chest position jitters too (not just rotation), hands strain visibly
- [ ] **Feel: the dead moment** — releasing rotate to press both buttons has a ~50ms grip-tighten before shake starts. This is the "inhale before the hit." It creates rhythm, not lag
- [ ] **Feel: idle breathing** — even with no input, the chest subtly rises/falls (mimic breathing). The world is alive before you touch it

**Done when:** The chest feels heavy. Spinning it feels like wrestling an object, not moving a slider. Shaking feels violent. Letting go and watching it coast to a stop feels satisfying. The idle chest feels alive.

## Phase 3: Coin State Machine + Audio Foundation

Audio and coin state are built together — they're inseparable. The coins' existence is defined by their sound.

- [ ] Coin data model: N coins, each with type (small/medium/large), angle position, proximity-to-slot score
- [ ] Slot defined at a fixed angle on the chest
- [ ] Rotation shifts coin angle positions — some drift toward slot, others away
- [ ] Proximity score increases when coin angle is near slot angle
- [ ] Shake action: if telegraph active → coin out; else increment bruteforce counter
- [ ] Bruteforce threshold (N shakes) releases coin regardless, counter resets per coin
- [ ] Coin-out event: remove coin from internal state, increment extracted count
- [ ] Howler.js integration
- [ ] Mobile audio context unlock (require user gesture before playing)
- [ ] **Feel: rotation soundscape** — coins shift like pebbles in a jar. Many small coins = high tinkling, few heavy coins = low clunking. Continuous, reactive, not looped samples
- [ ] **Feel: proximity audio** — as coins approach slot angle, tone brightens, frequency increases (Geiger counter effect). Past the sweet spot: tone dulls, drops — "you went too far"
- [ ] **Feel: wrong direction = silence** — rotating away from everything produces near-silence, just wood creaking. Absence of sound is negative feedback
- [ ] **Feel: shake audio** — each shake = burst of coin rattling. Volume/density scales with coins near slot. Empty shake (nothing near slot) = hollow dull thud
- [ ] **Feel: coin-out moment** — distinct per type (copper = chunky thud, silver = bright ring, gold = resonant bell) + universal slot sound. Then ~200ms of silence — let the reward breathe before the world resumes
- [ ] **Feel: coin-out animation** — coin tumbles out of slot with weight, arcs downward with gravity, not a teleport

**Done when:** Eyes closed, you can tell: (1) whether you're rotating toward or away from the sweet spot, (2) whether a shake was close or empty, (3) exactly when a coin drops and what type it was. The audio tells a complete story.

## Phase 4: Telegraph System

- [ ] Telegraph state machine per coin: idle → window open → window expired
- [ ] Telegraph triggers when a coin's angle aligns with the slot (within tolerance)
- [ ] Timing window: telegraph lasts X seconds, then expires
- [ ] MVP tell #1 — **Keyhole glow**: keyhole sprite brightens/pulses during telegraph window
- [ ] MVP tell #2 — **Finger tap**: hand sprite taps the chest (visual + audio tap sound)
- [ ] Direction hint: keyhole glow drifts left/right to indicate next rotation direction
- [ ] Direction hint lingers briefly after shake (catchable even if missed during action)
- [ ] Successful shake during window = 1 shake = 1 coin out
- [ ] Missed window = bruteforce penalty applies
- [ ] **Feel: telegraph chime** — subtle audio cue when window opens (distinct from coin sounds — a clean tone cutting through the noise)
- [ ] **Feel: successful vs bruteforce shake contrast** — telegraph shake: bright, snappy, coin flies out fast. Bruteforce shake: dull, labored, coin barely tumbles out. The gap in feel IS the skill reward
- [ ] **Feel: near-miss** — shaking just outside the telegraph window produces a "promising rattle" — coins almost fell. Audio tease that you were close

**Done when:** The telegraph moment feels like a lock clicking into place. Hitting it feels sharp and rewarding. Missing it feels like a tangible loss. The difference between telegraph and bruteforce is visceral, not just mechanical.

## Phase 5: Mimic Patience + Life

- [ ] Patience value: starts at max, drains based on actions
- [ ] Drain rates: successful read (minimal) < missed telegraph (moderate) < bruteforce shake (heavy)
- [ ] Mimic behavior stages tied to patience thresholds:
  - Calm (100-70%): chest is still, breathing slowly
  - Twitchy (70-40%): occasional shivers, eyes dart, breathing quickens
  - Agitated (40-15%): chest trembles, teeth chatter, eyes wide, growling
  - Snap (<15%): warning growl, then clamp shut — game over for this chest
- [ ] End state: mimic clamps shut, show results (coins extracted / total)
- [ ] **Feel: mimic is a character, not a timer** — each patience stage changes the ambient texture of the entire scene:
  - Calm: slow breathing, quiet, candles steady
  - Twitchy: breathing hitches, occasional involuntary sound, candles flicker
  - Agitated: chest vibrates under your hands (visual jitter), growling layered into ambient audio, candles gutter, shadows shift
  - Pre-snap: brief warning growl + everything goes still for a beat → SNAP (loud, screen shake, hard cut to black → results)
- [ ] **Feel: patience is readable without a bar** — player learns to feel the stages through the changing ambient texture. The mimic's agitation becomes a telegraph of its own

**Done when:** The mimic feels alive and reactive. Rising agitation creates genuine tension. The snap moment is startling — a real gut-punch that makes you want to do better next time. Calm mimic feels like you're in control.

## Phase 6: Combo System

- [ ] Track consecutive successful telegraph reads
- [ ] During combo: next telegraph fires at current angle (no rotation needed — mimic is stunned)
- [ ] Combo break (miss or bruteforce) → reset, back to rotate-shake-rotate
- [ ] Direction hint still appears during combo (for masters to note before chain breaks)
- [ ] Combo barely drains patience (stunned mimic can't resist)
- [ ] **Feel: escalation through texture** — each combo step changes the feel:
  - 1x: normal
  - 2x: slightly faster response, brighter coin sound, small screen pulse
  - 3x: shake feels more violent, coin flies out faster, candles flare
  - 5x+: rapid-fire, screen vibrating, audio layering into crescendo, mimic visibly panicking
- [ ] **Feel: combo break contrast** — everything snaps back to calm instantly. The sudden silence after a crescendo IS the punishment. No sound effect needed — the absence is the feedback

**Done when:** A 5-hit combo feels like riding a wave. Breaking the combo feels like falling off. The player chases that escalation feeling.

## Phase 7: 3D Celebration Layer

- [ ] Three.js overlay canvas (transparent, layered over PixiJS)
- [ ] Coin-out particle burst: 3D coins/sparkles flying toward camera
- [ ] Combo milestone effects: confetti at 3x, 5x, 10x
- [ ] Chest-empty celebration: big 3D particle shower
- [ ] **Feel: 2D → 3D contrast** — the flat 2D world breaking into 3D particles creates a "breaking through" sensation. The bigger the achievement, the more the 3D layer dominates
- [ ] **Feel: screen shake** — subtle on single coin, escalates with combo, dramatic on chest-empty and mimic snap

**Done when:** Coin extraction pops out of the screen. Combo milestones feel like leveling up. Emptying a chest feels like a victory explosion. The 2D/3D contrast is tangible.

## Phase 8: Scoring + UI

- [ ] Coin counter: minimal HUD showing coins extracted / total
- [ ] Timer: tracks elapsed time (not displayed as pressure — used for star calc)
- [ ] Star rating at end:
  - 1 star: got all coins (bruteforce OK)
  - 2 stars: under time limit (need some telegraphs)
  - 3 stars: perfect run (every coin on first shake)
- [ ] End-of-chest summary screen: stars, coins, time, "retry" / "next" buttons
- [ ] Basic title/menu screen: play button
- [ ] **Feel: results screen** — coins tumble onto the results screen with sound (callback to the in-game audio). Stars light up with a beat. Not a static screen — the rewards arrive.

**Done when:** Full play session possible: menu → play chest → results screen → retry. Results screen feels like a payoff, not a spreadsheet.

## Phase 9: Haptics (Mobile)

- [ ] Capacitor haptics plugin integration
- [ ] Rotation: low constant rumble, intensity scales with proximity to sweet spot
- [ ] Shake: sharp burst pulses
- [ ] Coin-out: strong single snap
- [ ] Telegraph window: single tick
- [ ] Mimic agitation stages: increasingly irregular pulses
- [ ] Mimic snap: hard single buzz
- [ ] Combo: escalating snap intensity per step

**Done when:** Playing on a phone, you can feel the coins through your hands. The phone feels like the chest.

## Phase 10: Mobile + Ship

- [ ] Capacitor project setup (iOS + Android targets)
- [ ] Touch input tuning: dead zones, simultaneous press tolerance window
- [ ] Performance profiling on real devices (target: 60fps stable)
- [ ] Audio latency testing on mobile (critical — late audio breaks the feel)
- [ ] Landscape orientation lock
- [ ] Splash screen, app icon (placeholder)
- [ ] Build and test on physical iOS + Android devices

**Done when:** Playable on a real phone. Feels good to hold and play in landscape. 60fps. Audio synced. Haptics tight. No moment feels hollow.

---

## Critical Path

Phases 1–4 are the core feel loop. If **rotate (heavy, creaking) → listen (coins shifting) → telegraph (chime, glow) → shake (violent, snappy) → coin out (cha-ching, arc, silence)** feels good at the end of Phase 4, the game works.

Phase 5 adds tension. Phase 6 adds ecstasy. Everything after amplifies what's already there.

## Post-MVP Roadmap (not in scope)

1. Mimic chest with full eye/tongue/body telegraphs
2. Multiple chest types with different slot positions
3. Party system with hero passives
4. Dungeon progression (room-by-room map)
5. Visual progression (player's sunduk grows with wealth)
6. Special chests (cursed, fragile, bottomless)
7. Full F2P monetization (IAP, ads, loot system)
8. Each Chest = New Language (pirate/wizard/ancient telegraph sets)
9. Leaderboards + personal bests
10. In-universe guide / manual zine
