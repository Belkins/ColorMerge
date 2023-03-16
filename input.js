function setupMouseControls() {
    const container = document.getElementById('container');
    container.addEventListener('mousedown', onMouseDown);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseup', onMouseUp);
  }
  
  function onMouseDown(event) {
    // Store the initial mouse position
  }
  
  function onMouseMove(event) {
    // Calculate the difference in mouse position and determine the direction
  }
  
  function onMouseUp(event) {
    // Trigger the move action based on the calculated direction
  }
  