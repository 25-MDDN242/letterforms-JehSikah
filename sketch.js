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
  //stroke(strokeColor);
  strokeWeight(2);

  // with no animation, redrawing the screen is not necessary
  //noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;
  
  // draw the letters A, B, C from saved data
  // drawLetter(center_x - 250, center_y, letterA);
  // drawLetter(center_x      , center_y, letterB);
  // drawLetter(center_x + 250, center_y, letterC);

  
  drawTool();
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







/////curve tool


var x1 = 100;
var y1 = 120;

var x2 = 80;
var y2 = 200;

var x3 = 180;
var y3 = 175;

var x4 = 30;
var y4 = 175;

var x5 = 50;
var y5 = 150;

var x6 = 150;
var y6 = 250;

var d1 = false;
var d2 = false;
var d4 = false;
var d3 = false;
var d5 = false;
var d6 = false;

/*
A
(113,-140)
(283,269)
(201,381)
(245,260)
(318,383)
(459,158)

B
(364,-134)
(322,128)
(345,396)
(424,338)
(319,310)
(-30,831)

C
(695,186)
(382,386)
(253,357)
(275,264)
(359,248)
(441,425)

D
(189,44)
(333,109)
(362,388)
(271,385)
(365,291)
(922,485)

*/



function drawTool() {

  
  funv(width-150,height-120);
  noFill();
  stroke(3);
  beginShape();
  curveVertex(x1,y1);

  curveVertex(x2,y2);
  curveVertex(x3,y3);
  curveVertex(x4,y4);
  curveVertex(x5,y5);

  curveVertex(x6,y6);
  
  endShape();
  
  stroke(0);
  
  
  
 // bezier(x1,y1,x2,y2, x3, y3, x4, y4);
  ellipse(x1,y1,10,10);
  ellipse(x6,y6,10,10);
  
  ellipse(x2,y2,10,10); 
  ellipse(x3,y3,10,10);
  ellipse(x4,y4,10,10);
  ellipse(x5,y5,10,10);
  stroke(200);

  line(x1, y1, x2, y2);

  line(x5,y5,x6,y6);

  //text by points
  fill(0,0,255,100);
  noStroke();
  text("("+x1+","+y1+")",x1,y1);
  text("("+x2+","+y2+")",x2,y2);
  text("("+x3+","+y3+")",x3,y3);
  text("("+x4+","+y4+")",x4,y4);
  text("("+x5+","+y5+")",x5,y5);
  text("("+x6+","+y6+")",x6,y6);
   
  
  if(d1){
    x1=mouseX;
    y1=mouseY;
  }
  if(d2){
    x2=mouseX;
    y2=mouseY;
  }
  if(d3){
    x3=mouseX;
    y3=mouseY;
  }
  if(d4){
    x4=mouseX;
    y4=mouseY;
  }
  if(d5){
    x5=mouseX;
    y5=mouseY;
  }
  if(d6){
    x6=mouseX;
    y6=mouseY;
  }
}

function mouseDragged(){
  if(dist(mouseX,mouseY,x1,y1)<10){
    d1=true;
  }
  if(dist(mouseX,mouseY,x2,y2)<10){
    d2=true;
  }
  if(dist(mouseX,mouseY,x3,y3)<10){
    d3=true;
  }
  if(dist(mouseX,mouseY,x4,y4)<10){
    d4=true;
  }
  if(dist(mouseX,mouseY,x5,y5)<10){
    d5=true;
  }
  if(dist(mouseX,mouseY,x6,y6)<10){
    d6=true;
  }
}

function mouseReleased(){
  d1=false;
  d2=false;
  d3=false;
  d4=false;
  d5=false;
  d6=false;
}

function funv(_x,_y){
  noStroke();
  fill(100);
  textSize(14);
  text("beginShape();",_x,_y);
  text("curveVertex("+x1+","+y1+");",_x,_y+15);
  text("curveVertex("+x2+","+y2+");",_x,_y+30);
  text("curveVertex("+x3+","+y3+");",_x,_y+45);
  text("curveVertex("+x4+","+y4+");",_x,_y+60);
  text("curveVertex("+x5+","+y5+");",_x,_y+75);
  text("curveVertex("+x6+","+y6+");",_x,_y+90);
  text("endShape();",_x,_y+105);
}


////////end tool












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