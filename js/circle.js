"use strict";

/******************************************************

Here are the parameters for the circles that will float in the back

******************************************************/

class Circle {


  constructor(x, y){

  this.x = x;
  this.y = y;

}

display(){
  // Draw a circle
  stroke(50);
  fill(0);
  ellipse(this.x, this.y, 100, 100);

}

move() {

  //This code was originally made by Pippin  Barr and then modified by Lilia Isabel Aguirre Lugo
  //*************************************************************

  // circle values
  let circleVX;
  let circleVY;
  let circleMaxSpeed = 4;

  //Adding variable for Sin
  let circletx = 0;
  let circlety = 0;

  circleVX = -circleMaxSpeed;
  circleVY = circleMaxSpeed;



  // Change the prey-firefly's velocity at random intervals
  // random() will be < 0.05 .5% of the time, so the prey-firefly
  // will change direction on .5% of frames

  if (random() < 0.05) {
    // Set velocity based on random values to get a new direction
    // and speed of movement
    //
    //sin() gave it a more calm and wave like movement, unlike noise
    circleVX = map(noise(circletx), 0, 1, -circleMaxSpeed, circleMaxSpeed);
    circleVY = map(noise(circlety), 0, 1, -circleMaxSpeed, circleMaxSpeed);
  }

  // Changed it make the prey-firefly move in a less
  // symetrical way.
  circletx += 0.1;
  circlety += 0.5;

  // Update prey-firefly position based on velocity
  this.x = this.x + circleVX;
  this.y = this.y + circleVY;

  // Screen wrapping
  if (this.x < 0) {
    this.x = this.x + width;
  } else if (this.x > width) {
    this.x = this.x - width;
  }

  if (this.y < 0) {
    this.y = this.y + height;
  } else if (this.y > height) {
    this.y = this.y - height;
  }
}

}
