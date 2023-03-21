"use strict";

/******************************************************

Here are the parameters for the circles that will float in the back

******************************************************/

class Circle {


  constructor(x, y, vX, vY, tY, tX){

  this.x = x;
  this.y = y;

  this.vx = vX;
  this.vy = vY;

  this.ty = tY;
  this.tx = tV

}

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

  // Change the prey-firefly's velocity at random intervals
  // random() will be < 0.05 .5% of the time, so the prey-firefly
  // will change direction on .5% of frames

  if (random() < 0.005) {
    // Set velocity based on random values to get a new direction
    // and speed of movement
    //
    //sin() gave it a more calm and wave like movement, unlike noise
    this.vx = sin(this.tx), 0, 1, -4, 4;
    this.vy = sin(this.ty), 0, 1, -4, 4;
  }

  // Changed it make the prey-firefly move in a less
  // symetrical way.
  this.tx += 0.1
  this.ty += 0.5

  // Update prey-firefly position based on velocity
  this.x = this.x + this.vx;
  this.y = this.y + this.vy;

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
