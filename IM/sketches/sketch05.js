// based on k.donnachie's speech to text sketch

var lang = navigator.language || 'en-US';
var speechRec = new p5.SpeechRec(lang, gotSpeech);
var continuous = true;
var interim = true;
var runningText;
var backgroundColor = 0;
var textSizeValue = 30;

function setup() {
  var canvas = createCanvas(640, 480);
  canvas.parent('sketch-container');
  background(backgroundColor);
  speechRec.onResult = showResult;
  speechRec.start(continuous, interim);
  textSize(textSizeValue);
}

function draw() {
  background(backgroundColor);
  fill(255);
  text(runningText, 50, height / 2);
}

function keyPressed() {
  if (keyCode === 32) {
    changeBackgroundColor();
  } else if (keyCode === UP_ARROW) {
    changeTextSize(true);
  } else if (keyCode === DOWN_ARROW) {
    changeTextSize(false);
  }
}

function changeBackgroundColor() {
  backgroundColor = color(random(255), random(255), random(255));
}

function changeTextSize(increase) {
  textSizeValue += (increase ? 5 : -5);
  textSizeValue = max(10, textSizeValue);
  textSize(textSizeValue);
}

function showResult() {
  if (speechRec.resultValue) {
    runningText = speechRec.resultString;
  }
}

function gotSpeech() {
  if (speechRec.resultValue) {
    runningText = speechRec.resultString;
  }
}