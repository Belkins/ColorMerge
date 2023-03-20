import { createHexagonalGrid } from './hexagonalGrid.js';
import { Game } from './game.js';

document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('game-grid');

  const gridSize = 5; // Set the grid size you want (e.g. 5x5)
  const cellSize = 50; // Set the size of each hexagonal cell
  const cellMargin = 5; // Set the margin between cells

  createHexagonalGrid(gridContainer, gridSize, cellSize, cellMargin);

  const game = new Game(gridSize);
  // Add any other game initialization logic here
});
