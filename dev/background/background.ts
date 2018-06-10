class background {
  private ground: Ground;
  private space: Space;

  constructor() {
    this.ground = new Ground();
    this.space = new Space();
  }

  public update() {
    this.ground.update();
    this.space.update();
  }
}
