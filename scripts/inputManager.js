// Input Handler Class
class InputHandler {
  constructor(moveCallback) {
    this.touchStartX = null;
    this.touchStartY = null;
    this.mouseDown = false;
    this.moveCallback = moveCallback;
    this.setupKeyboardControls();
    this.setupTouchControls();
    this.setupMouseControls();
  }

  // Keyboard Controls
  setupKeyboardControls() {
    document.addEventListener('keydown', (event) => {
      let direction = null;

      switch (event.key) {
        case 'ArrowUp':
        case 'w':
          direction = 'up';
          break;
        case 'ArrowDown':
        case 's':
          direction = 'down';
          break;
        case 'ArrowLeft':
        case 'a':
          direction = 'left';
          break;
        case 'ArrowRight':
        case 'd':
          direction = 'right';
          break;
      }

      if (direction) {
        this.moveCallback(direction);
      }
    });
  }

  // Touch Controls
  setupTouchControls() {
    const container = document.getElementById("container");
    container.addEventListener('touchstart', this.onTouchStart.bind(this));
    container.addEventListener('touchmove', this.onTouchMove.bind(this));
  }

  onTouchStart(event) {
    if (event.touches.length !== 1) return;

    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
  }

  onTouchMove(event) {
    if (event.touches.length !== 1) return;

    const touchEndX = event.touches[0].clientX;
    const touchEndY = event.touches[0].clientY;

    const deltaX = touchEndX - this.touchStartX;
    const deltaY = touchEndY - this.touchStartY;

    const direction = this.getDirectionFromDelta(deltaX, deltaY);

    if (direction) {
      this.moveCallback(direction);
      event.preventDefault();
    }
  }
  
    // Mouse Controls
    setupMouseControls() {
        const container = document.getElementById("container");
        container.addEventListener("mousedown", this.onMouseDown.bind(this));
        container.addEventListener("mousemove", this.onMouseMove.bind(this));
        container.addEventListener("mouseup", this.onMouseUp.bind(this));
      }
    
      onMouseDown(event) {
        this.mouseDown = true;
        this.touchStartX = event.clientX;
        this.touchStartY = event.clientY;
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
          // Trigger the move action based on the calculated direction
          // Replace 'yourMoveFunction' with the actual function to move the grid
          yourMoveFunction(direction);
        }
      }
    
      onMouseUp(event) {
        this.mouseDown = false;
      }
    
      getDirectionFromDelta(deltaX, deltaY) {
        const threshold = 50; // Minimum distance for a swipe to be considered a move
    
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
  
 // Export the InputHandler class
 if (typeof module !== "undefined" && module.exports) {
  module.exports = InputHandler;
}
}
  