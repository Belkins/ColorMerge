# ColorMerge
Color Merge is a puzzle game based on a hexagonal grid, where the goal is to merge adjacent tiles of the same color to create new colors and ultimately turn all tiles on the grid into white tiles.


**Introduction
**Color Merge is a puzzle game based on a hexagonal grid, where the goal is to merge adjacent tiles of the same color to create new colors and ultimately turn all tiles on the grid into white tiles. The game is built using JavaScript, HTML, and CSS, and can be played on any modern web browser. Drawing inspiration from the popular game 2048, the developers designed a game with a hexagonal grid, adding a new level of complexity and interest to the gameplay.

**Gameplay**
The game starts with a few randomly colored tiles placed on a hexagonal grid. Players can slide the tiles in six directions (up, down, left, right, up-left, and up-right) by using arrow keys, mouse, or touch gestures. When two adjacent tiles with the same color collide, they merge into a single tile, featuring the next color in the sequence or a slightly different hue if using a color spectrum. After each move, a new colored tile appears on the grid in a random empty cell.

The game has a scoring system that awards points based on the number of merges, and the score is displayed on the screen along with the max score achieved during the last session. The game also has a timer that tracks the time spent on the current game session.

Players can restart the game at any point by clicking the "New Game" button. When there are no empty cells left for new colored tiles to appear and no matching colors are left on the grid, the game is over. A "Game Over!" message is displayed, and players can click the "Try Again" button to restart the game.

**User Interface
**The game's UI includes a scoreboard, timer, navigation, game instructions, and a footer with copyright information. The main game area consists of a hexagonal game container, which houses the grid container and tile container. The grid container contains grid rows and grid cells, while the tile container is responsible for managing the movement, colors, and collisions of tiles.

**Project Structure
**The game's logic is built using a modular structure, with separate classes for managing the grid, tiles, input, scoreboard, and game itself. Here's a brief overview of the project structure:

grid.js - This file handles the basic grid functionality, such as creating the grid, initializing the grid with starting colored tiles, and checking for available moves or empty cells.

hexagonalGrid.js - This file is responsible for the specific hexagonal grid logic, such as calculating the positions of hexagonal cells, handling the six possible movement directions, and managing the merging of tiles in the hexagonal grid.

tile.js - This file manages the Tile object, which represents a single tile on the grid. It contains properties like the tile's color and position, as well as methods for merging with other tiles.

game.js - This file is the core of the game logic, responsible for connecting the grid, tiles, and input manager, as well as controlling the game state (e.g., checking for game over or victory conditions).

inputManager.js - This file handles user input, such as detecting arrow key presses, and translating them into actions that the game should perform (e.g., sliding tiles in a specific direction).

powerUp.js - This file manages the Power-Up objects, which can be added as a feature to provide players with special abilities or advantages during gameplay.

scoreboard.js - This file manages the game's scoreboard, which tracks the player's score and time, as well as updating the score display on the game's UI.

scripts.js - This file is the entry point for the game'sJavaScript, initializing the game and connecting all the different components together.

**Installation and Usage**
**To run the game, follow these steps:

Clone the repository to your local machine.
Open the index.html file in your web browser.
Start playing the game by using the arrow keys, mouse, or touch gestures to slide the tiles and create new colors.
Contributing
If you want to contribute to the project, here are some guidelines to follow:

Fork the repository and create a new branch for your changes.
Make your changes to the code, and add any necessary documentation or tests.
Submit a pull request to the main repository for review.
License
Color Merge is licensed under the MIT License. You are free to use, modify, and distribute the game as long as you include the original copyright notice and license.

**Conclusion**
Color Merge is a fun and challenging puzzle game that combines the simplicity of 2048 with the complexity of a hexagonal grid. The game is built using a modular structure, making it easy to modify or extend with new features. With its visually appealing design and engaging gameplay, Color Merge is sure to provide hours of entertainment for players of all ages.
