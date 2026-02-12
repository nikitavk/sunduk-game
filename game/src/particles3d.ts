/**
 * 3D celebration layer — Three.js transparent overlay for particle effects.
 * Coin bursts pop out of the screen on extraction.
 * Confetti rains at combo milestones. Big shower on chest-empty.
 */

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  CircleGeometry,
  PlaneGeometry,
  MeshBasicMaterial,
  Mesh,
  DoubleSide,
} from 'three';

// --- Shared geometries (reused across particles) ---
const coinGeo = new CircleGeometry(8, 12);
const confettiGeo = new PlaneGeometry(6, 10);

// --- Coin colors for celebration ---
const CELEBRATION_COLORS = [0xb87333, 0xc0c0c0, 0xffd700];
const CONFETTI_COLORS = [0xff4466, 0x44bbff, 0xffdd44, 0x44ff88, 0xff88ff, 0xffaa33];

// --- Particle data ---
interface Particle {
  mesh: Mesh;
  vx: number;
  vy: number;
  vz: number;
  rotSpeedX: number;
  rotSpeedY: number;
  rotSpeedZ: number;
  age: number;
  lifetime: number;
  drift: number;      // sinusoidal x-drift amplitude (confetti flutter)
  driftFreq: number;  // drift frequency
  gravity: number;    // per-particle gravity
}

export class Particles3D {
  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private particles: Particle[] = [];
  private w = 0;
  private h = 0;

  constructor(container: HTMLElement) {
    this.scene = new Scene();

    this.camera = new PerspectiveCamera(60, 1, 1, 2000);
    this.camera.position.z = 500;

    this.renderer = new WebGLRenderer({
      alpha: true,
      premultipliedAlpha: false,
      antialias: true,
    });
    this.renderer.setClearColor(0x000000, 0);

    const canvas = this.renderer.domElement;
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '10';
    container.appendChild(canvas);
  }

