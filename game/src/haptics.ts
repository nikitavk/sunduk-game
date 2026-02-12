/**
 * Haptic feedback engine — Web Vibration API wrapper.
 * Each game event has a tactile signature.
 * No-ops gracefully on unsupported platforms (desktop, iOS Safari).
 * Designed for easy Capacitor Haptics swap later (Phase 10).
 */

export class HapticEngine {
  private supported: boolean;
  private nextProximityPulse: number = 0;

  constructor() {
    this.supported = typeof navigator !== 'undefined' && 'vibrate' in navigator;
  }

  private vib(pattern: number | number[]): void {
    if (this.supported) navigator.vibrate(pattern);
  }

  /** Discrete rotation tick */
  tick(): void { this.vib(8); }

  /** Proximity rumble — periodic pulses, rate scales with proximity (0–1) */
  updateProximity(proximity: number, dt: number): void {
    if (proximity <= 0) return;
    const interval = 0.5 - proximity * 0.42; // 0.5s at low prox → 0.08s at max
    this.nextProximityPulse -= dt;
    if (this.nextProximityPulse <= 0) {
      this.nextProximityPulse = interval;
      this.vib(6 + Math.round(proximity * 14)); // 6–20ms pulse
    }
  }

  resetProximity(): void { this.nextProximityPulse = 0; }

  /** Each shake hit */
  shakeHit(): void { this.vib(20); }

  /** Telegraph window opens */
  telegraphOpen(): void { this.vib(12); }

  /** Coin extracted — telegraph/combo (strong) or bruteforce (medium) */
  coinOut(isTelegraph: boolean, comboIntensity: number): void {
    const dur = isTelegraph ? 35 + Math.round(comboIntensity * 25) : 25;
    this.vib(dur);
  }

  /** Combo milestones */
  comboMilestone(count: number): void {
    if (count === 3) this.vib([15, 40, 15, 40, 15]);
    else if (count === 5) this.vib([25, 30, 25, 30, 25]);
    else if (count >= 10) this.vib([40, 20, 40, 20, 40]);
  }

  /** Mimic ambient behaviors */
  mimicShiver(): void { this.vib([12, 25, 12, 25, 12]); }
  mimicChatter(): void { this.vib([6, 15, 6, 15, 6, 15, 6]); }
  mimicGrowl(): void { this.vib(80); }

  /** Snap sequence */
  snapWarning(): void { this.vib(100); }
  mimicSnap(): void { this.vib(200); }

  /** Star reveal on results */
  starReveal(): void { this.vib(10); }
}
