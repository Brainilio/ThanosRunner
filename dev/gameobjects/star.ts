/// <reference path="gameObject.ts"/>

class Star extends GameObject {
  private speedX: number;
  private speedY: number;

  constructor() {
    super("star", Math.random() * window.innerWidth, 0);

    this.speedX = -3 - Math.random() * 6;
    this.speedY = Math.random() * 8;
  }

  public update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (
      this.y + this.getRectangle().height > window.innerHeight ||
      this.y > 600
    ) {
      this.startLeft();
      this.dead();
    }

    if (this.x > window.innerWidth) {
      this.startLeft();
    }

    this.div.style.left = `${this.x}px`;
    this.div.style.top = `${this.y}px`;
  }

  private startLeft() {
    this.x = this.x = this.div.getBoundingClientRect().width * -1;
    this.y =
      100 +
      Math.random() *
        (window.innerHeight - 100 - this.div.getBoundingClientRect().height);
  }
}
