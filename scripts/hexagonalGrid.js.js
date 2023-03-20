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
  