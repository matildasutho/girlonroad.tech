const canvas = document.getElementById("drawingCanvas");
const colors = ["red", "lightblue", "pink", "orange"];
let colorIndex = 0;
const ctx = canvas.getContext("2d");
let drawing = false;
let useImage = false;
const img = new Image();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("mousemove", (e) => {
  if (drawing) {
    if (useImage) {
      ctx.drawImage(img, e.offsetX - img.width / 2, e.offsetY - img.height / 2);
    } else {
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    }
  }
});

canvas.addEventListener("mouseup", () => {
  drawing = false;
});

canvas.addEventListener("mouseleave", () => {
  drawing = false;
});
window.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  if (event.code === "KeyQ") {
    ctx.strokeStyle = colors[0];
  }
  if (event.code === "KeyW") {
    ctx.strokeStyle = colors[1];
  }
  if (event.code === "KeyE") {
    ctx.strokeStyle = colors[2];
  }
  if (event.code === "KeyR") {
    ctx.strokeStyle = colors[3];
  }
});

document.getElementById("clearButton").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document
  .getElementById("togglePostcardsButton")
  .addEventListener("click", () => {
    useImage = !useImage;
    img.src = "./img/postcards.png";
  });
