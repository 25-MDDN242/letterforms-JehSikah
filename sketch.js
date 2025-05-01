const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "arcX": 15,
  "arcY": -30 + (12/2),
  "arcR": 90,
  "arcStart": -180,
  "arcStop": 0,

  "lineX": -30,
  "lineY": -30,
  "lineX2": -30,
  "lineY2": 60,

  "circX": -60,
  "circY": 60,
  "circR": 8
}

const letterB = {
  "arcX": 0,
  "arcY": 60,
  "arcR": 120,
  "arcStart": -90,
  "arcStop": 0,

  "lineX": -60,
  "lineY": 60,
  "lineX2": 60,
  "lineY2": 60,

  "circX": 0,
  "circY": -60,
  "circR": 8
}

const letterC = {
  "arcX": 0,
  "arcY": 30,
  "arcR": 60,
  "arcStart": -90,
  "arcStop": 0,

  "lineX": 30,
  "lineY": 30,
  "lineX2": 30,
  "lineY2": 60,

  "circX": 0,
  "circY": -60,
  "circR": 8
}


const backgroundColor  = "#acf2e7";

const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";
const purp = "#be4adb";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  rectMode(CENTER);
  angleMode(DEGREES);
  strokeCap(ROUND);
  strokeJoin(ROUND);

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(12);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;
  
  // draw the letters A, B, C from saved data  
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x, center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);

}

function drawLetter(posx, posy, letterData) {
  let size = 150;
  let center = posy - (size/2);

  let aX = posx + letterData["arcX"];
  let aY = center + letterData["arcY"];
  let aR = letterData["arcR"];
  let aStart = letterData["arcStart"];
  let aStop = letterData["arcStop"];

  let lX = posx + letterData["lineX"];
  let lY = center + letterData["lineY"];
  let lX2 = posx + letterData["lineX2"];
  let lY2 = center + letterData["lineY2"];

  let cX = posx + letterData["circX"];
  let cY = center + letterData["circY"];
  let cR = letterData["circR"];

  noFill();
  grid(posx, center, size);
  
  stroke(purp);
 
  arc(aX, aY, aR, aR, aStart, aStop);
  line(lX, lY, lX2, lY2);
  circle(cX, cY, cR);

}

function grid(x, y, size) {
  push();
  stroke("black");
  strokeWeight(0.5);
  rect(x, y, size);
  rect(x, y, size*3/5, size);
  rect(x, y, size/5, size);
  rect(x, y, size, size*3/5);
  rect(x, y, size, size/5);
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}