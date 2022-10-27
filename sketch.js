  //opening_sound from: https://www.zedge.net/ringtone/72fe719f-dc77-3052-a379-2ffc91b24d10
//screen switch reference: https://editor.p5js.org/itsai0724/sketches/B1xmLvw6G
var mode = 0;
var length = 50;
var shrinkAmount = 2;
var shrink = true;
let hungerlevel = 20;
let tamagotchi;
let opening_sound;
let bgm

function setup() {
  createCanvas(400, 400);
  background(200, 100, 170);
  textSize(60);
  textAlign(CENTER);
  soundFormats("mp3");
  bgm = loadSound("bgm.mp3")
  opening_sound = loadSound("sound.mp3");
  tamagotchi = new Tamagotchi();
  buttonLeft = new ButtonLeft(100);
  buttonMiddle = new ButtonMiddle(200);
  buttonRight = new ButtonRight(300);
  tamagotchi.preload();
}

function backgroundMusic(){
  bgm.play();
  bgm.loop()
  userStartAudio()
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
  shrink = shrink + 0.02;
}


function mousePressed() {
  buttonLeft.clicked();
  buttonMiddle.clicked();
  buttonRight.clicked();
}