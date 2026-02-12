# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SUNDUK is a hyper-casual mobile game where you shake treasure chests to extract coins through a slot. Two-button controls (left/right grip), landscape-only orientation, emphasis on "game feel" — audio/visual feedback is the core product, not a polish pass. Coins are invisible inside the chest; the player experiences everything through sound, visual tells, and haptics.

## Repository Structure

- `SUNDUK.md` — Full game design document (mechanics, progression, monetization, visual style)
- `PLAN.md` — Phased implementation plan (10 phases, currently in early phases)
- `game/` — Vite + TypeScript + PixiJS application

## Commands

All commands run from the `game/` directory:

```bash
cd game
npm run dev      # Start Vite dev server (hot reload)
npm run build    # TypeScript check + Vite production build
npm run preview  # Preview production build locally
```

No test framework is set up yet. No linter configured. TypeScript strict mode is on (`tsconfig.json` has `strict: true`, `noUnusedLocals`, `noUnusedParameters`).

## Architecture

The game is a single PixiJS Application with no scene/state management framework — everything runs in one game loop in `main.ts`.

### Source files (`game/src/`)

- **`main.ts`** — Entry point. Creates PixiJS app, builds all visual elements (chest, hands, candle, gargoyles, mimic eyes) as `Graphics` objects, runs the game loop via `app.ticker.add()`. All game state is local variables in the `main()` closure. Layout is recalculated on window resize.
- **`input.ts`** — `InputManager` class. Handles keyboard (A/D/arrows) and touch (left/right half of canvas). Detects simultaneous press as "shake" with an 80ms tolerance window. Uses press-edge queuing for discrete rotation taps.
- **`coins.ts`** — Coin data model. Each coin has a `type` (copper/silver/gold), `sweetSpot` (position index), `extracted` flag, and `misses` counter. Provides proximity scoring, nearest-coin lookup, bruteforce extraction, and sweet-spot reassignment. No physics — positions are discrete (12 positions around a circle).
- **`telegraph.ts`** — Telegraph state machine. Opens a timing window (3.5s) when the player lands on a coin's exact sweet spot. Missed telegraphs increment a miss counter; after 2 misses the coin's sweet spot reassigns randomly. Computes direction hints (left/right toward nearest remaining coin).
- **`audio.ts`** — `AudioEngine` class. All sounds are procedurally synthesized via Web Audio API (no sample files). Tick clicks, proximity Geiger-counter effect, shake rattles, coin-out rewards (different per type), telegraph chimes, near-miss feedback, coin-shift sounds, mimic behavior audio (shivers, growls, teeth chatter, warning growl, snap).
- **`patience.ts`** — Mimic patience system. Patience value (0–1) drains from player actions at different rates (telegraph extract < missed telegraph < bruteforce shake). Four behavior stages: calm (100–70%), twitchy (70–40%), agitated (40–15%), snap (<15%). Each stage modulates breathing speed/amplitude, candle flicker intensity, and triggers ambient sounds. Snap triggers a game-over sequence (warning growl → freeze → snap → fade to black → results).
- **`style.css`** — Fullscreen, no-scroll, touch-action-none setup.

### Key design patterns

- **Discrete rotation**: 12 positions (15° each), snap-spring physics for display angle. Each tap = one position.
- **Telegraph system**: Coins have sweet spots. Landing on one opens a timed window. Shaking during the window = instant extract (bright feedback). Missing = bruteforce fallback (8 shakes for a random coin, dull feedback).
- **Dual tells**: Each telegraph randomly uses either the candle flame (leans toward next coin) or gargoyle eyes (glow on the side of next coin) as the visual hint.
- **Procedural audio**: No audio files in the project. Everything synthesized from oscillators and noise buffers.
- **Mimic eyes**: Fade in after 40% of coins extracted or when patience drops below calm. Glance toward coin direction, dart randomly when agitated, blink faster when twitchy/agitated. Eyes go very wide during snap warning.
- **Mimic patience**: Invisible patience meter drives behavior stages. No UI bar — player reads the mimic's state through breathing speed, shivers, tremor, growling, eye behavior, and candle flicker. Snap at <15% patience triggers game over with screen shake and results screen. Retry resets the game.

### Rendering approach

All visuals are PixiJS `Graphics` primitives drawn in code — no sprite sheets or image assets yet. The chest, hands, candle, gargoyles, and mimic eyes are all procedurally drawn. Flying coins after extraction are animated with simple physics (gravity + velocity).

## Design Philosophy

From SUNDUK.md: "Feel is not a polish pass — it's the core product." Every input must produce multi-channel feedback (visual + audio + haptic). The gap between telegraph extraction (bright, snappy) and bruteforce extraction (dull, labored) is the core skill reward. Audio is the primary information channel — a player should be able to play eyes-closed.

## Tech Stack

- **PixiJS 8** — 2D rendering (gameplay, UI, environment)
- **Howler.js** — Listed as dependency but currently unused; audio uses raw Web Audio API
- **Vite 7** — Bundler
- **TypeScript 5.9** — Strict mode
- **Three.js** — Planned for 3D celebration particles (Phase 7, not yet added)
- **Capacitor** — Planned for mobile wrapper (Phase 9-10, not yet added)
