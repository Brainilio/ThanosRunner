class Startscreen {
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

    var a = document.createElement("START");
    document.body.appendChild(a);
    a.addEventListener("click", () => this.clicked());
    a.innerHTML = "HELP THANOS GET THE INFINITY STONES";

    var b = document.createElement("startsong");
    document.body.appendChild(b);
  }

  public update() {}

  private clicked() {
    this.game.emptyScreen();
    this.game.showPlayScreen(new Playscreen(this.game));
  }
}
