/*
 * Colors
 * @description Hue is the color reflected from or transmitted through an 
 * object and is typically referred to as the name of the color (red, blue, 
 * yellow, etc.) Move the cursor vertically over each bar to alter its hue.
 */
var barWidth = 20;
var lastBar = -1;

function setup() {
  createCanvas(720, 400);
  colorMode(HSB, height, height, height);  //Hue Saturation Brightness
  noStroke();
  background('white');
}

function draw() {
  var whichBar = mouseX / barWidth;
  console.log(whichBar);
  
  if (whichBar <= lastBar) {
    var barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
  
  if (whichBar > lastBar) {
    var barX = whichBar * barWidth;
    fill(mouseX, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}
