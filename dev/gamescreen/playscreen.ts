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
  private SpaceShip: Spaceship[] = [];
  private Planets: Planet[] = [];
  private breaker: Stormbreaker[] = [];

  private starchance: number = 0.0040;
  private obstaclechance: number = 0.0035;
  private infinitychance: number = 0.0008;
  private spaceShipchance: number = 0.0002;
  private planetChance: number = 0.0003;
  private breakerChance: number = 0;

  constructor(g: Game) {
    this.game = g;

    let y = document.getElementsByTagName("foreground")[0];

    this.lifeElement = document.createElement("life");
    y.appendChild(this.lifeElement);
    this.lifeElement.innerHTML = "Lives:  " + this.life;

    this.stoneElement = document.createElement("stonescore");
    y.appendChild(this.stoneElement);
    this.stoneElement.innerHTML = "Stones collected: 0 out of 6";

    this.thanos = new Thanos();
    this.background = new background();
  }

  public update() {
    if (Math.random() < this.infinitychance) {
      this.infinitystones.push(new Stones());
    }

    if (Math.random() < this.obstaclechance) {
      this.obstacle.push(new Obstacle());
    }

    if (Math.random() < this.starchance) {
      this.stars.push(new Star());
    }

    if (Math.random() < this.breakerChance) {
      this.breaker.push(new Stormbreaker());
    }

    if (Math.random() < this.spaceShipchance) {
      this.SpaceShip.push(new Spaceship());
    }

    if (Math.random() < this.planetChance) {
      this.Planets.push(new Planet());
    }

    //pushen van obstacles, sterren & infinity stones naar 't scherm toe met een random getal

    for (let b of this.stars) {
      let hit = this.checkCollision(
        this.thanos.getRectangle(),
        b.getRectangle()
      );

      if (hit) {
        this.life -= 2;
        this.lifeElement.innerHTML = "Lives:  " + this.life;
        b.dead();
      }
      b.update();
    }

    //als stars thanos hit dan gaan er 2 levens af

    for (let e of this.obstacle) {
      if (this.checkCollision(this.thanos.getRectangle(), e.getRectangle())) {
        this.life -= 1;
        this.lifeElement.innerHTML = "Lives: " + this.life;
        e.dead();
      }
      e.update();
    }

    //als de hulk thanos hit dan gaat er maar 1 leven af 

    for (let k of this.breaker) {
      if (this.checkCollision(this.thanos.getRectangle(), k.getRectangle())) {
        this.life -= 5;
        this.lifeElement.innerHTML = "Lives: " + this.life;
        k.dead();
      }
      k.update();
    }

    //als stormbreaker thanos hit dan gaan er 5 levens af

    if (this.life < 0) {
      this.game.emptyScreen();
      this.game.showGameOver(new GameOver(this.game));
    }

    //Als je 0 levens hebt ben je dood

    for (let g of this.infinitystones) {
      if (this.checkCollision(this.thanos.getRectangle(), g.getRectangle())) {
        this.stone += 1;
        this.obstaclechance += 0.005;
        this.breakerChance += 0.001;

        this.stoneElement.innerHTML =
          "Stones collected: " + this.stone + " out of 6.";
        g.dead();
      }
      g.update();
    }

    //als je een infinity stone pakt dan komt er 1 bij

    if (this.stone > 6) {
      this.game.emptyScreen();
      this.game.showGameWon(new GameWon(this.game));
    }

    // Als je 6 stenen hebt gekregen dan heb je gewonnen

    for (let h of this.SpaceShip) {
      h.update();
    }

    for (let i of this.Planets) {
      i.update();
    }

    //updaten van ambient objects

    this.thanos.update();
    this.background.update();

    //updaten van thanos & background scroll
  }

  private checkCollision(a: ClientRect, b: ClientRect): boolean {
    return (
      a.left <= b.right &&
      b.left <= a.right &&
      a.top <= b.bottom &&
      b.top <= a.bottom
    );
  }
}

window.addEventListener("load", () => new Game());
