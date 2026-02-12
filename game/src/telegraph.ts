import type { Coin } from './coins';
import { posDistance, reassignSweetSpot } from './coins';

export const TELEGRAPH_DURATION = 3.5;     // seconds the window stays open
export const TELEGRAPH_COOLDOWN = 1.5;     // seconds before re-trigger after expiry
export const DIRECTION_HINT_LINGER = 2.0;  // seconds direction hint lingers

export interface TelegraphState {
  activeCoin: Coin | null;
  windowTimer: number;
  cooldown: number;
  directionHint: number;        // -1 = rotate left, 0 = none, 1 = rotate right
  directionHintTimer: number;
  justOpened: boolean;          // true for one frame when window opens (for chime)
  justReassigned: boolean;      // true for one frame when a coin's sweet spot moved
  justMissed: boolean;          // true for one frame when a telegraph window was missed
}

export function createTelegraphState(): TelegraphState {
  return {
    activeCoin: null,
    windowTimer: 0,
    cooldown: 0,
    directionHint: 0,
    directionHintTimer: 0,
    justOpened: false,
    justReassigned: false,
    justMissed: false,
  };
}

export function updateTelegraph(
  state: TelegraphState,
  currentPos: number,
  coins: Coin[],
  totalPositions: number,
  dt: number,
): void {
  state.justOpened = false;
  state.justReassigned = false;
  state.justMissed = false;

  // Cooldown
  if (state.cooldown > 0) state.cooldown -= dt;

  // Direction hint fade
  if (state.directionHintTimer > 0) {
    state.directionHintTimer -= dt;
    if (state.directionHintTimer <= 0) state.directionHint = 0;
  }

  // Active window
  if (state.activeCoin) {
    // Coin was extracted externally (bruteforce)
    if (state.activeCoin.extracted) {
      state.activeCoin = null;
      state.windowTimer = 0;
      return;
    }

    // Player moved off the exact spot — close (with brief grace for shake detection)
    if (currentPos !== state.activeCoin.sweetSpot && state.windowTimer < TELEGRAPH_DURATION - 0.15) {
      handleMiss(state.activeCoin, coins, totalPositions, state);
      state.activeCoin = null;
      state.windowTimer = 0;
      return;
    }

    // Count down — timer expiry always counts as a miss
    state.windowTimer -= dt;
    if (state.windowTimer <= 0) {
      handleMiss(state.activeCoin, coins, totalPositions, state);
      state.activeCoin = null;
      state.windowTimer = 0;
      state.cooldown = TELEGRAPH_COOLDOWN;
    }
    return;
  }

  // No active telegraph — check if we should open one
  if (state.cooldown > 0) return;

  for (const coin of coins) {
    if (coin.extracted) continue;
    if (coin.sweetSpot === currentPos) {
      state.activeCoin = coin;
      state.windowTimer = TELEGRAPH_DURATION;
      state.justOpened = true;
      return;
    }
  }
}

/** Handle a missed telegraph: first miss = mercy, second miss = reassign sweet spot */
function handleMiss(coin: Coin, coins: Coin[], totalPositions: number, state: TelegraphState): void {
  state.justMissed = true;
  coin.misses++;
  if (coin.misses >= 2) {
    reassignSweetSpot(coin, coins, totalPositions);
    state.justReassigned = true;
  }
}

/** Compute direction to nearest remaining coin (optionally excluding one) */
export function computeDirectionHint(
  currentPos: number,
  coins: Coin[],
  totalPositions: number,
  exclude?: Coin | null,
): number {
  let nearestDist = Infinity;
  let direction = 0;

  for (const coin of coins) {
    if (coin.extracted || coin === exclude) continue;

    let diff = coin.sweetSpot - currentPos;
    if (diff > totalPositions / 2) diff -= totalPositions;
    if (diff < -totalPositions / 2) diff += totalPositions;

    const dist = Math.abs(diff);
    if (dist < nearestDist) {
      nearestDist = dist;
      direction = diff > 0 ? 1 : diff < 0 ? -1 : 0;
    }
  }

  return direction;
}

/** Check if shaking near (±1) a sweet spot without active telegraph — near miss */
export function isNearMiss(
  currentPos: number,
  coins: Coin[],
  totalPositions: number,
  telegraph: TelegraphState,
): boolean {
  if (telegraph.activeCoin) return false; // telegraph is active, not a miss
  for (const coin of coins) {
    if (coin.extracted) continue;
    const dist = posDistance(currentPos, coin.sweetSpot, totalPositions);
    if (dist === 1) return true;
  }
  return false;
}
