class Startscreen {
  private game: Game;

  constructor(g: Game) {
    this.game = g;

    let h = document.getElementsByTagName("foreground")[0];

    let j = document.getElementsByTagName("background")[0];

    var x = document.createElement("IMG");
    x.setAttribute("src", "img/thanos1.png");
    h.appendChild(x);

    var y = document.createElement("P");
    y.setAttribute("class", "textbegin");
    y.innerHTML =
      "Sup. 43/m/Titan. Not tryna catch feelings, just stones. Let's chill.";
    h.appendChild(y);

    var a = document.createElement("START");
    h.appendChild(a);
    a.addEventListener("click", () => this.clicked());
    a.innerHTML = "HELP THANOS GET THE INFINITY STONES";

    var b = document.createElement("startsong");
    j.appendChild(b);
  }

  public update() {}

  private clicked() {
    this.game.emptyScreen();
    this.game.showPlayScreen(new Playscreen(this.game));
  }
}
