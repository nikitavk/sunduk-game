export type CoinType = 'copper' | 'silver' | 'gold';

export interface Coin {
  type: CoinType;
  sweetSpot: number;        // chest position (0 to totalPositions-1) where this coin is extractable
  extracted: boolean;
  misses: number;           // how many times the telegraph was missed for this coin
}

export const BRUTEFORCE_THRESHOLD = 8;
export const PROXIMITY_WINDOW = 3;    // ±3 positions = "near" for audio

/** Circular distance between two positions */
export function posDistance(a: number, b: number, total: number): number {
  const d = Math.abs(a - b);
  return Math.min(d, total - d);
}

/** Proximity score (0–1) of a coin given current chest position. 1.0 = exact sweet spot. */
export function coinProximity(pos: number, coin: Coin, total: number): number {
  if (coin.extracted) return 0;
  const dist = posDistance(pos, coin.sweetSpot, total);
  if (dist > PROXIMITY_WINDOW) return 0;
  return 1 - dist / PROXIMITY_WINDOW;
}

/** Best proximity among all non-extracted coins */
export function bestProximity(pos: number, coins: Coin[], total: number): number {
  let best = 0;
  for (const c of coins) {
    best = Math.max(best, coinProximity(pos, c, total));
  }
  return best;
}

/** Find the nearest non-extracted coin (null if none remain) */
export function nearestCoin(pos: number, coins: Coin[], total: number): Coin | null {
  let best: Coin | null = null;
  let bestDist = Infinity;
  for (const c of coins) {
    if (c.extracted) continue;
    const d = posDistance(pos, c.sweetSpot, total);
    if (d < bestDist) {
      bestDist = d;
      best = c;
    }
  }
  return best;
}

/** Extract a random remaining coin (for bruteforce). Returns it or null. */
export function extractRandom(coins: Coin[]): Coin | null {
  const remaining = coins.filter(c => !c.extracted);
  if (remaining.length === 0) return null;
  const coin = remaining[Math.floor(Math.random() * remaining.length)];
  coin.extracted = true;
  return coin;
}

/** Create a single coin with a random sweet spot */
export function createCoin(type: CoinType, totalPositions: number): Coin {
  return { type, sweetSpot: Math.floor(Math.random() * totalPositions), extracted: false, misses: 0 };
}

/** Generate coins for a new chest — starts with just the first coin */
export function createChest(types: CoinType[], totalPositions: number): Coin[] {
  const coins: Coin[] = [];
  coins.push(createCoin(types[0], totalPositions));
  return coins;
}

/** Reassign a coin's sweet spot to a new random position, avoiding occupied spots */
export function reassignSweetSpot(coin: Coin, _coins: Coin[], totalPositions: number): void {
  let spot: number;
  do {
    spot = Math.floor(Math.random() * totalPositions);
  } while (spot === coin.sweetSpot);
  coin.sweetSpot = spot;
  coin.misses = 0;
}

export function remainingCoins(coins: Coin[]): number {
  return coins.filter(c => !c.extracted).length;
}
