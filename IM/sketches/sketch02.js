let gfx;

function setup() {
  var canvas = createCanvas(640, 480);
  canvas.parent('sketch-container');
  background(0);
  gfx = createGraphics(640, 480);
  gfx.background(0);
  gfx.stroke(255);
  noCursor();
}

function draw() {
  background(0);
  image(gfx, 0, 0);

  gfx.line(mouseX, mouseY, pmouseX, pmouseY);

  fill('#0210D4');
  noStroke();
  ellipse(mouseX, mouseY, 10, 10);
}

function keyPressed() {
  if (key == ' ') {
    gfx.background(0);
  }
}