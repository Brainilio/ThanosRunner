class Playscreen {
  private thanos: Thanos;
  private background: background;

  private lifeElement: HTMLElement;
  private stoneElement: HTMLElement;

  private life: number = 20;
  private stone: number = 0;

  private game: Game;

  private infinitystones: Stones[] = [];
  private stars: Star[] = [];
  private obstacle: Obstacle[] = [];

  private level: number = 0.0025;
  private tree: number = 0.0025;
  private infinitychance: number = 0.001;

  constructor(g: Game) {
    this.game = g;

    this.lifeElement = document.createElement("life");
    document.body.appendChild(this.lifeElement);
    this.lifeElement.innerHTML = "Lives:  " + this.life;

    this.stoneElement = document.createElement("stonescore");
    document.body.appendChild(this.stoneElement);
    this.stoneElement.innerHTML = "Stones collected: 0 out of 6";

    this.thanos = new Thanos();
    this.background = new background();
  }

  public update() {
    if (Math.random() < this.infinitychance) {
      this.infinitystones.push(new Stones());
    }

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
        this.lifeElement.innerHTML = "Lives:  " + this.life;
        b.dead();
      }
      b.update();
    }

    if (this.life == 0) {
      this.game.emptyScreen();
      this.game.showGameOver(new GameOver(this.game));
    }

    for (let e of this.obstacle) {
      if (this.checkCollision(this.thanos.getRectangle(), e.getRectangle())) {
        this.life -= 1;
        this.lifeElement.innerHTML = "Lives: " + this.life;
        e.dead();
      }
      e.update();
    }

    for (let g of this.infinitystones) {
      if (this.checkCollision(this.thanos.getRectangle(), g.getRectangle())) {
        this.stone += 1;
        this.stoneElement.innerHTML =
          "Stones collected: " + this.stone + " out of 6.";
        g.dead();
      }
      g.update();
    }

    this.thanos.update();
    this.background.update();
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
