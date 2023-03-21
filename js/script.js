"use strict";

/******************************************************

This is a website that I will be using as my portfolio.

Here is were I will set up any fun effects.

******************************************************/



// Added preload fuction
// Used this to load images or sounds
function preload() {

}
// Where is the circle
let x, y;

function setup() {
  createCanvas(720, 400);
  // Starts in the middle
  x = width / 2;
  y = height;
}

function draw() {
  background(200);

  // Draw a circle
  stroke(50);
  fill(100);
  ellipse(x, y, 24, 24);

  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;

  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}
