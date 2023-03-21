import { createHexagonalGrid, Game } from './game.js';
import { InputManager } from './inputManager.js';
import { PowerUp } from './powerUp.js';
import { Scoreboard } from './scoreboard.js';

document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('game-grid');

  const gridSize = 5; // Set the grid size you want (e.g. 5x5)
  const cellSize = 50; // Set the size of each hexagonal cell
  const cellMargin = 5; // Set the margin between cells

  createHexagonalGrid(gridContainer, gridSize, cellSize, cellMargin);

  const game = new Game(gridSize);
  const inputManager = new InputManager();
  const powerUp = new PowerUp();
  const scoreboard = new Scoreboard();

  inputManager.on('move', (direction) => {
    game.move(direction);
    powerUp.checkAndUpdate(game);
    scoreboard.updateScore(game.score);
  });

  inputManager.on('newGame', () => {
    game.newGame();
    powerUp.reset();
    scoreboard.updateScore(0);
  });

  powerUp.on('powerUpActivated', (type) => {
    game.activatePowerUp(type);
  });

  scoreboard.displayDailyScores();
});
