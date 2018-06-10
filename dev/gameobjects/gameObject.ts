/// <reference path="../gameobjects/animation.ts"/>

class GameObject extends SpriteAnimation {
  protected x: number;
  protected y: number;
  protected div: HTMLElement;

  constructor(el: any, x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
    let a = document.getElementsByTagName("foreground")[0];
    this.div = document.createElement(el);
    a.appendChild(this.div);
  }

  public update() {
    this.div.style.transform = `translate(${this.x}px, ${this.y}px`;
  }

  public randomNumber(min: number, max: number) {
    let a: number = Math.floor(Math.random() * (max - min + 3)) + min;
    return a;
  }

  public Spritemove(b: number) {
    this.speedcounter++;

    let framerate = 8;
    if (this.speedcounter % framerate == 0) {
      this.frame++;
    }
    if (this.frame >= this.frames) this.frame = 1;

    let pos = 0 - this.frame * this.frameWidth;
    this.div.style.backgroundPosition = pos + `px ${b}px`;
  }

  public getRectangle() {
    return this.div.getBoundingClientRect();
  }

  public dead() {
    this.div.remove();
  }
}
