const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const plus = document.getElementById("jsPlus");
const minus = document.getElementById("jsMinus");

canvas.width = 800;
canvas.height = 800;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 3;

let painting = false;

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

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
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
