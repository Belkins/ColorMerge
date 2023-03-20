const Grid = require("./grid");
const InputHandler = require("./inputManager");
const { Tile } = require("./tile");
const PowerUp = require("./powerUp");
const scoreboard = require("./scoreboard");

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Initialize game objects and variables
const gridSize = 4;
let grid = new Grid(gridSize, gridSize);
let inputManager = new InputManager();
let score = 0;

// Set up event listeners for user input
function setUpInputListeners() {
  inputManager.on('move', (direction) => {
    move(direction);
    updateScore();
    checkWin();
    checkGameOver();
  });

  inputManager.on('restart', () => {
    grid = new Grid(gridSize, gridSize);
    score = 0;
    updateScore();
  });
  
 // Add more event listeners for other input actions as needed
}

setUpInputListeners();

// Main game loop
function gameLoop() {
  // Update the game board
  grid.draw(ctx);


// Continue the game loop
  requestAnimationFrame(gameLoop);
}


// Update the score
function updateScore() {
  score = grid.getScore();
  // Update the score display on the web page
  scoreboard.update(score);
}

// Check for winning condition
function checkWin() {
  if (grid.hasWon()) {
    // Perform any winning-related actions, such as showing a message or stopping the game
    console.log("You won!");
  }
}

// Check for game over condition
function checkGameOver() {
  if (grid.isGameOver()) {
    // Perform any game over-related actions, such as showing a message or stopping the game
    console.log("Game over!");
  }
}

// Start the game loop
gameLoop();

// Multiple levels
const levels = [
  {
    colors: ["red", "green", "blue"],
    mergingRules: {
      red: { green: "yellow", blue: "magenta" },
      green: { red: "yellow", blue: "cyan" },
      blue: { red: "magenta", green: "cyan" },
    },
  },
  // Add more levels here
];

// Current Level 
let currentLevel = 0;

// Function that merges colors
function mergeColors(tile1, tile2) {
  if (tile1.isTransformationTile || tile2.isTransformationTile) {
    // Apply transformation effect
    // For example, change adjacent tiles' colors to a specific color
    const affectedTiles = grid.getAdjacentTiles(tile1.row, tile1.col);
    const targetColor = "cyan"; // Change this to the desired color
    affectedTiles.forEach((tile) => {
      tile.color = targetColor;
    });

    // If you want to swap colors instead, you can do something like this:
    // const targetTile = grid.getRandomAdjacentTile(tile1.row, tile1.col);
    // [tile1.color, targetTile.color] = [targetTile.color, tile1.color];
  } else {
    // Normal merging logic
    const currentMergingRules = levels[currentLevel].mergingRules;
    return currentMergingRules[tile1.color] && currentMergingRules[tile1.color][tile2.color]
      ? currentMergingRules[tile1.color][tile2.color]
      : null;
  }
}


// Define power-up types and effects
const powerUpTypes = {
  COLOR_BOMB: {
    type: "COLOR_BOMB",
    effect: (grid) => {
      const fromColor = getRandomColor();
      const toColor = getRandomColor();
      grid.transformColor(fromColor, toColor);
    },
  },
};

// Player's power-ups using an array:
let powerUps = [];

// Award a power-up when a milestone is reached
function awardPowerUp(type) {
  powerUps.push(type);
  // Update the UI to display the awarded power-up
}

// Activate a power-up and apply its effect
function activatePowerUp(type) {
  const powerUp = powerUpTypes[type];
  if (powerUp && powerUps.includes(type)) {
    powerUp.effect(grid);
    powerUps = powerUps.filter((pu) => pu !== type); // Remove the activated power-up from the player's inventory
    // Update the UI to reflect the activated power-up and its effect
  }
}

// Time-based challenges. Timer
let timer;
let timeElapsed = 0;

function startTimer() {
  timer = setInterval(() => {
    timeElapsed += 1;
    // Update the UI to display the time elapsed
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

// Create time-limited challenges with specific goals. For example, turning all tiles white within a given timeframe:
const timeLimit = 60; // in seconds
startTimer();

// Check if the challenge is completed or failed
function checkTimeChallengeStatus() {
  if (grid.allTilesWhite()) {
    stopTimer();
    // The player has successfully completed the challenge
  } else if (timeElapsed >= timeLimit) {
    stopTimer();
    // The player has failed the challenge
  }
}

function move(direction) {
  const initialGridState = grid.clone();

  let mergeOccurred;
  do {
    mergeOccurred = grid.move(direction, mergeColors);
  } while (mergeOccurred);

  if (!grid.equals(initialGridState)) {
    // Update the score, UI, etc.
    updateScore();
  }
}
// Initialize the input handler and set up controls
const inputHandler = new InputHandler(move);

// Add a transformation tile to the grid
function addTransformationTile(grid, row, col) {
  grid.cells[row][col] = new TransformationTile();
}

init();
gameLoop();