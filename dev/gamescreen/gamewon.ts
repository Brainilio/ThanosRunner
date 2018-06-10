class GameWon {
  private element: HTMLElement;
  private game: Game;

  constructor(g: Game) {
    this.game = g;

    this.element = document.createElement("START");
    document.body.appendChild(this.element);
    this.element.addEventListener("click", () => this.clicked());
    this.element.innerHTML = "You WON! Want to go at it again?";
  }

  public update() {}

  private clicked() {
    this.game.emptyScreen();
    this.game.showStartScreen(new Startscreen(this.game));
  }
}
