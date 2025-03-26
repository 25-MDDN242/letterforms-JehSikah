const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
  "size": 100,
  "offsetx": 30,
  "offsety": 0
 */

// const letterA = {
//   //leg size
//   "wide": 60,
//   "high": 150,

//   //circ size
//   "wide2": 120,
//   "high2": 150,

//   //hole size
//   "holew": 30,
//   "holeh": 50,
  
//   //leg left pos
//   "x1": 30,
//   "y1": -75,

//   //leg right pos
//   "x2": -30,
//   "y2": -75,

//   //circ pos
//   "offx": 0,
//   "offy": -130,

//   "holex": 0,
//   "holey": -130
// }

// const letterB = {
//   //leg size
//   "wide": 120,
//   "high": 150,

//   //circ size
//   "wide2": 60,
//   "high2": 150,

//   //hole size
//   "holew": 30,
//   "holeh": 50,
  
//   //leg left pos
//   "x1": 0,
//   "y1": -75,

//   //leg right pos
//   "x2": 0,
//   "y2": -75,

//   //circ pos
//   "offx": -30,
//   "offy": -130,

//   "holex": 0,
//   "holey": -75
// }

// const letterC = {
//   //leg size
//   "wide": 0,
//   "high": 0,

//   //circ size
//   "wide2": 120,
//   "high2": 150,

//   //hole size
//   "holew": 60,
//   "holeh": 50,
  
//   //leg left pos
//   "x1": 30,
//   "y1": -75,

//   //leg right pos
//   "x2": -30,
//   "y2": -75,

//   //circ pos
//   "offx": 0,
//   "offy": -75,

//   "holex": 30,
//   "holey": -75
// }


const letterA = {
  
}


const backgroundColor  = "#acf2e7";

const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

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
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);

  line(0,center_y, innerWidth, center_y);
}

function drawLetter(posx, posy, letterData) {
 


}




function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}









  // // draw two circles
  // fill(darkGreen);
  // ellipse(posx, posy, 150, 150);
  // fill(lightGreen);
  // ellipse(pos2x, pos2y, size2, size2);


  // line(
  //   posx, posy, 
  //   posx + 50, posy + 50
  // );

  // line(
  //   pos2x, pos2y, 
  //   pos2x + size2, pos2y + size2
  // );




 // //leg size
  // let sizex = letterData["wide"];
  // let sizey = letterData["high"];
  
  // //top size
  // let size2x = letterData["wide2"];
  // let size2y = letterData["high2"];

  // //hole size
  // let sizeHx = letterData["holew"];
  // let sizeHy = letterData["holeh"];

  // //top thing
  // let posTx = posx + letterData["offx"];
  // let posTy = posy + letterData["offy"];

  // //legs
  // let offLx = letterData["x1"];
  // let offLy = letterData["y1"];

  // let offRx = letterData["x2"];
  // let offRy = letterData["y2"];

  // //hole pos
  // let holex = posx + letterData["holex"];
  // let holey = posy + letterData["holey"];



  // fill(darkGreen);

  // //legs
  // ellipse(posx + offLx, posy + offLy, sizex, sizey);
  // ellipse(posx + offRx, posy + offRy, sizex, sizey);

  // //top
  // ellipse(posTx, posTy, size2x, size2y);


  // //hole
  // fill(backgroundColor);
  // ellipse(holex, holey, sizeHx, sizeHy);