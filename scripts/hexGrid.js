import { Tile } from "./tile.js";

export class HexGrid {
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

  // Add movement and merging logic for hexagonal grid
  move(direction) {
    // You need to implement the movement logic here based on the given direction.
    // The logic should consider the hexagonal structure and the six possible directions.
        let moved = false;
        const directions = {
          up: { x: 0, y: -1 },
          down: { x: 0, y: 1 },
          left: { x: -1, y: 0 },
          right: { x: 1, y: 0 },
          upLeft: { x: -1, y: -1 },
          upRight: { x: 1, y: -1 },
        };
    
        const vector = directions[direction];
    
        const traverseCells = (callback) => {
            const reverse = direction === 'down' || direction === 'right' || direction === 'upRight';
            for (let x = 0; x < this.size; x++) {
              for (let y = 0; y < this.size; y++) {
                const row = reverse ? this.size - x - 1 : x;
                const col = reverse ? this.size - y - 1 : y;
                callback(row, col);
              }
            }
          };
          
    
        const findFarthestPosition = (cell, vector) => {
          let previous;
    
          do {
            previous = cell;
            cell = { x: previous.x + vector.x, y: previous.y + vector.y };
          } while (this.isCellWithinBounds(cell) && this.isCellEmpty(cell.x, cell.y));
    
          return {
            farthest: previous,
            next: cell,
          };
        };
    
        const moveTile = (tile, cell) => {
          this.cells[tile.x][tile.y] = null;
          this.cells[cell.x][cell.y] = tile;
          tile.updatePosition(cell);
        };
    
        const mergeTiles = (tile, targetTile, mergedColor) => {
          const newTile = new Tile(targetTile.x, targetTile.y, mergedColor);
          this.cells[tile.x][tile.y] = null;
          this.cells[targetTile.x][targetTile.y] = newTile;
        };
    
        traverseCells((x, y) => {
          const tile = this.cells[x][y];
    
          if (tile) {
            const positions = findFarthestPosition({ x, y }, vector);
            const next = this.cells[positions.next.x][positions.next.y];
    
            if (next && next.color === tile.color) {
              const mergedColor = this.getMergedColor(tile.color, next.color);
              mergeTiles(tile, next, mergedColor);
              moved = true;
            } else if (!this.isCellEmpty(positions.farthest.x, positions.farthest.y)) {
              moveTile(tile, positions.farthest);
              moved = true;
            }
          }
        });
    
        if (moved) {
          this.addRandomTile();
        }
      }
    

// Create the hexagonal grid in the DOM
export function createHexagonalGrid(gridContainer, gridSize, cellSize, cellMargin) {
  // Create hexagonal grid cells
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const cell = document.createElement('div');
      cell.classList.add('hexagonal-cell');

      const xPos = (col * (cellSize + cellMargin)) + (row % 2 === 0 ? 0 : (cellSize / 2) + (cellMargin / 2));
      const yPos = row * ((3 / 4) * cellSize + cellMargin);

      cell.style.width = `${cellSize}px`;
      cell.style.height = `${cellSize}px`;
      cell.style.left = `${xPos}px`;
      cell.style.top = `${yPos}px`;

      gridContainer.appendChild(cell);
    }
  }
}
