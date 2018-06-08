/// <reference path="../gameobjects/gameObject.ts"/>

class Stones extends GameObject {
  public speedX: number;
  public color: number;

  constructor() {
    super(
      "blue",
      Math.random() * window.innerWidth,
      Math.random() * window.innerHeight
    );

    this.speedX = -3 - Math.random() * 6;
    this.color = this.randomNumber(0, 360);
    this.div.style.webkitFilter = "hue-rotate(" + this.color + "deg)";
    this.div.style.filter = "hue-rotate(" + this.color + "deg)";
  }

  update() {
    this.x += this.speedX;

    if (this.y < 450) {
      this.dead();
    }

    this.div.style.left = `${this.x}px`;
    this.div.style.top = `${this.y}px`;
  }

  public dead() {
    this.div.remove();
  }
}
