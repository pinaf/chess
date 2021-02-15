import UIChessBoard from './UIChessBoard.js'
import UIChessPiece from "./UIChessPiece.js";

export default class UIBoardScene extends Phaser.Scene {

    private board: UIChessBoard;

    constructor() {
        super('UIBoardScene')
    }

    preload() {
        this.load.svg('light-square', 'assets/white-square.svg', { scale: 1 });
        this.load.svg('dark-square', 'assets/green-square.svg', { scale: 1 });
        this.load.spritesheet('chess-pieces', 'assets/chess_pieces.svg', { frameWidth: 128, frameHeight: 128 });
    }

    create() {
        this.board = new UIChessBoard(this, 0, 0);
        new UIChessPiece(this, 64, 64, 0);
        new UIChessPiece(this, 64, 64, 1);
        new UIChessPiece(this, 64, 64, 7);
    }
}