  resize(w: number, h: number): void {
    this.w = w;
    this.h = h;
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  /** Convert screen coords to Three.js world coords at z=0 */
  private toWorld(screenX: number, screenY: number): [number, number] {
    return [screenX - this.w / 2, -(screenY - this.h / 2)];
  }

  /** Coin burst — 3D discs flying toward camera from extraction point */
  spawnCoinBurst(
    screenX: number,
    screenY: number,
    coinColor: number,
    count: number,
    intensity: number,
  ): void {
    const [wx, wy] = this.toWorld(screenX, screenY);
    const baseSpeed = 80 + intensity * 200;
    const baseZ = 150 + intensity * 250;
    const scale = 1 + intensity * 1.2;

    for (let i = 0; i < count; i++) {
      const mat = new MeshBasicMaterial({
        color: coinColor,
        side: DoubleSide,
        transparent: true,
        opacity: 1,
      });
      const mesh = new Mesh(coinGeo, mat);
      mesh.position.set(wx, wy, 0);
      mesh.scale.setScalar(scale);
      this.scene.add(mesh);

      const angle = Math.random() * Math.PI * 2;
      const spread = 40 + Math.random() * 60 + intensity * 80;

      this.particles.push({
        mesh,
        vx: Math.cos(angle) * spread,
        vy: Math.sin(angle) * spread + baseSpeed * 0.3,
        vz: baseZ + Math.random() * baseZ * 0.5,
        rotSpeedX: (Math.random() - 0.5) * 8,
        rotSpeedY: (Math.random() - 0.5) * 8,
        rotSpeedZ: 0,
        age: 0,
        lifetime: 0.8 + Math.random() * 0.6 + intensity * 0.3,
        drift: 0,
        driftFreq: 0,
        gravity: -120,
      });
    }
  }

  /** Confetti burst — colored rectangles fluttering down */
  spawnConfetti(count: number): void {
    for (let i = 0; i < count; i++) {
      const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
      const mat = new MeshBasicMaterial({
        color,
        side: DoubleSide,
        transparent: true,
        opacity: 1,
      });
      const mesh = new Mesh(confettiGeo, mat);

      // Spawn from upper portion of screen with horizontal spread
      const sx = (Math.random() - 0.5) * this.w * 0.8;
      const sy = this.h / 2 * 0.6 + Math.random() * this.h / 2 * 0.4;
      mesh.position.set(sx, sy, 50 + Math.random() * 100);
      mesh.scale.setScalar(0.8 + Math.random() * 0.6);
      this.scene.add(mesh);

      this.particles.push({
        mesh,
        vx: (Math.random() - 0.5) * 40,
        vy: -20 - Math.random() * 30,
        vz: 20 + Math.random() * 60,
        rotSpeedX: (Math.random() - 0.5) * 6,
        rotSpeedY: (Math.random() - 0.5) * 6,
        rotSpeedZ: (Math.random() - 0.5) * 4,
        age: 0,
        lifetime: 2.0 + Math.random() * 1.0,
        drift: 15 + Math.random() * 25,
        driftFreq: 2 + Math.random() * 3,
        gravity: -50,
      });
    }
  }

  /** Chest-empty celebration — big shower of coins + confetti */
  spawnCelebration(): void {
    // Coin shower from across the screen
    for (let i = 0; i < 40; i++) {
      const color = CELEBRATION_COLORS[Math.floor(Math.random() * CELEBRATION_COLORS.length)];
      const mat = new MeshBasicMaterial({
        color,
        side: DoubleSide,
        transparent: true,
        opacity: 1,
      });
      const mesh = new Mesh(coinGeo, mat);

      const sx = (Math.random() - 0.5) * this.w * 0.9;
      const sy = this.h / 2 * 0.5 + Math.random() * this.h / 2 * 0.5;
      mesh.position.set(sx, sy, Math.random() * 80);
      mesh.scale.setScalar(1.0 + Math.random() * 1.0);
      this.scene.add(mesh);

      this.particles.push({
        mesh,
        vx: (Math.random() - 0.5) * 80,
        vy: 40 + Math.random() * 80,
        vz: 60 + Math.random() * 150,
        rotSpeedX: (Math.random() - 0.5) * 10,
        rotSpeedY: (Math.random() - 0.5) * 10,
        rotSpeedZ: 0,
        age: Math.random() * 0.3, // stagger slightly for cascade effect (negative = delayed)
        lifetime: 2.5 + Math.random() * 1.0,
        drift: 5 + Math.random() * 15,
        driftFreq: 1 + Math.random() * 2,
        gravity: -80,
      });
    }

    // Confetti overlay
    this.spawnConfetti(60);
  }

  /** Update all particles and render */
  update(dt: number): void {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.age += dt;

      // Physics
      p.vy += p.gravity * dt;
      p.mesh.position.x += p.vx * dt + Math.sin(p.age * p.driftFreq) * p.drift * dt;
      p.mesh.position.y += p.vy * dt;
      p.mesh.position.z += p.vz * dt;

      // Rotation (tumbling)
      p.mesh.rotation.x += p.rotSpeedX * dt;
      p.mesh.rotation.y += p.rotSpeedY * dt;
      p.mesh.rotation.z += p.rotSpeedZ * dt;

      // z-velocity decays (particles slow as they approach camera)
      p.vz *= Math.max(0, 1 - dt * 1.5);

      // Fade out in last 30% of lifetime
      const fadeStart = p.lifetime * 0.7;
      if (p.age > fadeStart) {
        const mat = p.mesh.material as MeshBasicMaterial;
        mat.opacity = Math.max(0, 1 - (p.age - fadeStart) / (p.lifetime - fadeStart));
      }

      // Remove dead particles
      if (p.age >= p.lifetime) {
        this.scene.remove(p.mesh);
        (p.mesh.material as MeshBasicMaterial).dispose();
        this.particles.splice(i, 1);
      }
    }

    this.renderer.render(this.scene, this.camera);
  }

  dispose(): void {
    for (const p of this.particles) {
      this.scene.remove(p.mesh);
      (p.mesh.material as MeshBasicMaterial).dispose();
    }
    this.particles.length = 0;
    this.renderer.dispose();
  }
}
