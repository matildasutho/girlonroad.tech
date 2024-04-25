let img;
let smallPoint, largePoint;

function preload() {
    img = loadImage('guy.jpg');
}

function setup() {
    var canvas = createCanvas(img.width / 2.5, img.height / 2.5);
    canvas.parent('sketch-container');
    smallPoint = 2;
    largePoint = 8;
    noStroke();
    background(0);
    img.loadPixels();
    img.resize(img.width / 2.5, img.height / 2.5);
    frameRate(480);
}

function draw() {
    let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
    let imgX = floor(random(img.width));
    let imgY = floor(random(img.height));

    let pix = img.get(imgX, imgY);
    fill(pix, 128);

    let x = width / 2 - img.width / 2 + imgX;
    let y = height / 2 - img.height / 2 + imgY;

    ellipse(x, y, pointillize, pointillize);


}
