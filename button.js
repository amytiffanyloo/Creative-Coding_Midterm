class Button {
  constructor(x) {
    this.x = x;
    this.y = 350;
    this.r = 25;
    this.red = 100
    this.green = 100
    this.blue = 100
  }
  show() {
    noStroke();
    fill(this.red,this.blue,this.g);
    ellipse(this.x,this.y,this.r);
  }
    
  clicked(){
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 25){
    this.r = 35
    this.red = 200
    this.green = 100
    this.blue = 200
    //sound play
    }    
}

}

// class ButtonLeft extends Button{
//   constructor(){
//     super(x,y,r)
//   }
//   trigger(){
    
//   }

// }
