function setup() {
  var canvas = createCanvas(640, 480);
  canvas.parent('sketch-container');
  capture = createCapture(VIDEO);
  capture.hide();
  background(255, 255, 255);
  accent = "#f9a6ff";
}

function draw() {
  background(255, 255, 255, 100);
  image(capture, width / 2 - 320, height / 2 - 240, 640, 480);
  filter(THRESHOLD);
  noStroke();
  fill(accent);
}