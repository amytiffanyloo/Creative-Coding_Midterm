//screen switch reference: https://editor.p5js.org/itsai0724/sketches/B1xmLvw6G
var mode = 0;
var length = 50;
var shrinkAmount = 2;
var shrink = true;
let hungerlevel = 20;
let tamagotchi;
let buttons;
let buttonLeft;
let button2;
let button3;

function setup() {
  createCanvas(400, 400);
  background(200, 100, 170);
  textSize(60);
  textAlign(CENTER);
  tamagotchi = new Tamagotchi();
  buttonLeft = new ButtonLeft(100);
  buttonMiddle = new ButtonMiddle(200);
  buttonRight = new ButtonRight(300);
  tamagotchi.preload();
}

function draw() {
  background(220);
  if (mode == 0) {
    defaultmode();
  } else if (mode == 1) {
    watch();
  } else if (mode == 2) {
    status();
  }
}

//Useful to have multiple elements on one screen
function defaultmode() {
  background(200, 100, 100);
  fill(165, 170, 165);
  rect(70, 60, 260, 230);
  //shape of the buttons
  noStroke();
  fill(100, 100, 100);
  buttonLeft.show();
  buttonMiddle.show();
  buttonRight.show();
  tamagotchi.show();
}

function watch() {
  background(200, 100, 100);
  fill(165, 170, 165);
  rect(70, 60, 260, 230);
  fill(100, 100, 100);
  buttonLeft.show();
  buttonMiddle.show();
  buttonRight.show();
  hourNum = hour();
  if (minute() < 10) {
    minNum = "0" + minute();
  } else {
    minNum = minute();
  }
  if (second() < 10) {
    secNum = "0" + second();
  } else {
    secNum = second();
  }
  fill(50);
  text(hourNum + ":" + minNum + ":" + secNum, 100, 150, width / 2, height / 2);
}

function status() {
  background(200, 100, 100);
  fill(165, 170, 165);
  rect(70, 60, 260, 230);
  fill(100, 100, 100);
  buttonLeft.show();
  buttonMiddle.show();
  buttonRight.show();
  fill(100, 100, 200);
  rect(300, 200, shrink, 100);
  shrink = shrink + 1;
}


function mousePressed() {
  buttonLeft.clicked();
  buttonLeft.triggered();
  buttonMiddle.clicked();
  buttonMiddle.triggered();
  buttonRight.clicked();
  buttonRight.triggered();
}