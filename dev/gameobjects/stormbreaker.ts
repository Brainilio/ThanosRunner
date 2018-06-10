/// <reference path="gameObject.ts"/>

class Stormbreaker extends GameObject {
  public speedX: number = 0;

  constructor() {
    super(
      "stormbreaker",
      Math.floor(Math.random() * (window.innerWidth + 3)),
      Math.floor(Math.random() * 450) + 1
    );

    this.speedX = -10;
    this.startLeft();
  }

  update() {
    this.x += this.speedX;

    if (this.x > window.innerWidth) {
      this.startLeft();
    }

    this.div.style.left = `${this.x}px`;
    this.div.style.top = `${this.y}px`;
  }

  private startLeft() {
    this.x = this.x = 1920;
  }
}
