/// <reference path="gameObject.ts"/>

class Stones extends GameObject {
  private speedX: number = 0;
  private color: number;

  constructor() {
    super(
      "infinitystones",
      Math.floor(Math.random() * (window.innerWidth + 10)),
      Math.floor(Math.random() * 450) + 1
    );

    this.speedX = -10;
    this.startRightStones();

    this.color = this.randomNumber(0, 500);
    this.div.style.webkitFilter = "hue-rotate(" + this.color + "deg)";
    this.div.style.filter = "hue-rotate(" + this.color + "deg)";
  }

  public update() {
    this.x += this.speedX;

    if (this.x > window.innerWidth) {
      this.startRightStones();
    }

    this.div.style.left = `${this.x}px`;
    this.div.style.top = `${this.y}px`;
  }

  private startRightStones() {
    this.x = this.x = this.div.getBoundingClientRect().width * 18;
  }
}
