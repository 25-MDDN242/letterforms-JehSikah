/* these are optional special variables which will change the system */
var systemBackgroundColor = "#000";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/* internal constants */
const strokeColor  = "#be4adb";
let stroke2 = "#c264da";

/*

light tan: #efecd2
bright purp: #be4adb

colour picked
#a09172
#625844
#f3ea89
#b688ad

*/

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  push();
  rectMode(CENTER);
  angleMode(DEGREES);
  strokeCap(ROUND);
  strokeJoin(ROUND);
  
  let size = 100;
  let posX = 50;
  let posY = 150 - (size/2);

  let aX = posX + letterData["arcX"];
  let aY = posY + letterData["arcY"];
  let aR = letterData["arcR"];
  let aStart = letterData["arcStart"];
  let aStop = letterData["arcStop"];

  let lX = posX + letterData["lineX"];
  let lY = posY + letterData["lineY"];
  let lX2 = posX + letterData["lineX2"];
  let lY2 = posY + letterData["lineY2"];

  let cX = posX + letterData["circX"];
  let cY = posY + letterData["circY"];

  //grid(posX, posY, size);

  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = strokeColor;

  stroke(strokeColor);
  strokeWeight(strW);

  noFill();
  arc(aX, aY, aR, aR, aStart, aStop);
  line(lX, lY, lX2, lY2);
  fill(systemBackgroundColor);
  circle(cX, cY, 8);


  stroke(stroke2);
  strokeWeight(strW/4);

  noFill();
  arc(aX, aY, aR, aR, aStart, aStop);
  line(lX, lY, lX2, lY2);
  fill(systemBackgroundColor);
  circle(cX, cY, 8);

  pop();
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

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["arcX"]    = map(percent, 0, 100, oldObj["arcX"], newObj["arcX"]);
  new_letter["arcY"]    = map(percent, 0, 100, oldObj["arcY"], newObj["arcY"]);
  new_letter["arcR"]    = map(percent, 0, 100, oldObj["arcR"], newObj["arcR"]);
  new_letter["arcStart"]    = map(percent, 0, 100, oldObj["arcStart"], newObj["arcStart"]);
  new_letter["arcStop"]    = map(percent, 0, 100, oldObj["arcStop"], newObj["arcStop"]);

  new_letter["lineX"]    = map(percent, 0, 100, oldObj["lineX"], newObj["lineX"]);
  new_letter["lineY"]    = map(percent, 0, 100, oldObj["lineY"], newObj["lineY"]);
  new_letter["lineX2"]    = map(percent, 0, 100, oldObj["lineX2"], newObj["lineX2"]);
  new_letter["lineY2"]    = map(percent, 0, 100, oldObj["lineY2"], newObj["lineY2"]);
  
  new_letter["circX"]    = map(percent, 0, 100, oldObj["circX"], newObj["circX"]);
  new_letter["circY"]    = map(percent, 0, 100, oldObj["circY"], newObj["circY"]);

  return new_letter;
}

var swapWords = [
  "ENCHANT?",
  "CAB?CAB?",
  "BAAAAAAA"
]
