import ChessBoardSquare from '../js/ChessBoardSquare.js'

export default class ChessBoard extends Phaser.GameObjects.Container {
    constructor(scene, x, y) {
        super(scene, x, y);
        this.#buildSquares();
        this.scene.add.existing(this);
    }

    #buildSquares() {
        this.squares = []
        for (let i = 0; i < 8; i++) {
            this.#buildRow(i);
        }
    }

    #buildRow(row) {
        for (let i = 0; i < 8; i++) {
            let square = new ChessBoardSquare(this.scene, row, i);
            this.squares.push(square);
            this.add(square);
        }
    }
}