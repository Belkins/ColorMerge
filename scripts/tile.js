class Tile {
  constructor(color) {
    this.color = color;
  }

  canMergeWith(tile) {
    return this.color === tile.color;
  }

  // You may add other tile-related functions or properties here if needed
}

class ObstacleTile extends Tile {
  constructor() {
    super(null); // No color for obstacle tiles
  }

  // Override the merge method so that obstacle tiles cannot merge
  canMergeWith() {
    return false;
  }
}

// Export the Tile and ObstacleTile classes
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    Tile: Tile,
    ObstacleTile: ObstacleTile,
  };
}
