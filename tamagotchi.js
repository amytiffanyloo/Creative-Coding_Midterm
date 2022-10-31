let tmg;
let babytmg;
let babyfood;
let adultfood;
let hungrybaby;
let hungrytmg;
let xpos = 0;
let ypos = 0;

//using function I made last time to create heart icons to represent hunger level
function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

//class of adult tamagotchi
class Tamagotchi {
  constructor(x, y) {
    this.x = 190;
    this.y = 220;
  }

  preload() {
    tmg = loadImage("adult.png");
    adultfood = loadImage("adultfood.png");
    hungrytmg = loadImage("hungrytmg.png");
  }

  //two displays of adult tamagotchi, depending on its level of hunger
  show() {
    if (hungerLevel >= 40) {
      image(tmg, 80 + sin(xpos) * 15, 80 + sin(ypos) * 10, 300, 300);
      xpos += 0.03;
      ypos += 0.06;
    } else if (hungerLevel < 40) {
      image(hungrytmg, 90 + sin(xpos) * 15, 85 + sin(ypos) * 10, 310, 310);
      xpos += 0.03;
      ypos += 0.06;
    }
  }

  //tamagotchi jumps in happiness when it is fed. The food is also displayed next to it
  fed() {
    image(tmg, 50, 60 + sin(ypos) * 20, 350, 350);
    ypos += 0.1;
    image(adultfood, 190, 100 + sin(ypos) * 20, 180, 180);
    ypos += 0.1;
  }

  //below are heart icons displayed depending on its hunger level
  default() {
    fill(200, 60, 50);
    heart(95, 80, 20);
    heart(125, 80, 20);
    heart(155, 80, 20);
    heart(185, 80, 20);
  }
  hungry1() {
    fill(200, 60, 50);
    heart(95, 80, 20);
    heart(125, 80, 20);
    heart(155, 80, 20);
  }
  hungry2() {
    fill(200, 60, 50);
    heart(95, 80, 20);
    heart(125, 80, 20);
  }
  hungry3() {
    fill(200, 60, 50);
    heart(95, 80, 20);
  }
}

//class of baby tamagotchi that inherits from adult tamagotchi
class babyTamagotchi extends Tamagotchi {
  constructor(x, y) {
    super(x, y);
  }
  preload() {
    babytmg = loadImage("baby.png");
    babyfood = loadImage("babyfood.png");
    hungrybaby = loadImage("hungrybaby.png");
  }

  //there are also two displays of baby tamagotchi depending on its hunger level
  show() {
    if (hungerLevel >= 40) {
      image(babytmg, 90 + sin(xpos) * 15, 130 + sin(ypos) * 10, 220, 220);
      xpos += 0.03;
      ypos += 0.06;
    } else if (hungerLevel < 40) {
      image(hungrybaby, 110 + sin(xpos) * 15, 130 + sin(ypos) * 10, 220, 220);
      xpos += 0.03;
      ypos += 0.06;
    }
  }
//baby tamagotchi also jumps in delight when it is fed. Its food is also displayed next to it. 
  fed() {
    image(babytmg, 80, 110 + sin(ypos) * 20, 250, 250);
    ypos += 0.1;
    image(babyfood, 200, 110 + sin(ypos) * 20, 120, 120);
    ypos += 0.1;
  }
}
