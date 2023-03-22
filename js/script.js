"use strict";

/******************************************************

This is a website that I will be using as my portfolio.

Here is were I will set up any fun effects.

******************************************************/


let circle = [1,2,3,4,5];


// Added preload fuction
// Used this to load images or sounds
function preload() {

}


function setup() {
  createCanvas(displayWidth,displayHeight);


  circle[0] = new Circle(displayWidth/2, displayHeight/2);
  circle[1] = new Circle( 10, 10);
  circle[2] = new Circle(100, 100);
  circle[3] = new Circle(500, 500);
  circle[4] = new Circle(displayWidth, displayHeight);


}


function draw() {
  background(104,212,255);

  circle[0].display();
  circle[0].move();

  circle[1].display();
  circle[1].move();

  circle[2].display();
  circle[2].move();

  circle[3].display();
  circle[3].move();

  circle[4].display();
  circle[4].move();


}
