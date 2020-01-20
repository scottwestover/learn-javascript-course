const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#FF0000';

// draw a rectangle
ctx.fillRect(50, 50, 100, 50);

// draw text
ctx.textBaseline = 'top';
ctx.font = '24px Arial';
ctx.fillText('hi there', 50, 20);

ctx.strokeText('hi there again', 200, 20);

// gradients
const grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, 'blue');
grd.addColorStop(1, 'white');

ctx.fillStyle = grd;
ctx.fillRect(50, 250, 100, 50);

const grd2 = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd2.addColorStop(0, 'green');
grd2.addColorStop(1, 'white');

ctx.fillStyle = grd2;
ctx.fillRect(0, 0, 50, 50);
