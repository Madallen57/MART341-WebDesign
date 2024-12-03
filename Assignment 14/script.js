// Draw a paw print on the canvas
window.onload = function () {
    const canvas = document.getElementById('pawCanvas');
    const ctx = canvas.getContext('2d');
  
    // Draw large circle (paw base)
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.arc(150, 200, 40, 0, Math.PI * 2, true);
    ctx.fill();
  
    // Draw small toes
    const toePositions = [
      { x: 110, y: 150 },
      { x: 150, y: 130 },
      { x: 190, y: 150 }
    ];
  
    toePositions.forEach(pos => {
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 20, 0, Math.PI * 2, true);
      ctx.fill();
    });
  };
  
  // Add interactivity with JavaScript
  document.getElementById('funButton').addEventListener('click', () => {
    alert('Puppy training is fun and rewarding! 🐾');
  });
  