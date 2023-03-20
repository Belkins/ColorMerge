// Input Handler Class
class InputHandler {
  constructor() {
    this.touchStartX = null;
    this.touchStartY = null;
    this.mouseDown = false;
    this.callbacks = {};
    this.setupKeyboardControls();
    this.setupTouchControls();
    this.setupMouseControls();
  }

  on(event, callback) {
    this.callbacks[event] = callback;
  }

  off(event) {
    delete this.callbacks[event];
  }

  emit(event, ...args) {
    if (this.callbacks[event]) {
      this.callbacks[event](...args);
    }
  }

  // Keyboard Controls
  setupKeyboardControls() {
    document.addEventListener("keydown", (event) => {
      let direction = null;

      switch (event.key) {
        case "ArrowUp":
        case "w":
          direction = "up";
          break;
        case "ArrowDown":
        case "s":
          direction = "down";
          break;
        case "ArrowLeft":
        case "a":
          direction = "left";
          break;
        case "ArrowRight":
        case "d":
          direction = "right";
          break;
      }

      if (direction) {
        this.emit("move", direction);
      }
    });
  }

  // Touch Controls
  setupTouchControls() {
    document.addEventListener("touchstart", (event) => {
      if (event.touches.length !== 1) return;

      this.touchStartX = event.touches[0].clientX;
      this.touchStartY = event.touches[0].clientY;
    });

    document.addEventListener("touchmove", this.onTouchMove.bind(this));
  }

  // Mouse Controls
  setupMouseControls() {
    document.addEventListener("mousedown", (event) => {
      this.mouseDown = true;
      this.touchStartX = event.clientX;
      this.touchStartY = event.clientY;
    });

    document.addEventListener("mousemove", this.onMouseMove.bind(this));
    document.addEventListener("mouseup", this.onMouseUp.bind(this));
  }

  onTouchMove(event) {
    if (event.touches.length !== 1) return;

    const touchEndX = event.touches[0].clientX;
    const touchEndY = event.touches[0].clientY;

    const deltaX = touchEndX - this.touchStartX;
    const deltaY = touchEndY - this.touchStartY;

    const direction = this.getDirectionFromDelta(deltaX, deltaY);

    if (direction) {
      this.emit("move", direction);
      event.preventDefault();
    }
  }

  onMouseMove(event) {
    if (!this.mouseDown) return;

    const touchEndX = event.clientX;
    const touchEndY = event.clientY;

    const deltaX = touchEndX - this.touchStartX;
    const deltaY = touchEndY - this.touchStartY;

    const direction = this.getDirectionFromDelta(deltaX, deltaY);

    if (direction) {
      this.mouseDown = false;
      this.emit("move", direction);
    }
  }

  onMouseUp(event) {
    this.mouseDown = false;
  }

getDirectionFromDelta(deltaX, deltaY) {
  const threshold = 50;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX > threshold) {
      return "right";
    } else if (deltaX < -threshold) {
      return "left";
    }
  } else {
    if (deltaY > threshold) {
      return "down";
    } else if (deltaY < -threshold) {
      return "up";
    }
  }

  return null;
}
}

// Export the InputHandler class
export default InputHandler;