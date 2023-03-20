class Grid {
  constructor(size) {
    this.grid = [];
    this.size = size;
    this.cells = this.emptyGrid();
  }

    // Create an empty grid
    emptyGrid() {
      let newGrid = [];
      for (let i = 0; i < this.size; i++) {
        newGrid[i] = [];
        for (let j = 0; j < this.size; j++) {
          newGrid[i][j] = null;
        }
      }
      return newGrid;
    }
    
    // Add a new tile to the grid
    addTile(tile) {
      this.cells[tile.row][tile.col] = tile;
    }
    }
    // Move the tiles in the grid
    move(direction) {
      let hasMoved = false;
      const traverseOrder = this.getTraverseOrder(direction);
      
      traverseOrder.rows.forEach(row => {
        traverseOrder.cols.forEach(col => {
          const currentTile = this.cells[row][col];
          
          if (currentTile) {
            const nextPos = this.findNextPosition(row, col, direction);
            const nextTile = this.cells[nextPos.row][nextPos.col];
            
            if (this.mergeTiles(currentTile, nextTile) || this.moveTile(currentTile, nextPos)) {
              hasMoved = true;
            }
          }
        });
      });
    
      if (hasMoved) {
        // Logic for adding a new tile after a successful move (optional)
        // this.addRandomTile();
      }
    }
    
    getTraverseOrder(direction) {
      const rows = Array.from({ length: this.size }, (_, i) => i);
      const cols = Array.from({ length: this.size }, (_, i) => i);
    
      if (direction === 'right' || direction === 'down') {
        rows.reverse();
        cols.reverse();
      }
    
      return { rows, cols };
    }
    
    findNextPosition(row, col, direction) {
      let newPos = { row, col };
    
      while (true) {
        const prevPos = newPos;
        newPos = this.getNextPosition(newPos.row, newPos.col, direction);
    
        if (!this.isInsideGrid(newPos) || !this.isCellEmpty(newPos.row, newPos.col)) {
          return prevPos;
        }
      }
    }
    
    getNextPosition(row, col, direction) {
      const positionDeltas = {
        up: { row: -1, col: 0 },
        down: { row: 1, col: 0 },
        left: { row: 0, col: -1 },
        right: { row: 0, col: 1 }
      };
    
      return {
        row: row + positionDeltas[direction].row,
        col: col + positionDeltas[direction].col
      };
    }
    
    isInsideGrid(position) {
      return (
        position.row >= 0 &&
        position.row < this.size &&
        position.col >= 0 &&
        position.col < this.size
      );
    }
    
    isCellEmpty(row, col) {
      return this.cells[row][col] === null;
    }
    
    moveTile(tile, newPosition) {
      if (newPosition.row === tile.row && newPosition.col === tile.col) {
        return false; // Tile has not moved
      }
    
      this.cells[tile.row][tile.col] = null;
      this.cells[newPosition.row][newPosition.col] = tile;
      tile.row = newPosition.row;
      tile.col = newPosition.col;
    
      return true; // Tile has moved
    }

    // ... Other functions related to basic grid functionality
  
    // Check and expand board
    checkAndExpandBoard() {
      if (this.allTilesAreWhite()) {
        this.expandBoard();
      }
    }
      
  // Check if all tiles on the board have the white color
    allTilesAreWhite() {
      for (let row = 0; row < this.size; row++) {
        for (let col = 0; col < this.size; col++) {
          if (this.cells[row][col] && this.cells[row][col].color !== "white") {
            return false;
          }
        }
      }
      return true;
    }

  // Logic to expand the board and create new tiles with more colors
  expandBoard() {
  this.size++;
  const newColors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'cyan', 'magenta']; // Add more colors if needed

  // Add new rows
  for (let row = 0; row < this.size - 1; row++) {
    this.cells[row].push(null);
  }

  // Add new columns
  this.cells.push(new Array(this.size).fill(null));

  // Generate random positions for new colored tiles
  for (let i = 0; i < this.size; i++) {
    const row = Math.floor(Math.random() * this.size);
    const col = Math.floor(Math.random() * this.size);
    const color = newColors[Math.floor(Math.random() * newColors.length)];

    // Check if the cell is empty before adding a new colored tile
    if (!this.cells[row][col]) {
      this.cells[row][col] = new Tile(row, col, color);
    }
  }
}

  
    // Transform all occurrences of a specific color
    transformColor(fromColor, toColor) {
      for (let row = 0; row < this.size; row++) {
        for (let col = 0; col < this.size; col++) {
          if (this.cells[row][col] && this.cells[row][col].color === fromColor) {
            this.cells[row][col].color = toColor;
          }
        }
      }
    }
  
    // Merge tiles and return true if a merge occurred, false otherwise
    mergeTiles(currentTile, nextTile) {
      if (nextTile && currentTile.canMergeWith(nextTile)) {
        // Remove the nextTile from the grid
        this.cells[nextTile.row][nextTile.col] = null;
        
        // Create a new tile with the merged color
        const mergedColor = this.getMergedColor(currentTile.color);
        const newTile = new Tile(currentTile.row, currentTile.col, mergedColor);
    
        // Replace the currentTile with the new merged tile
        this.cells[currentTile.row][currentTile.col] = newTile;
    
        return true; // Merge occurred
      }
      return false; // Merge did not occur
    }
    
        // Merge tiles color logic 

    getMergedColor(color) {
      const colorMap = {
        'red': {
          'green': 'yellow',
          'blue': 'magenta',
          'red': 'red',
          'green': 'yellow',
          'blue': 'magenta',
        },
        'green': {
          'red': 'yellow',
          'blue': 'cyan',
          'green': 'green',
          'red': 'yellow',
          'blue': 'cyan',
        },
        'blue': {
          'red': 'magenta',
          'green': 'cyan',
          'blue': 'blue',
          'red': 'magenta',
          'green': 'cyan',
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
    
      const currentTileColor = this.cells[currentTile.row][currentTile.col].color;
      const nextTileColor = this.cells[nextTile.row][nextTile.col].color;
      return colorMap[currentTileColor][nextTileColor];
    }

  // Export the Grid class
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Grid;
  }
  