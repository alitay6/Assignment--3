window.onload = function() {
let canvas = document.getElementById('paper');
let ctx = canvas.getContext('2d');

canvas.width = 860;
canvas.height = 740;

let isPainting = false;
let startX = 0;
let startY = 0;
let lineWidth = 5;
let clearButton = document.getElementById('clear');

clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

const draw = (e) => {
    if (!isPainting || e.clientX - canvas.offsetLeft < 110) {
        return;
    }
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#545454';

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    if (e.clientX - canvas.offsetLeft < 110) {
        return;
    }
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
    ctx.beginPath();
    ctx.moveTo(startX - canvas.offsetLeft, startY - canvas.offsetTop);
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    startX = e.clientX;
    startY = e.clientY;
    ctx.beginPath();
    ctx.moveTo(startX - canvas.offsetLeft, startY - canvas.offsetTop);
});

canvas.addEventListener('mousemove', draw);
}
