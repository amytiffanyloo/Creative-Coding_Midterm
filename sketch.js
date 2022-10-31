//sound effect from a public Google drive: https://drive.google.com/drive/folders/15LCqGXNsTu6ADbCzGNlOnzUvU0PZn_80

//defining variables
let mode = 0
let hungerLevel = 50
let happinessLevel=0
let tamagotchi
let fed_sound
let opening_sound
let bgm

//function to preload all sound effects
function music_preload(){
  soundFormats("mp3")
  bgm = loadSound("bgm.mp3")
  opening_sound = loadSound("sound.mp3")
  fed_sound = loadSound("fed_sound.mp3")
}

function setup() {
  createCanvas(400, 400);
  music_preload()
  setTimeout(openingSound,500)
  //set up all objects and preload images
  tamagotchi = new Tamagotchi();
  baby = new babyTamagotchi(100,200);
  buttonLeft = new ButtonLeft(100);
  buttonMiddle = new ButtonMiddle(200);
  buttonRight = new ButtonRight(300);
  tamagotchi.preload();
  baby.preload();
}

//created opening sound function separately so that I could use setTimeout 
function openingSound(){
  opening_sound.play();
}

//create a countdown system for hunger level and have hearts displayed to represent it
//hunger status countdown reference: https://editor.p5js.org/xinxin/sketches/2y1_tQ5H0
function hungerStatus(){
  timer = millis();

  if (timer % 20 == 0) {
    hungerLevel--;
  }
  if (hungerLevel >= 40) {
    tamagotchi.default();
  } else if (hungerLevel >= 30 && hungerLevel > 0) {
    tamagotchi.hungry1();
  } else if (hungerLevel >= 20 && hungerLevel > 0) {
    tamagotchi.hungry2();
  }else if (hungerLevel < 20 && hungerLevel > 0) {
    tamagotchi.hungry3();
  }
}
//default set up of the screen 
function draw() {
  background(200, 100, 100);
  fill(165, 170, 165);
  rect(70, 60, 260, 230);
  buttonLeft.show();
  buttonMiddle.show();
  buttonRight.show();
  changeScreen();
}

//set up a switch for the screen so that it can be changed every time a button is clicked
//screen switch reference: https://editor.p5js.org/itsai0724/sketches/B1xmLvw6G
function changeScreen(){
    if (mode == 0) {
    mainmode();
  } else if (mode == 1) {
    watch();
  } else if (mode == 2) {
    fed();
  }
}

//main screen where hunger level and tamagotchi appears
function mainmode() {
  if(happinessLevel>2){
  tamagotchi.show();   
  }else if (happinessLevel<=2){
   baby.show()
  }
  hungerStatus();
}

//screen when tamagotchi is fed, when right button is clicked
function fed() {
  if(happinessLevel>2){
    tamagotchi.fed();
  }else if (happinessLevel<=2){
    baby.fed();
  }
  fill(0)
  textSize(28)
  text("Thanks!",150,100,100,100)
}

//screen to check time, when left button is clicked
function watch() {  
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
  textSize(50)
  fill(50);
  text(hourNum + ":" + minNum + ":" + secNum, 100, 150, width / 2, height / 2);
  
}

//trigger functions when each button is clicked
function mousePressed() {
  buttonLeft.clicked();
  buttonMiddle.clicked();
  buttonRight.clicked();
}
