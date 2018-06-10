class GameOver {
  private element: HTMLElement;
  private game: Game;

  constructor(g: Game) {
    this.game = g;

    let x = document.createElement("img");
    x.setAttribute("class", "thanosloses");
    x.setAttribute("src", "img/thanos-walkf.gif");
    document.body.appendChild(x);

    this.element = document.createElement("START");
    document.body.appendChild(this.element);
    this.element.addEventListener("click", () => this.clicked());
    this.element.innerHTML = "GAME OVER, TRY AGAIN";
  }

  public update() {}

  private clicked() {
    this.game.emptyScreen();
    this.game.showStartScreen(new Startscreen(this.game));
  }
}
