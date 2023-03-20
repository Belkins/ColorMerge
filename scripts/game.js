import { Tile, ObstacleTile, TransformationTile } from "./tile.js";
import Grid from "./grid.js";
import { PowerUp, PowerUpManager } from "./powerUp.js";
import InputManager from "./inputManager.js";
import Scoreboard from "./scoreboard.js";

class Game {
  constructor(size = 4) {
    this.size = size;
    this.grid = new Grid(size);
    this.powerUpManager = new PowerUpManager();
    this.inputManager = new InputManager();
    this.scoreboard = new Scoreboard();
    this.timer = 0;
    this.currentScore = 0;
  }

  initialize() {
    // Set up event listeners
    this.inputManager.on("move", (direction) => this.move(direction));
    this.inputManager.on("restart", () => this.restart());
    console.log("Initializing game..."); // Debugging


    // Hide the power-up feature for now
    /*
    // Initialize power-ups in the PowerUpManager
    this.powerUpManager.powerUps = [
      // Add your power-up instances here, e.g.:
      // new PowerUp("type1", "PowerUp 1", effectFunction1, "icon1"),
      // new PowerUp("type2", "PowerUp 2", effectFunction2, "icon2"),
    ];
    
    // Set up event listeners for power-ups
    this.powerUpManager.powerUps.forEach((powerUp) => {
      document.querySelector(`#power-up-${powerUp.type}`).addEventListener("click", () => {
        this.powerUpManager.activatePowerUp(powerUp.type, this.grid);
        this.updateUI();
      });
    });
    */

    // Place initial tiles
    this.addRandomTile();
    this.startTimer();
    this.updateUI();

    // Update UI for the first time
    this.updateUI();
  }
    // Timer
  startTimer() {
    setInterval(() => {
      this.timer++;
      this.updateTimer();
    }, 1000); // Increment the timer every 1000ms (1s)
  }
    
  addRandomTile() {
    const tile = this.grid.randomAvailableCell();
    console.log("Adding random tile..."); // Debugging

    if (tile) {
      const newTile = new Tile(tile.row, tile.col, this.randomColor());
      this.grid.addTile(newTile);
    }
  }
  randomColor() {
    const colors = ["red", "blue", "green", "yellow"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  move(direction) {
    const previousGrid = this.grid.serialize();
    // Call the move method and get the score in the same line
    const moveScore = this.grid.move(direction);
    const moved = this.grid.serialize() !== previousGrid;

    if (moved) {
      this.addRandomTile();
      this.grid.checkAndExpandBoard();
      this.updateUI();
    }
    // Update the current game score
    this.currentScore += moveScore;
  }
  updateUI() {
    const gridContainer = document.getElementById("game-grid");
    gridContainer.innerHTML = "";

    const cellSize = 50; // Set the size of each hexagonal cell
    const cellMargin = 5; // Set the margin between cells

    for (let row = 0; row < this.grid.size; row++) {
      for (let col = 0; col < this.grid.size; col++) {
        const cell = document.createElement("div");
        cell.classList.add("hexagonal-cell");

        const xPos = (col * (cellSize + cellMargin)) + (row % 2 === 0 ? 0 : (cellSize / 2) + (cellMargin / 2));
        const yPos = row * ((3 / 4) * cellSize + cellMargin);

        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.style.left = `${xPos}px`;
        cell.style.top = `${yPos}px`;

        const tile = this.grid.cellContent({ row, col });

        if (tile) {
          const tileElement = document.createElement("div");
          tileElement.classList.add("tile");

          if (tile instanceof ObstacleTile) {
            tileElement.classList.add("obstacle-tile");
            tileElement.innerText = "O"; // You can replace "O" with an obstacle icon or symbol
          } else if (tile instanceof TransformationTile) {
            tileElement.classList.add("transformation-tile");
            tileElement.innerText = "T"; // You can replace "T" with a transformation icon or symbol
          } else {
            tileElement.classList.add("color-tile");
            tileElement.style.backgroundColor = tile.color;
          }

          cell.appendChild(tileElement);
        }

        gridContainer.appendChild(cell);
      }
    }

    // Update score
    const scoreElement = document.getElementById('score');
    scoreElement.innerText = this.currentScore;

    // Update timer
    this.updateTimer();

    // Update power-ups
    this.powerUpManager.powerUps.forEach((powerUp) => {
      const powerUpElement = document.querySelector(`#power-up-${powerUp.type}`);
      powerUpElement.querySelector(".count").innerText = powerUp.count;
    });
  }
}

    // Add the updateTimer method here, within the Game class
    updateTimer() {
      const timerElement = document.getElementById("timer");
      const minutes = Math.floor(this.timer / 60);
      const seconds = this.timer % 60;
      timerElement.innerText = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

  restart() {
    // ... restart logic
    this.updateUI();
  }

  // ... other methods and game logic
}

export default Game;