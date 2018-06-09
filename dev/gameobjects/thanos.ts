/// <reference path="GameObject.ts"/>
class Thanos extends GameObject {
  protected speed: number = 0;

  private leftkey: number;
  private rightkey: number;
  private upkey: number;

  public leftSpeed: number = 0;
  private rightSpeed: number = 0;
  private upSpeed: number = 0;

  constructor() {
    super("thanos", 450, 450);

    this.frame = 0;

    this.leftkey = 68;
    this.rightkey = 65;
    this.upkey = 32;

    window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
    window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));

    this.update();
  }

  private onKeyDown(e: KeyboardEvent): void {
    switch (e.keyCode) {
      case this.rightkey:
        this.leftSpeed = 5;
        break;
      case this.leftkey:
        this.rightSpeed = 5;
        break;
      case this.upkey:
        this.upSpeed = 5;
    }
  }

  private onKeyUp(e: KeyboardEvent): void {
    switch (e.keyCode) {
      case this.rightkey:
        this.leftSpeed = 0;
        break;
      case this.leftkey:
        this.rightSpeed = 0;
        break;
      case this.upkey:
        this.upSpeed = -5;
    }
  }

  public update() {
    this.y = this.y - this.upSpeed;
    this.x = this.x - this.leftSpeed + this.rightSpeed;

    if (this.y > 450) {
      this.y = 450;
      this.upSpeed = 0;
    }

    if (this.y < 0) {
      this.upSpeed = -5;
    }

    if (this.x > 1850) {
      this.rightSpeed = -1;
    }

    if (this.x < 0) {
      this.x = 0;
    }

    console.log(this.x);

    this.Spritemove(-555);

    this.div.style.left = `${this.x}px`;
    this.div.style.top = `${this.y}px`;
  }

  public getRectangle() {
    return this.div.getBoundingClientRect();
  }
}
