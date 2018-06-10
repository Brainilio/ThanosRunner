class Obstacle extends GameObject {
  private xspeed: number = 0;

  constructor() {
    super("obstacle", 50, 450);
    this.xspeed = Math.floor(Math.random() * Math.floor(15));
    this.frame = 0;
    this.startRight();
  }

  public update() {
    this.x += this.xspeed;

    this.Spritemove(-555);

    if (this.x > window.innerWidth) {
      this.dead();
    }

    this.div.style.left = `${this.x}px`;
    this.div.style.top = `${this.y}px`;
  }

  private startRight() {
    this.x = this.x = this.div.getBoundingClientRect().width * -2;
  }
}
