import ChessBoard from '../js/ChessBoard.js'

export default class BoardScene extends Phaser.Scene {
    constructor() {
        super('BoardScene')
    }

    preload() {
        this.load.svg('light-square', 'assets/white-square.svg', { scale: .75 });
        this.load.svg('dark-square', 'assets/green-square.svg', { scale: .75 });
    }

    create() {
        this.board = new ChessBoard(this, 0, 0);
    }
}