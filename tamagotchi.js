let tmg;
// let xpos=0
// let ypos=0

class Tamagotchi {
  constructor(x,y){
  this.x= 190
  this.y= 220  
  }
  
  preload(){
  tmg = loadImage('baby_tamagotchi.png')  
  }
  
  show(){ 
  image(tmg,150 + sin(xpos) * 10, 180+sin(ypos)*10, tmg.width/12, tmg.height/12);
  // xpos += 0.03;
  // ypos += 0.06
  }

  default () {
    fill(0);
    text("nothing special!", this.x, this.y - 20);
  }
  
  hungry() {
    fill(0);
    text("feed me!", this.x, this.y - 20);
  }
  sick() {
    fill(0);
    text("I'm sick", this.x, this.y - 20);
  }
   
}

//egg extends tamagotchi 

//egg extends 