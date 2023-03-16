// Create an array to store the game grid
let grid = [
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""]
];

let score = 0;

// Add event listener for the page load
document.addEventListener("DOMContentLoaded", () => {
  initializeGame();
});

// Add event listeners for keyboard input
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
    case "w":
      event.preventDefault();
      moveAndMerge(row => row, (_, j) => j);
      break;
    case "ArrowDown":
    case "s":
      event.preventDefault();
      moveAndMerge(row => 3 - row, (_, j) => j);
      break;
    case "ArrowLeft":
    case "a":
      event.preventDefault();
      moveAndMerge((_, i) => i, col => col);
      break;
    case "ArrowRight":
    case "d":
      event.preventDefault();
      moveAndMerge((_, i) => i, col => 3 - col);
      break;
  }
});

// Add event listener for the reset button
document.getElementById("reset-button").addEventListener("click", () => {
  initializeGame();
});

let touchStartX = null;
let touchStartY = null;

document.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
});

document.addEventListener('touchmove', (event) => {
  if (!touchStartX || !touchStartY) {
    return;
  }

  const touchEndX = event.touches[0].clientX;
  const touchEndY = event.touches[0].clientY;
  const diffX = touchStartX - touchEndX;
  const diffY = touchStartY - touchEndY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0) {
      moveAndMerge((_, i) => i, col => col);
    } else {
      moveAndMerge((_, i) => i, col => 3 - col);
    }
  } else {
    if (diffY > 0) {
      moveAndMerge(row => row, (_, j) => j);
    } else {
      moveAndMerge(row => 3 - row, (_, j) => j);
    }
  }

  touchStartX = null;
  touchStartY = null;
});

function initializeGame() {
  grid = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
  ];

  score = 0;
  updateScore();
  generateNewTile();
  generateNewTile();
  drawGrid();
}

function drawGrid() {
  const container = document.getElementById("game-container");
  container.innerHTML = ""; // Clear the container

  grid.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.style.backgroundColor = cell || "#eee";
      container.appendChild(tile);
    });
  });
}

function updateScore() {
  document.getElementById("score").textContent = score;
}

function generateNewTile() {
  let emptyTiles = [];

  grid.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (!cell) {
        emptyTiles.push([rowIndex, columnIndex]);
      }
    });
  });

  if (emptyTiles.length === 0) {
    return false;
  }

  const randomEmptyTile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
  const randomColor = ["red", "blue", "green", "yellow"][Math.floor(Math.random() * 4)];

  grid[randomEmptyTile[0]][randomEmptyTile[1]] = randomColor;

  return true;
}

function moveAndMerge(rowFn, colFn) {
  let moved = false;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const row = rowFn(i, j);
      const col = colFn(i, j);
      if (grid[row][col]) {
        let newRow = row;
        let newCol = col;
        while (true) {
          const nextRow = rowFn(newRow, -1);
          const nextCol = colFn(newCol, -1);
          if (
            nextRow < 0 ||
            nextRow >= 4 ||
            nextCol < 0 ||
            nextCol >= 4 ||
            grid[nextRow][nextCol]
          ) {
            break;
          }
          newRow = nextRow;
          newCol = nextCol;
        }
        if (
          newRow !== row ||
          newCol !== col ||
          mergeTiles(newRow, newCol, row, col)
        ) {
          moved = true;
        }
      }
    }
  }
  if (moved) {
    generateNewTile();
    drawGrid();
  }
  return moved;
}

function mergeTiles(row1, col1, row2, col2) {
  const color1 = grid[row1][col1];
  const color2 = grid[row2][col2];
  const mergedColor = getMergedColor(color1, color2);

  if (mergedColor) {
    grid[row1][col1] = mergedColor;
    grid[row2][col2] = "";
    score++;

    // Add extra points for harder colors
    const extraPoints = getExtraPoints(mergedColor);
    score += extraPoints;

    updateScore();
    return true;
  }

  return false;
}
function getExtraPoints(color) {
  switch (color) {
    case "purple":
    case "brown":
    case "orange":
      return 1;
    case "cyan":
    case "green":
      return 2;
    case "yellow-green":
      return 3;
    default:
      return 0;
  }
}


function getMergedColor(color1, color2) {
  if (color1 === color2) return null;

  const colorPairs = [
    ["red", "blue", "purple"],
    ["red", "green", "brown"],
    ["red", "yellow", "orange"],
    ["blue", "green", "cyan"],
    ["blue", "yellow", "green"],
    ["green", "yellow", "yellow-green"],
  ];

  for (const pair of colorPairs) {
    if (pair.includes(color1) && pair.includes(color2)) {
      return pair.filter((c) => c !== color1 && c !== color2)[0];
    }
  }
  return null;

  function getExtraPoints(color) {
    switch (color) {
      case "purple":
      case "brown":
      case "orange":
        return 1;
      case "cyan":
      case "green":
        return 2;
      case "yellow-green":
        return 3;
      default:
        return 0;
    }
  }
  
}
