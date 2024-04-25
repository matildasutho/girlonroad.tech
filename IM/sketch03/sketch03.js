// based on the Data Garden workshop
let sound;
let button;
let amp;
let vol;
let volumes = [];

function preload() {
  sound = loadSound("./sound/billyjoel.mp3");
}

function setup() {
  var canvas = createCanvas(640, 480);
  canvas.parent("sketch-container");
  button = createButton("PLAY");
  button.addClass("play-button");
  button.mousePressed(toggle);

  angleMode(DEGREES);
  amp = new p5.Amplitude();
}

function draw() {
  background("#003049");

  if (sound.isPlaying()) {
    vol = amp.getLevel();
    console.log(vol);
    volumes.push(vol);
  }

  let mapVol = map(vol, 0, 1, 0, height * 4);
  fill("#669bbc");
  noStroke();
  circle(width / 2, height / 2, mapVol);

  beginShape();
  for (let i = 0; i < volumes.length; i++) {
    strokeWeight(3);
    let mapVolumes = map(volumes[i], 0, 1, height, 0);
    point(i, mapVolumes);
    strokeWeight(1.5);
    vertex(i, mapVolumes);
  }
  endShape();
  if (volumes.length > width) {
    volumes.splice(0, 1);
  }
}

function toggle() {
  if (!sound.isPlaying()) {
    sound.play();
    button.html("PAUSE");
  } else if (sound.isPlaying) {
    sound.pause();
    button.html("PLAY");
  }
}
