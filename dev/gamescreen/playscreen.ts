class Playscreen {
  private thanos: Thanos;
  private background: background;
  private scoreElement: HTMLElement;
  private lifeElement: HTMLElement;
  private stoneElement: HTMLElement;

  //private stonescore: number = 0;
  public score: number = 125;
  private life: number = 10;

  private game: Game;

  private infinitystones: Stones;
  private stars: Star[] = [];
  private obstacle: Obstacle[] = [];

  private level: number = 0.000000001;
  private tree: number = 0.0000000000000000000025;

  constructor(g: Game) {
    this.game = g;

    this.lifeElement = document.createElement("life");
    document.body.appendChild(this.lifeElement);
    this.lifeElement.innerHTML = "Life: 10 ";

    this.scoreElement = document.createElement("score");
    document.body.appendChild(this.scoreElement);
    this.scoreElement.innerHTML = "Score: 0 ";

    this.stoneElement = document.createElement("stonescore");
    document.body.appendChild(this.stoneElement);
    this.stoneElement.innerHTML = "Stones collected: 0 ";

    this.thanos = new Thanos();
    this.background = new background();
    this.infinitystones = new Stones();
  }

  public update() {
    if (Math.random() < this.tree) {
      this.obstacle.push(new Obstacle());
    }

    if (Math.random() < this.level) {
      this.stars.push(new Star());
    }

    for (let b of this.stars) {
      let hit = this.checkCollision(
        this.thanos.getRectangle(),
        b.getRectangle()
      );

      if (hit) {
        this.life -= 1;
        this.lifeElement.innerHTML = "Life  " + this.life;
        b.dead();
      }
      b.update();

      if (this.life == 0) {
        this.game.emptyScreen();
        this.game.showGameOver(new GameOver(this.game));
      }
    }

    for (let e of this.obstacle) {
      if (this.checkCollision(this.thanos.getRectangle(), e.getRectangle())) {
        this.score -= 20;
        this.lifeElement.innerHTML = "Score: " + this.life;
        e.dead();
      }
      e.update();
    }

    this.thanos.update();
    this.background.update();
    this.infinitystones.update();
  }

  public checkCollision(a: ClientRect, b: ClientRect): boolean {
    return (
      a.left <= b.right &&
      b.left <= a.right &&
      a.top <= b.bottom &&
      b.top <= a.bottom
    );
  }
}

window.addEventListener("load", () => new Game());
