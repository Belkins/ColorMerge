# Use the lightweight Alpine-based Nginx image
FROM nginx:alpine

# Copy only the necessary files to the Nginx HTML directory
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY scripts/game.js /usr/share/nginx/html/scripts/game.js
COPY scripts/inputManager.js /usr/share/nginx/html/scripts/inputManager.js
COPY scripts/powerUp.js /usr/share/nginx/html/scripts/powerUp.js
COPY scripts/tile.js /usr/share/nginx/html/scripts/tile.js
COPY scripts/scoreboard.js /usr/share/nginx/html/scripts/scoreboard.js
COPY scripts/scripts.js /usr/share/nginx/html/scripts/scripts.js
COPY robots.txt /usr/share/nginx/html/robots.txt

# Set the permissions for all files
RUN chmod -R 755 /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80
