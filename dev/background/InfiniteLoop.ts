class infiniteLoop {
  protected x: number;
  protected y: number;
  protected div: HTMLElement;
  protected xSpeed: number;

  constructor(el: any, x: number, y: number) {
    this.xSpeed = 4;
    this.x = x;
    this.y = y;
    let u = document.getElementsByTagName("foreground")[0];
    this.div = document.createElement(el);
    u.appendChild(this.div);
  }

  public update() {
    this.Loop();
  }

  private Loop() {
    this.x -= this.xSpeed;
    this.div.style.top = `translate(${this.y}px)`;
    this.div.style.backgroundPosition = this.x + `px 500px`;
  }
}
