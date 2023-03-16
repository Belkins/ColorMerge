// Input Handler Class
class InputHandler {
    constructor() {
      this.touchStartX = null;
      this.touchStartY = null;
      this.mouseDown = false;
      this.setupKeyboardControls();
      this.setupTouchControls();
      this.setupMouseControls();
    }
  
    // Keyboard Controls
    setupKeyboardControls() {
      // ...
    }
  
    // Touch Controls
    setupTouchControls() {
      // ...
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
  