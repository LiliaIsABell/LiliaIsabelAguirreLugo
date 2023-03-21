"use strict";

/******************************************************

This is a website that I will be using as my portfolio.

Here is were I will set up any fun effects.

******************************************************/


// Where is the circle
let circleX, circleY;

let circleVX;
let circleVY;
let circleMaxSpeed = 4;
//Adding variable for Perlin noise
let circletx = 0;
let circlety = 0;


// Added preload fuction
// Used this to load images or sounds
function preload() {

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  // Starts in the middle
  circleX = displayWidth / 2;
  circleY = displayHeight;
  circleVX = -circleMaxSpeed;
  circleVY = circleMaxSpeed;

}

function draw() {
  background(104,212,255);

  setupCircle();
  moveCircle();

}

function setupCircle(){
  // Draw a circle
  stroke(50);
  fill(0);
  ellipse(circleX, circleY, 100, 100);




}

function moveCircle() {

  //This code was originally made by Pippin  Barr and then modified by Lilia Isabel Aguirre Lugo
  //*************************************************************

  // Change the prey-firefly's velocity at random intervals
  // random() will be < 0.05 .5% of the time, so the prey-firefly
  // will change direction on .5% of frames

  if (random() < 0.005) {
    // Set velocity based on random values to get a new direction
    // and speed of movement
    //
    //sin() gave it a more calm and wave like movement, unlike noise
    circleVX = sin(circletx), 0, 1, -circleMaxSpeed, circleMaxSpeed;
    circleVY = sin(circlety), 0, 1, -circleMaxSpeed, circleMaxSpeed;
  }

  // Changed it make the prey-firefly move in a less
  // symetrical way.
  circletx += 0.1
  circlety += 0.5

  // Update prey-firefly position based on velocity
  circleX = circleX + circleVX;
  circleY = circleY + circleVY;

  // Screen wrapping
  if (circleX < 0) {
    circleX = circleX + width;
  } else if (circleX > width) {
    circleX = circleX - width;
  }

  if (circleY < 0) {
    circleY = circleY + height;
  } else if (circleY > height) {
    circleY = circleY - height;
  }
}
