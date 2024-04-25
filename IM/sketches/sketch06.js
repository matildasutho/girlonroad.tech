function setup() {
  var canvas = createCanvas(640, 480);
  canvas.parent('sketch-container');
  background(0);
  frameRate(100);
}

function draw() {
  if (keyIsDown(32)) {
    fill(random(255), random(255), random(255));
    stroke(random(255), random(255), random(255));
  } else {
    fill(0);
    stroke("#030FD5");
  }
  circle(mouseX, mouseY, 100);
}
