"use strict";

/******************************************************


Here is were I will set up the slideshow and dropdown elements

******************************************************/


/*****************
Slideshow 1
******************/
let slideIndex = 1;
let slideIX = 1;


showSlides(slideIndex);
show(slideIX);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}


/*****************
Slideshow 2
******************/

// Next/previous controls
function plus(n) {
  show(slideIX += n);
}

// Thumbnail image controls
function current(n) {
  show(slideIX = n);
}

function show(n) {
  let i;
  let slides = document.getElementsByClassName("Slides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIX = 1}
  if (n < 1) {slideIX = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIX-1].style.display = "block";
  dots[slideIX-1].className += " active";

}


/*****************
Dropdown Elements
******************/
// Bodyguard
function bodyguard() {
  var x = document.getElementById("dropdown1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Fangirl
function fangirl() {
  var x = document.getElementById("dropdown2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Idol
function idol() {
  var x = document.getElementById("dropdown3");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Sprout About CutScene
function cutScene() {
  var x = document.getElementById("dropdown4");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Market Original Model
function bonus() {
  var x = document.getElementById("dropdown12");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Hungry Hustlers Assets
function assets() {
  var x = document.getElementById("dropdown8");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    window.scrollTo("dropdown8");
  }
}

// Stan Stopper "More"
function more1() {
  var x = document.getElementById("dropdown5");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Sprout About 2D "More"
function more2() {
  var x = document.getElementById("dropdown7");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Sprout About 3D "More"
function more3() {
  var x = document.getElementById("dropdown6");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Crime Finder "More"
function more4() {
  var x = document.getElementById("dropdown9");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Hungry Hustlers "More"
function more5() {
  var x = document.getElementById("dropdown10");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Market "More"
function more6() {
  var x = document.getElementById("dropdown11");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
