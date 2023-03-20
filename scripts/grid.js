import { Tile } from "./tile.js";

export class Grid {
  constructor(size) {
    this.size = size;
    this.cells = this.empty();
  }

  // Create an empty grid
  empty() {
    const cells = [];

    for (let x = 0; x < this.size; x++) {
      const row = [];
      cells.push(row);
      for (let y = 0; y < this.size; y++) {
        row.push(null);
      }
    }

    return cells;
  }

  // Add a new tile to the grid
  addTile(tile) {
    this.cells[tile.x][tile.y] = tile;
  }

  // Add a new tile with a random color to an empty cell
  addRandomTile() {
    const availableColors = ['red', 'green', 'blue'];
    const emptyCells = [];

    for (let row = 0; row < this.size; row++) {
      for (let col = 0; col < this.size; col++) {
        if (this.isCellEmpty(row, col)) {
          emptyCells.push({ row, col });
        }
      }
    }

    if (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const randomCell = emptyCells[randomIndex];
      const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];

      const newTile = new Tile(randomCell.row, randomCell.col, randomColor);
      this.addTile(newTile);
    }
  }

  // Check if there are any available cells in the grid
  cellsAvailable() {
    for (let row = 0; row < this.size; row++) {
      for (let col = 0; col < this.size; col++) {
        if (this.isCellEmpty(row, col)) {
          return true;
        }
      }
    }
    return false;
  }

  isCellEmpty(row, col) {
    return this.cells[row][col] === null;
  }

  // Merge tiles color logic
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

export default Grid;