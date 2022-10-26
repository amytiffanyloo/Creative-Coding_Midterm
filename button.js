class Button {
  constructor(x) {
    this.x = x;
    this.y = 350;
    this.d = 25;
    this.click = false;
  }
  show() {
    noStroke();
    var diam = this.d;
		if(this.click){
			diam = this.d * 1.5;
		}
    fill(100,100,100);
    ellipse(this.x,this.y,this.d);
    this.click = false;
  }

  
  clicked(){
    if(this.over()){
      this.click=true;
    }
    // this.r = 35
    
    //sound play  
}
}

// class ButtonLeft extends Button{
//   constructor(){
//     super(x,y,r)
//   }
//   trigger(){
    
//   }

// }
