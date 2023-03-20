class PowerUp {
    constructor(type, effect) {
      this.type = type;
      this.effect = effect;
    }
  
    activate(grid) {
      this.effect(grid);
    }
  
    // You may add other power-up related functions here if needed
  }
  
  // Export the PowerUp class
  if (typeof module !== "undefined" && module.exports) {
    module.exports = PowerUp;
  }
  