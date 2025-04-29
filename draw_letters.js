/* these are optional special variables which will change the system */
var systemBackgroundColor = "#0d0320";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/* internal constants */
var strokeColor  = "#9751bb";
var stroke2 = "#c264da";
var bubble = "#cf94ff20";

var strW = 12;

var isTalk;

/*
ffffff10
#150b27aa
#cf94ff

light tan: #efecd2
bright purp: #be4adb
#c264da

#b83574
#ce6798
#f770a7
#9751bb
#6a50a8

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

  if (letterData["mrBrightTime"]) {
    strokeColor  = "#c264da";
    stroke2 = "#cf94ff";
  } else {
    strokeColor  = "#9751bb";
    stroke2 = "#c264da";
  }

  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = strokeColor;

  stroke(strokeColor);
  strokeWeight(strW);

  noFill();
  custArc(aX, aY, aR, aStart, aStop);

  custLine(lX, lY, lX2, lY2);
  custCirc(cX, cY);


  
  stroke(stroke2);
  strokeWeight(strW/4);

  noFill();
  arc(aX, aY, aR, aR, aStart, aStop);
  line(lX, lY, lX2, lY2);
  fill(bubble);
  circle(cX, cY, 8);

  pop();
}

function custArc(x, y, r, start, stop) {
  let midR = r-25;
  let smR = r-40;

  strokeWeight(strW);
  arc(x, y, r, r, start, stop);

  strokeWeight(strW/2);
  arc(x, y, midR, midR, start, stop);

  strokeWeight(strW/4);
  arc(x, y, smR, smR, start, stop);
}

function custLine (x, y, x2, y2) {
  strokeWeight(strW);
  line(x, y, x2, y2);

}

function custCirc (x, y) {
  noFill();
  strokeWeight(strW/4);
  circle(x, y, 30);
  
  strokeWeight(strW);
  circle(x, y, 8);
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

/*
var key;
function find_key(input_dict, target_value) {
  let k, v;
    key = [k for k, v in input_dict.items() if v == target_value]
    if key:
        return key[0]
}

function checkLetter (letter) {
  for (let i = 0; ;) {

  }
  return key;
}

  https://www.reddit.com/r/learnpython/comments/mv3qas/dictionary_exercise_finding_a_key_given_a_value/
  node.addEventListener('keydown', function(event) {
    const key = event.key; // "a", "1", "Shift", etc.
  });

  let key = window.key;
  console.log(key.toUpperCase());




  */

  document.addEventListener('keydown', function(event) {
    const pressedKey = event.key;
    console.log(pressedKey.toUpperCase() + "  " + letters.includes(pressedKey.toUpperCase()));
  });

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
 
  let old_aStart = oldObj["arcStart"];
  let new_aStart = newObj["arcStart"];
  if (old_aStart > new_aStart) {
    new_aStart += 360;
  }
  let old_aStop = oldObj["arcStop"];
  let new_aStop = newObj["arcStop"];
  if (old_aStop > new_aStop) {
    new_aStop  += 360;
  }

  new_letter["arcX"]    = map(percent, 0, 100, oldObj["arcX"], newObj["arcX"]);
  new_letter["arcY"]    = map(percent, 0, 100, oldObj["arcY"], newObj["arcY"]);
  new_letter["arcR"]    = map(percent, 0, 100, oldObj["arcR"], newObj["arcR"]);

  // new_letter["arcStart"]    = map(percent, 0, 100, oldObj["arcStart"], newObj["arcStart"]);
  // new_letter["arcStop"]    = map(percent, 0, 100, oldObj["arcStop"], newObj["arcStop"]);

  new_letter["arcStart"]    = map(percent, 0, 100, old_aStart, new_aStart);
  new_letter["arcStop"]    = map(percent, 0, 100, old_aStop, new_aStop);

  new_letter["lineX"]    = map(percent, 0, 100, oldObj["lineX"], newObj["lineX"]);
  new_letter["lineY"]    = map(percent, 0, 100, oldObj["lineY"], newObj["lineY"]);
  new_letter["lineX2"]    = map(percent, 0, 100, oldObj["lineX2"], newObj["lineX2"]);
  new_letter["lineY2"]    = map(percent, 0, 100, oldObj["lineY2"], newObj["lineY2"]);
  
  new_letter["circX"]    = map(percent, 0, 100, oldObj["circX"], newObj["circX"]);
  new_letter["circY"]    = map(percent, 0, 100, oldObj["circY"], newObj["circY"]);

  // && letters.includes(pressedKey.toUpperCase())
  if (percent < 100 && letters.includes(pressedKey.toUpperCase())) {
    new_letter["mrBrightTime"] = true;
    isTalk = true;
  } else if (percent < 100) {
    new_letter["mrBrightTime"] = true;
    isTalk = false;
  } else {
  new_letter["mrBrightTime"] = false;
    isTalk = false;
  }

  return new_letter;
}

var swapWords = [
  "ENCHANT?",
  "CAB?CAB?",
  "BAAAAAAA"
]
