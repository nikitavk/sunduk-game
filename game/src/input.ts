export type InputAction = 'none' | 'left' | 'right' | 'shake';

export const SHAKE_TOLERANCE_MS = 80;

interface KeyState {
  down: boolean;
  timestamp: number;
}

export class InputManager {
  private leftKey: KeyState = { down: false, timestamp: 0 };
  private rightKey: KeyState = { down: false, timestamp: 0 };

  private leftTouch: KeyState = { down: false, timestamp: 0 };
  private rightTouch: KeyState = { down: false, timestamp: 0 };

  private leftTouchId: number | null = null;
  private rightTouchId: number | null = null;

  private canvas: HTMLCanvasElement;

  // Press-edge detection: queued presses consumed by the game loop
  private leftPressQueue = 0;
  private rightPressQueue = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.bindKeyboard();
    this.bindTouch();
  }

  private bindKeyboard(): void {
    window.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      const now = performance.now();
      if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') {
        this.leftKey = { down: true, timestamp: now };
        this.leftPressQueue++;
      }
      if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') {
        this.rightKey = { down: true, timestamp: now };
        this.rightPressQueue++;
      }
    });

    window.addEventListener('keyup', (e) => {
      if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') {
        this.leftKey = { down: false, timestamp: 0 };
      }
      if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') {
        this.rightKey = { down: false, timestamp: 0 };
      }
    });
  }

  private bindTouch(): void {
    this.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const now = performance.now();
      const rect = this.canvas.getBoundingClientRect();

      for (const touch of Array.from(e.changedTouches)) {
        const x = touch.clientX - rect.left;
        const half = rect.width / 2;

        if (x < half && this.leftTouchId === null) {
          this.leftTouchId = touch.identifier;
          this.leftTouch = { down: true, timestamp: now };
          this.leftPressQueue++;
        } else if (x >= half && this.rightTouchId === null) {
          this.rightTouchId = touch.identifier;
          this.rightTouch = { down: true, timestamp: now };
          this.rightPressQueue++;
        }
      }
    });

    this.canvas.addEventListener('touchend', (e) => {
      e.preventDefault();
      for (const touch of Array.from(e.changedTouches)) {
        if (touch.identifier === this.leftTouchId) {
          this.leftTouchId = null;
          this.leftTouch = { down: false, timestamp: 0 };
        }
        if (touch.identifier === this.rightTouchId) {
          this.rightTouchId = null;
          this.rightTouch = { down: false, timestamp: 0 };
        }
      }
    });

    this.canvas.addEventListener('touchcancel', (e) => {
      for (const touch of Array.from(e.changedTouches)) {
        if (touch.identifier === this.leftTouchId) {
          this.leftTouchId = null;
          this.leftTouch = { down: false, timestamp: 0 };
        }
        if (touch.identifier === this.rightTouchId) {
          this.rightTouchId = null;
          this.rightTouch = { down: false, timestamp: 0 };
        }
      }
    });
  }

  get left(): boolean {
    return this.leftKey.down || this.leftTouch.down;
  }

  get right(): boolean {
    return this.rightKey.down || this.rightTouch.down;
  }

  /** Consume queued left presses (returns count since last call) */
  consumeLeftPresses(): number {
    const count = this.leftPressQueue;
    this.leftPressQueue = 0;
    return count;
  }

  /** Consume queued right presses (returns count since last call) */
  consumeRightPresses(): number {
    const count = this.rightPressQueue;
    this.rightPressQueue = 0;
    return count;
  }

  getAction(): InputAction {
    const leftDown = this.left;
    const rightDown = this.right;

    if (leftDown && rightDown) {
      return 'shake';
    }

    // Tolerance window: if one side just pressed and the other is already held,
    // check if they pressed within SHAKE_TOLERANCE_MS of each other
    if (leftDown && !rightDown) {
      const lt = Math.max(this.leftKey.timestamp, this.leftTouch.timestamp);
      const rt = Math.max(this.rightKey.timestamp, this.rightTouch.timestamp);
      if (rt > 0 && lt - rt < SHAKE_TOLERANCE_MS && lt - rt > 0) {
        return 'shake';
      }
      return 'left';
    }

    if (rightDown && !leftDown) {
      const lt = Math.max(this.leftKey.timestamp, this.leftTouch.timestamp);
      const rt = Math.max(this.rightKey.timestamp, this.rightTouch.timestamp);
      if (lt > 0 && rt - lt < SHAKE_TOLERANCE_MS && rt - lt > 0) {
        return 'shake';
      }
      return 'right';
    }

    return 'none';
  }

  destroy(): void {
    // Touch listeners are on canvas, will be GC'd with it
    // Keyboard listeners persist — acceptable for a single-instance game
  }
}
