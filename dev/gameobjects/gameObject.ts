class GameObject {
  protected x: number;
  protected y: number;
  protected div: HTMLElement;

  constructor(el: any, x: number, y: number) {
    this.x = x;
    this.y = y;
    this.div = document.createElement(el);
    document.body.appendChild(this.div);
  }

  update() {
    this.div.style.transform = `translate(${this.x}px, ${this.y}px`;
  }

  public randomNumber(min: number, max: number) {
    let a: number = Math.floor(Math.random() * (max - min + 3)) + min;
    return a;
  }
}
