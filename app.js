const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const plus = document.getElementById("jsPlus");
const minus = document.getElementById("jsMinus");
const mode = document.getElementById("jsMode");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 800;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 3;

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = ctx.color;
}

function plusThickness() {
  if (ctx.lineWidth < 15) {
    ctx.lineWidth += 1.5;
  }
}

function minusThickness() {
  if (ctx.lineWidth > 3) {
    ctx.lineWidth -= 1.5;
  }
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerHTML = '<i class="fas fa-paint-brush"></i>';
  } else {
    filling = true;
    mode.innerHTML = '<i class="fas fa-fill-drip"></i>';
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
}

if (plus) {
  plus.addEventListener("click", plusThickness);
}

if (minus) {
  minus.addEventListener("click", minusThickness);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

if (mode) {
  mode.addEventListener("click", handleModeClick);
}
