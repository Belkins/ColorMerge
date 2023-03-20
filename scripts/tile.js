// tile.js

export class Tile {
  constructor(row, col, color) {
    this.row = row;
    this.col = col;
    this.color = color;
  }

  canMergeWith(tile) {
    return this.color !== tile.color;
  }

  mergeWith(tile) {
    const mergedColor = this.getMergedColor(this.color, tile.color);
    return new Tile(this.row, this.col, mergedColor);
  }

  getMergedColor(color1, color2) {
    const colorMap = {
      'red': {
        'green': 'yellow',
        'blue': 'magenta',
        'red': 'red',
      },
      'green': {
        'red': 'yellow',
        'blue': 'cyan',
        'green': 'green',
      },
      'blue': {
        'red': 'magenta',
        'green': 'cyan',
        'blue': 'blue',
      },
      'yellow': {
        'red': 'white',
        'green': 'yellow',
        'blue': 'white',
      },
      'magenta': {
        'red': 'magenta',
        'green': 'white',
        'blue': 'blue',
      },
      'cyan': {
        'red': 'white',
        'green': 'green',
        'blue': 'cyan',
      },
    };
    return colorMap[color1][color2];
  }
}

export class ObstacleTile extends Tile {
  constructor(row, col) {
    super(row, col, null); // No color for obstacle tiles
  }

  // Override the merge method so that obstacle tiles cannot merge
  canMergeWith() {
    return false;
  }
}

export class TransformationTile extends Tile {
  constructor(row, col) {
    super(row, col, null); // No color for transformation tiles
    this.isTransformationTile = true;
  }

  // Override the merge method so that transformation tiles cannot merge
  canMergeWith() {
    return false;
  }
}

