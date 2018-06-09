/// <reference path="../gameobjects/gameObject.ts"/>

class Stones extends GameObject {
  public speedX: number = 0;
  public color: number;

  constructor() {
    super(
      "blue",
      Math.floor(Math.random() * (window.innerWidth + 3)),
      Math.floor(Math.random() * 450) + 1
    );

    this.speedX = -10;
    this.startLeft();

    this.color = this.randomNumber(0, 360);
    this.div.style.webkitFilter = "hue-rotate(" + this.color + "deg)";
    this.div.style.filter = "hue-rotate(" + this.color + "deg)";
  }

  update() {
    this.x += this.speedX;

    if (this.x > window.innerWidth) {
      this.startLeft();
    }

    this.div.style.left = `${this.x}px`;
    this.div.style.top = `${this.y}px`;
  }

  public dead() {
    this.div.remove();
  }

  private startLeft() {
    this.x = this.x = 1920;
  }

  public getRectangle() {
    return this.div.getBoundingClientRect();
  }
}
