export default class ChessBoardSquare extends Phaser.GameObjects.Sprite {
    constructor(scene, row, col) {
        let L = 128;
        let parity = (row + col) % 2;
        super(scene, L * (row + (1/2)), L * (col + (1/2)), (parity === 0 ? 'light-square' : 'dark-square'));
        this.#buildInteractions();
    }

    #buildInteractions() {
        this.setInteractive();
        this.input.dropZone = true;
        this.on('pointerover', function () {
            this.setTint(0xff0000);
        });
        this.on('pointerout', function () {
            this.clearTint();
        });
    }
}