class Game {
  screen: any;

  constructor() {
    this.screen = new Startscreen(this);
    this.gameLoop();
  }

  gameLoop() {
    this.screen.update();
    requestAnimationFrame(() => this.gameLoop());
  }

  emptyScreen() {
    let y = document.getElementsByTagName("foreground")[0];
    y.innerHTML = "";
  }

  showPlayScreen(screen: Playscreen) {
    this.screen = screen;
    this.screen.update();
  }

  showGameOver(screen: GameOver) {
    this.screen = screen;
    this.screen.update();
  }

  showStartScreen(screen: Startscreen) {
    this.screen = screen;
    this.screen.update();
  }

  showGameWon(screen: GameWon) {
    this.screen = screen;
    this.screen.update();
  }
}
