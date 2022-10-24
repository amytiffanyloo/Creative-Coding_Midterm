let tamagotchi;

class Tamagotchi {
  constructor() {
    this.x = 100;
    this.y = 160;
    this.w = 100
    this.h = 100
  }
  
  show(){
  tamagotchi = loadImage('tamagotchi.png');
  image(tamagotchi,this.x, this.y,tamagotchi.w, tamagotchi.h);
  } 
  move(){
  //tamagotchi will move up and down, left and right 
  }
  
  transform(){
  //if happiness level of tamagotchi reaches a certain level, then it will transform into next stage
  }
  
  status(){
    //if hunger level is x amount, then a message will appear
    //if hunger level is y amount, then a message will appear
  }
}