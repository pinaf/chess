export default class UIChessPiece extends Phaser.GameObjects.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, image: number) {
    super(scene, x, y, 'chess-pieces', image)
    this.scene.add.existing(this);
    this.buildInteractions();
  }

  private buildInteractions() {
    this.setInteractive();
    this.scene.input.setDraggable(this);
    this.on('drag', function (pointer, dragX, dragY) {
      this.x = dragX;
      this.y = dragY;
    });
    this.on('drop', function (pointer, target) {
      this.x = target.x;
      this.y = target.y;
    });
  }
}