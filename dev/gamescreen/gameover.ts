class GameOver {
  private game: Game;

  constructor(g: Game) {
    this.game = g;

    let y = document.getElementsByTagName("foreground")[0];

    let x = document.createElement("img");
    x.setAttribute("class", "thanosloses");
    x.setAttribute("src", "img/thanos-walkf.gif");
    y.appendChild(x);

    let a = document.createElement("START");
    document.body.appendChild(a);
    a.addEventListener("click", () => this.clicked());
    a.innerHTML = "GAME OVER, TRY AGAIN";
  }

  public update() {}

  private clicked() {
    this.game.emptyScreen();
    this.game.showStartScreen(new Startscreen(this.game));
  }
}
