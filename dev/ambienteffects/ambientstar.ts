/// <reference path="../gameobjects/gameObject.ts"/>

class Spaceship extends GameObject {
  private xspeed: number = 0;

  constructor() {
    super("spaceship", 50, Math.floor(Math.random() * 450) + 1);
    this.xspeed = -10;
    this.startRight();
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
