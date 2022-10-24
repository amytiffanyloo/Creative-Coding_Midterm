function setup(){
  createCanvas(400,400)
}

function draw(){
  fill(0);
  ellipse(100,100,100,100)
}




//load sound files for sound effect
// var hourNum, minNum, secNum;
// let tamagotchi;

// function setup() {
//   createCanvas(400, 400);
//   background(200,100,170);
//   textSize(60);
//   fill(30);
//   textAlign(CENTER);
//   tamagotchi = loadImage('baby_tamagotchi.png')
//   loading image 
//   //hunger status calculations
// }


// function draw(){
//   //tamagotchi 
//   push()
//   fill(165,170,165);
//   rect(70,60,260,230);
//   pop()
//   image(tamagotchi,100, 160,tamagotchi.width/4, tamagotchi.height/4);
  
//   //buttons
//   noStroke();
//   fill(100,100,100);
//   buttonLeft= ellipse(100,350,25);
//   buttonMiddle= ellipse(200,350,25);
//   buttonRight= ellipse(300,350,25);
  
//   //hunger level timer and calculation 
  
// }

// function mouseClicked(){
//   //if mouse is clicked inside buttonLeft, then it will trigger a change to watch screen
//   let d = dist(mouseX, mouseY, 100,350)
//   if(d<10){
//   watch();
//   }
//     //if mouse is clicked inside buttonMiddle, then it will trigger a change to status screen
// }

// function watch() {
//   hourNum = hour();

//   if (minute() < 10) {
//     minNum = "0" + minute();
//   } else {
//     minNum = minute();
//   }

//   if (second() < 10) {
//     secNum = "0" + second();
//   } else {
//     secNum = second();
//   }
//   text(hourNum+":"+minNum+":"+secNum, 100,10, width / 2, height / 2);
//   //tamagotchi image also disappears
// }

// //show status bar 
// function status(){
//   //show hunger level bar 
//   //show happiness level bar
// }