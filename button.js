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
  clicked(){
    let d = dist(mouseX,mouseY,this.x,this.y);
    if(d < this.r)
    console.log("You clicked!");
    //sound play 
  }   
}

class ButtonLeft extends Button{
  constructor(x,y,r){
    super(x,y,r)
  }
  
  triggered(){
    let d = dist(mouseX,mouseY,this.x,this.y);
    if(d < this.r){
      console.log("You clicked on Left button!");
    mode = 1
    }
  }
}

class ButtonMiddle extends Button{
  constructor(x,y,r){
    super(x,y,r)
  }
  
  triggered(){
    let d = dist(mouseX,mouseY,this.x,this.y);
    if(d < this.r)
    {console.log("You clicked on Middle button!");
    mode = 2
  }
}}

class ButtonRight extends Button{
  constructor(x,y,r){
    super(x,y,r)
  }
  
  triggered(){
    let d = dist(mouseX,mouseY,this.x,this.y);
    if(d < this.r)
    {console.log("You clicked on Right button!");
    mode = 0
  }
}}
