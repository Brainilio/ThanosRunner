class Startscreen {
  private element: HTMLElement;
  private game: Game;

  constructor(g: Game) {
    this.game = g;

    var x = document.createElement("IMG");
    x.setAttribute("src", "img/thanos1.png");
    document.body.appendChild(x);

    var y = document.createElement("P");
    y.setAttribute("class", "textbegin");
    y.innerHTML =
      "Sup. 43/m/Titan. Not tryna catch feelings, just stones. Let's chill.";
    document.body.appendChild(y);

    this.element = document.createElement("START");
    document.body.appendChild(this.element);
    this.element.addEventListener("click", () => this.clicked());
    this.element.innerHTML = "HELP THANOS GET THE INFINITY STONES";
  }

  public update() {}

  private clicked() {
    this.game.emptyScreen();
    this.game.showPlayScreen(new Playscreen(this.game));
  }
}
