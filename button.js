//create class of buttons with basic shape and position on sketch
class Button {
  constructor(x) {
    this.x = x;
    this.y = 350;
    this.r = 25;
    this.click = false;
  }
  show() {
    noStroke();
    fill(100,100,100);
    ellipse(this.x,this.y,this.r);
  }
}

//creating three different buttons that trigger different screens when mouse is pressed inside the button
class ButtonLeft extends Button{
  constructor(x,y,r){
    super(x,y,r)
  }
  
  clicked(){
    let d = dist(mouseX,mouseY,this.x,this.y);
    if(d < this.r){
    mode = 1
    }
  }
}

class ButtonMiddle extends Button{
  constructor(x,y,r){
    super(x,y,r)
  }
  
  clicked(){
    let d = dist(mouseX,mouseY,this.x,this.y);
    if(d < this.r)
    {
    mode = 0
  }      
}}

//the right button has a feeding function, where each click will decrease level of hunger
class ButtonRight extends Button{
  constructor(x,y,r){
    super(x,y,r)
  }
  
  clicked(){
    let d = dist(mouseX,mouseY,this.x,this.y);
    if(d < this.r)
    {mode = 2
    happinessLevel++
    fed_sound.play();
    if (hungerLevel > 40) {
      hungerLevel = 50;
    } else if(hungerLevel >30){
      hungerLevel = 45
    } else if(hungerLevel >20){
      hungerLevel = 35
    }else if(hungerLevel <=20 ){
      hungerLevel = 25
    }
  }
}
}


