class Button {
  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.r = 25;
  }
  show() {
    noStroke();
    fill(100,100,100);
    ellipse(this.x,this.y,this.r);
  }

  intersect(){
  //measure distance with mouse, if mouse is clicked within the shape of the button, then it will trigger one our of three functions   
  }
}