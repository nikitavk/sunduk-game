/**
 * Procedural audio engine using Web Audio API.
 * All sounds synthesized — no sample files needed.
 */
export class AudioEngine {
  private ctx: AudioContext | null = null;
  private nextProximityClick = 0;

  private getCtx(): AudioContext | null {
    if (!this.ctx) {
      try { this.ctx = new AudioContext(); }
      catch { return null; }
    }
    return this.ctx;
  }

  /** Call on first user gesture to unlock mobile audio */
  unlock(): void {
    const ctx = this.getCtx();
    if (ctx && ctx.state === 'suspended') ctx.resume();
  }

  // --- Noise helper ---
  private noiseBuffer(duration: number, decay: number): AudioBufferSourceNode {
    const ctx = this.ctx!;
    const len = Math.ceil(ctx.sampleRate * duration);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (len * decay));
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    return src;
  }

  // ------------------------------------------------------------------
  //  TICK CLICK — mechanical click on each discrete position change
  // ------------------------------------------------------------------
  playTick(): void {
    const ctx = this.getCtx();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Noise burst → bandpass → gain
    const src = this.noiseBuffer(0.012, 0.12);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 3500;
    bp.Q.value = 3;
    const gain = ctx.createGain();
    gain.gain.value = 0.25;

    // Tiny sine "thock" body
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = 800;
    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(0.08, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

    src.connect(bp).connect(gain).connect(ctx.destination);
    osc.connect(oscGain).connect(ctx.destination);
    src.start(now);
    osc.start(now);
    osc.stop(now + 0.02);
  }

  // ------------------------------------------------------------------
  //  PROXIMITY — Geiger counter clicks, rate/pitch scale with proximity
  // ------------------------------------------------------------------
  updateProximity(proximity: number, dt: number): void {
    if (proximity <= 0) {
      this.nextProximityClick = 0;
      return;
    }
    const ctx = this.getCtx();
    if (!ctx) return;

    // Interval: 0.8s at prox=0.01 → 0.06s at prox=1.0
    const interval = 0.06 + (1 - proximity) * 0.74;
    this.nextProximityClick -= dt;
    if (this.nextProximityClick <= 0) {
      this.nextProximityClick = interval;
      this.proximityClick(proximity);
    }
  }

  private proximityClick(proximity: number): void {
    const ctx = this.ctx!;
    const now = ctx.currentTime;
    const freq = 400 + proximity * 1200;

    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = freq;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.1 * proximity, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.04);
  }

  resetProximity(): void {
    this.nextProximityClick = 0;
  }

  // ------------------------------------------------------------------
  //  SHAKE RATTLE — burst during each shake hit, density ∝ proximity
  // ------------------------------------------------------------------
  playShakeRattle(intensity: number): void {
    const ctx = this.getCtx();
    if (!ctx) return;
    const now = ctx.currentTime;

    const src = this.noiseBuffer(0.06 + intensity * 0.04, 0.3);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 200 + intensity * 2000;
    bp.Q.value = 1;
    const gain = ctx.createGain();
    gain.gain.value = 0.15 + intensity * 0.15;

    src.connect(bp).connect(gain).connect(ctx.destination);
    src.start(now);
  }

  // ------------------------------------------------------------------
  //  EMPTY THUD — shake with nothing near
  // ------------------------------------------------------------------
  playEmptyThud(): void {
    const ctx = this.getCtx();
    if (!ctx) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = 80;
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.15);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.15);
  }

  // ------------------------------------------------------------------
  //  COIN OUT — per-type reward sound + universal slot sound
  // ------------------------------------------------------------------
  playCoinOut(type: 'copper' | 'silver' | 'gold'): void {
    const ctx = this.getCtx();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (type === 'copper') {
      this.playTone(220, 120, 0.3, 0.2);
    } else if (type === 'silver') {
      this.playTone(880, 0, 0.2, 0.4);
      this.playTone(1320, 0, 0.1, 0.3);
    } else {
      // Gold: bell harmonics
      for (const f of [1200, 1800, 2400]) {
        this.playTone(f, 0, 0.12, 0.6);
      }
    }

    // Universal slot scrape
    const src = this.noiseBuffer(0.04, 0.2);
    const g = ctx.createGain();
    g.gain.value = 0.2;
    src.connect(g).connect(ctx.destination);
    src.start(now);
  }

  // ------------------------------------------------------------------
  //  TELEGRAPH CHIME — clean tone when window opens
  // ------------------------------------------------------------------
  playTelegraphChime(): void {
    const ctx = this.getCtx();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Two-note chime: E5 + B5
    this.playTone(659, 0, 0.15, 0.3);
    this.playTone(988, 0, 0.1, 0.25);

    // Soft shimmer
    const src = this.noiseBuffer(0.03, 0.15);
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 4000;
    const g = ctx.createGain();
    g.gain.value = 0.06;
    src.connect(hp).connect(g).connect(ctx.destination);
    src.start(now);
  }

  // ------------------------------------------------------------------
  //  TELEGRAPH EXTRACT — bright, snappy coin-out (contrast with bruteforce)
  // ------------------------------------------------------------------
  playTelegraphExtract(type: 'copper' | 'silver' | 'gold'): void {
    const ctx = this.getCtx();
    if (!ctx) return;

    if (type === 'copper') {
      this.playTone(330, 0, 0.35, 0.3);
      this.playTone(660, 0, 0.15, 0.2);
    } else if (type === 'silver') {
      this.playTone(1100, 0, 0.25, 0.5);
      this.playTone(1650, 0, 0.15, 0.4);
      this.playTone(2200, 0, 0.08, 0.3);
    } else {
      for (const f of [1400, 2100, 2800, 3500]) {
        this.playTone(f, 0, 0.12, 0.7);
      }
    }

    // Bright slot "ching"
    this.playTone(3000, 0, 0.08, 0.15);
  }

  // ------------------------------------------------------------------
  //  COMBO EXTRACT — escalating telegraph extraction during combo chain
  // ------------------------------------------------------------------
  playComboExtract(type: 'copper' | 'silver' | 'gold', comboCount: number): void {
    const ctx = this.getCtx();
    if (!ctx) return;

    // Escalation: pitch multiplier and volume boost ramp with combo count
    const level = Math.min(comboCount, 8);
    const pitchMul = 1 + (level - 1) * 0.12;   // ~12% per step
    const volBoost = 1 + (level - 1) * 0.08;    // slight loudness increase

    if (type === 'copper') {
      this.playTone(330 * pitchMul, 0, 0.35 * volBoost, 0.3);
      this.playTone(660 * pitchMul, 0, 0.15 * volBoost, 0.2);
    } else if (type === 'silver') {
      this.playTone(1100 * pitchMul, 0, 0.25 * volBoost, 0.5);
      this.playTone(1650 * pitchMul, 0, 0.15 * volBoost, 0.4);
      this.playTone(2200 * pitchMul, 0, 0.08 * volBoost, 0.3);
    } else {
      for (const f of [1400, 2100, 2800, 3500]) {
        this.playTone(f * pitchMul, 0, 0.12 * volBoost, 0.7);
      }
    }

    // Bright ching — higher and sharper with combo
    this.playTone(3000 * pitchMul, 0, 0.08 * volBoost, 0.15);

    // Shimmer overtone — grows with combo
    if (level >= 2) {
      const shimmerVol = 0.03 + (level - 2) * 0.015;
      this.playTone(4000 * pitchMul, 0, Math.min(shimmerVol, 0.12), 0.25);
    }

    // Extra harmonic layer at high combos — crescendo
    if (level >= 4) {
      const extraVol = 0.02 + (level - 4) * 0.01;
      this.playTone(5000 * pitchMul, 0, Math.min(extraVol, 0.08), 0.3);
      this.playTone(6000 * pitchMul, 0, Math.min(extraVol * 0.6, 0.05), 0.2);
    }
  }

  // ------------------------------------------------------------------
  //  NEAR MISS — promising rattle, almost fell
  // ------------------------------------------------------------------
  playNearMiss(): void {
    const ctx = this.getCtx();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Rising tone — "almost!"
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.1);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.15);

    // Rattle overlay
    const src = this.noiseBuffer(0.08, 0.25);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 1500;
    bp.Q.value = 1;
    const g = ctx.createGain();
    g.gain.value = 0.18;
    src.connect(bp).connect(g).connect(ctx.destination);
    src.start(now);
  }

  // ------------------------------------------------------------------
  //  HAND TAP — subtle knock for finger tap tell
  // ------------------------------------------------------------------
  playHandTap(): void {
    const ctx = this.getCtx();
    if (!ctx) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = 400;
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.06);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.08);

    const src = this.noiseBuffer(0.02, 0.1);
    const g = ctx.createGain();
    g.gain.value = 0.1;
    src.connect(g).connect(ctx.destination);
    src.start(now);
  }

  // ------------------------------------------------------------------
  //  COIN SHIFT — coin tumbles to a new position inside the chest
  // ------------------------------------------------------------------
  playCoinShift(): void {
    const ctx = this.getCtx();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Descending tone — something rolled away
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(500, now);
    osc.frequency.exponentialRampToValueAtTime(150, now + 0.25);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.3);

    // Rattle of coin settling
    const src = this.noiseBuffer(0.12, 0.3);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 800;
    bp.Q.value = 2;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.12, now + 0.05);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    src.connect(bp).connect(g).connect(ctx.destination);
    src.start(now + 0.05);
  }

  // ------------------------------------------------------------------
  //  MIMIC SHIVER — quick involuntary rattle (twitchy stage)
  // ------------------------------------------------------------------
  playMimicShiver(): void {
    const ctx = this.getCtx();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Short rattling burst — like bones shaking
    const src = this.noiseBuffer(0.08, 0.15);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 600;
    bp.Q.value = 2;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    src.connect(bp).connect(gain).connect(ctx.destination);
    src.start(now);

    // Wood creak undertone
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.1);
    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(0.05, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    osc.connect(oscGain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.12);
  }

  // ------------------------------------------------------------------
  //  MIMIC GROWL — continuous low rumble (agitated stage)
  // ------------------------------------------------------------------
  playMimicGrowl(intensity: number): void {
    const ctx = this.getCtx();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Low rumbling oscillator pair
    const dur = 0.3;
    for (const freq of [55, 73]) {
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.value = freq;
      // Add slight pitch wobble
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.linearRampToValueAtTime(freq * 1.05, now + dur * 0.5);
      osc.frequency.linearRampToValueAtTime(freq * 0.95, now + dur);
      const gain = ctx.createGain();
      const vol = 0.04 * intensity;
      gain.gain.setValueAtTime(vol, now);
      gain.gain.setValueAtTime(vol, now + dur * 0.8);
      gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

      // Low-pass to keep it rumbly
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 200;

      osc.connect(lp).connect(gain).connect(ctx.destination);
      osc.start(now);
      osc.stop(now + dur);
    }
  }

  // ------------------------------------------------------------------
  //  TEETH CHATTER — rapid clicking (agitated stage)
  // ------------------------------------------------------------------
  playTeethChatter(): void {
    const ctx = this.getCtx();
    if (!ctx) return;
    const now = ctx.currentTime;

    // 3-4 rapid clicks
    const clicks = 3 + Math.floor(Math.random() * 2);
    for (let i = 0; i < clicks; i++) {
      const t = now + i * 0.06;
      const src = this.noiseBuffer(0.008, 0.05);
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = 2500;
      bp.Q.value = 5;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.12, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.015);
      src.connect(bp).connect(gain).connect(ctx.destination);
      src.start(t);
    }
  }

  // ------------------------------------------------------------------
  //  WARNING GROWL — rising ominous tone before snap
  // ------------------------------------------------------------------
  playWarningGrowl(): void {
    const ctx = this.getCtx();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Deep rising growl
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(40, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.5);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(100, now);
    lp.frequency.exponentialRampToValueAtTime(300, now + 0.5);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.setValueAtTime(0.2, now + 0.4);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

    osc.connect(lp).connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.5);

    // Noise layer — rising hiss
    const src = this.noiseBuffer(0.5, 0.8);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(200, now);
    bp.frequency.exponentialRampToValueAtTime(800, now + 0.5);
    bp.Q.value = 1;
    const nGain = ctx.createGain();
    nGain.gain.setValueAtTime(0.06, now);
    nGain.gain.linearRampToValueAtTime(0.12, now + 0.4);
    nGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    src.connect(bp).connect(nGain).connect(ctx.destination);
    src.start(now);
  }

  // ------------------------------------------------------------------
  //  MIMIC SNAP — loud percussive slam (game over)
  // ------------------------------------------------------------------
  playMimicSnap(): void {
    const ctx = this.getCtx();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Heavy impact — low frequency punch
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.2);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.3);

    // Wood crack — sharp noise burst
    const src = this.noiseBuffer(0.04, 0.08);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 1200;
    bp.Q.value = 1;
    const nGain = ctx.createGain();
    nGain.gain.setValueAtTime(0.4, now);
    nGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    src.connect(bp).connect(nGain).connect(ctx.destination);
    src.start(now);

    // Secondary crunch
    const src2 = this.noiseBuffer(0.06, 0.15);
    const bp2 = ctx.createBiquadFilter();
    bp2.type = 'bandpass';
    bp2.frequency.value = 3000;
    bp2.Q.value = 2;
    const nGain2 = ctx.createGain();
    nGain2.gain.setValueAtTime(0.2, now + 0.02);
    nGain2.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    src2.connect(bp2).connect(nGain2).connect(ctx.destination);
    src2.start(now + 0.02);

    // Reverb tail — low rumble
    const osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.value = 50;
    const tailGain = ctx.createGain();
    tailGain.gain.setValueAtTime(0.15, now + 0.05);
    tailGain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
    osc2.connect(tailGain).connect(ctx.destination);
    osc2.start(now + 0.05);
    osc2.stop(now + 0.6);
  }

  // ------------------------------------------------------------------
  //  STAR CHIME — ascending tones on results screen star reveal
  // ------------------------------------------------------------------
  playStarChime(starIndex: number): void {
    const ctx = this.getCtx();
    if (!ctx) return;

    if (starIndex === 0) {
      // Star 1: C5 — warm
      this.playTone(523, 0, 0.2, 0.6);
      this.playTone(1047, 0, 0.06, 0.4);
    } else if (starIndex === 1) {
      // Star 2: E5 — brighter
      this.playTone(659, 0, 0.22, 0.6);
      this.playTone(1318, 0, 0.08, 0.4);
    } else {
      // Star 3: G5 + C6 chord — triumphant
      this.playTone(784, 0, 0.22, 0.8);
      this.playTone(1047, 0, 0.15, 0.7);
      this.playTone(1568, 0, 0.08, 0.5);
    }

    // Shimmer overlay
    const src = this.noiseBuffer(0.04, 0.2);
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 5000;
    const g = ctx.createGain();
    g.gain.value = 0.04;
    src.connect(hp).connect(g).connect(ctx.destination);
    src.start(ctx.currentTime);
  }

  /** Helper: play a decaying sine tone */
  private playTone(freq: number, freqEnd: number, vol: number, dur: number): void {
    const ctx = this.ctx!;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = freq;
    if (freqEnd > 0) osc.frequency.exponentialRampToValueAtTime(freqEnd, now + dur);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(vol, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + dur);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + dur);
  }
}
