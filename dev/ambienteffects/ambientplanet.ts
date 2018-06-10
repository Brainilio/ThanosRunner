/// <reference path="../gameobjects/gameObject.ts"/>

class Planet extends GameObject {
  private xspeed: number = 0;
  private color: number;

  constructor() {
    super("planet", 50, Math.floor(Math.random() * 450) + 1);
    this.xspeed = -10;
    this.startRight();

    this.color = this.randomNumber(0, 500);
    this.div.style.webkitFilter = "hue-rotate(" + this.color + "deg)";
    this.div.style.filter = "hue-rotate(" + this.color + "deg)";
  }

  public update() {
    this.x += this.xspeed;

    if (this.x > window.innerWidth) {
      this.startRight();
    }

    this.div.style.left = `${this.x}px`;
    this.div.style.top = `${this.y}px`;
  }

  private startRight() {
    this.x = this.x = this.div.getBoundingClientRect().width * 18;
  }
}
