Color Merge
Color Merge is an innovative browser-based puzzle game inspired by 2048 but with a unique twist. The game features a hexagonal grid, where the goal is to merge adjacent tiles of the same color to create new colors and ultimately turn all tiles on the grid into white tiles. Color Merge is designed to be visually appealing, mentally stimulating, and offers a fresh challenge compared to traditional puzzle games.

Color Merge Gameplay Screenshot

Features
Hexagonal grid for added complexity and interest
Intuitive tile sliding and merging mechanics
Scoring system based on the number of merges
Timer to track the time spent on the current game session
Responsive and touch-friendly UI
Modular code structure for easy expansion and modification
How to Play
Slide tiles in six directions (up, down, left, right, up-left, and up-right) using arrow keys, mouse, or touch gestures.
Merge adjacent tiles of the same color to create a new color.
A new colored tile appears on the grid in a random empty cell after each move.
The game ends when there are no empty cells left and no matching colors are left on the grid. Click "Try Again" to restart the game.
Code Structure
grid.js: Handles basic grid functionality, such as creating the grid, initializing the grid with starting colored tiles, and checking for available moves or empty cells.
hexagonalGrid.js: Responsible for the specific hexagonal grid logic, such as calculating the positions of hexagonal cells, handling the six possible movement directions, and managing the merging of tiles in the hexagonal grid.
tile.js: Manages the Tile object, which represents a single tile on the grid. It contains properties like the tile's color and position, as well as methods for merging with other tiles.
game.js: The core of the game logic, responsible for connecting the grid, tiles, and input manager, as well as controlling the game state (e.g., checking for game over or victory conditions).
inputManager.js: Handles user input, such as detecting arrow key presses, and translating them into actions that the game should perform (e.g., sliding tiles in a specific direction).
powerUp.js: Manages the Power-Up objects, which can be added as a feature to provide players with special abilities or advantages during gameplay.
scoreboard.js: Manages the game's scoreboard, which will track the player's score and time, as well as updating the score display on the game's UI.
scripts.js: The entry point for the game's JavaScript, initializing the game and connecting all the different components together.
Getting Started
To start playing Color Merge locally, simply clone the repository and open the index.html file in your browser.

bash
Copy code
git clone https://github.com/Belkins/ColorMerge.git
cd ColorMerge
Open the index.html file in your preferred browser, and enjoy the game!

Contributing
We welcome contributions to Color Merge! Feel free to submit issues, feature requests, or pull requests to help improve the game.

License
Color Merge is released under the MIT License.