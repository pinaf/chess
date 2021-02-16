import UIChessBoardSquare from "./UIChessBoardSquare.js";

export default class UIChessBoard extends Phaser.GameObjects.Container {

    private squares: UIChessBoardSquare[];

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);
        this.buildSquares();
        this.scene.add.existing(this);
    }

    private buildSquares() {
        this.squares = []
        for (let i = 0; i < 8; i++) {
            this.buildRow(i);
        }
    }

    private buildRow(row) {
        for (let i = 0; i < 8; i++) {
            let square = new UIChessBoardSquare(this.scene, row, i);
            this.squares.push(square);
            this.add(square);
        }
    }
}