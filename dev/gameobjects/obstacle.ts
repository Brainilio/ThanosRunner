class Obstacle extends GameObject {
  private xspeed: number = 0;

  constructor() {
    super(
      "obstacle",
      Math.floor(Math.random() * (window.innerWidth - 0 + 3)),
      400
    );
    this.xspeed = Math.floor(Math.random() * Math.floor(-15));
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
    this.x = this.x = this.div.getBoundingClientRect().width * 2;
  }

  public getRectangle() {
    return this.div.getBoundingClientRect();
  }

  public dead() {
    this.div.remove();
  }
}
