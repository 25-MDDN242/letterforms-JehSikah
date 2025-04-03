/* these are optional special variables which will change the system */
var systemBackgroundColor = "#acf2e7";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/* internal constants */
const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#be4adb";

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
  stroke(strokeColor);
  strokeWeight(strW);
  

  /*
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];

  // draw two circles
  fill(darkGreen);
  ellipse(50, 150, 75, 75);
  fill(lightGreen);
  ellipse(pos2x, pos2y, size2, size2);
  */

  let size = 100;
  let posX = 50;
  let posY = 200 - (size/2);

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
  let cR = letterData["circR"];


  //grid(posX, posY, size);
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
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
