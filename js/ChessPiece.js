export default class ChessPiece extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, image) {
        super(scene, x, y, 'chess-pieces', image)
        this.scene.add.existing(this);
        this.#buildInteractions();
    }

    #buildInteractions() {
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