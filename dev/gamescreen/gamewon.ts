class GameWon {
  private game: Game;

  constructor(g: Game) {
    this.game = g;

    let x = document.createElement("img");
    x.setAttribute("class", "thanoswin");
    x.setAttribute("src", "img/Thanos-wins.gif");
    document.body.appendChild(x);

    let h = document.createElement("START");
    h.addEventListener("click", () => this.clicked());
    h.innerHTML = "You WON! Want to go at it again?";
    document.body.appendChild(h);
  }

  public update() {}

  private clicked() {
    this.game.emptyScreen();
    this.game.showStartScreen(new Startscreen(this.game));
  }
}
