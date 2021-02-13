import ChessBoard from '../js/ChessBoard.js'
import ChessPiece from "../js/ChessPiece.js";

export default class BoardScene extends Phaser.Scene {
    constructor() {
        super('BoardScene')
    }

    preload() {
        this.load.svg('light-square', 'assets/white-square.svg', { scale: 1 });
        this.load.svg('dark-square', 'assets/green-square.svg', { scale: 1 });
        this.load.spritesheet('chess-pieces', 'assets/chess_pieces.svg', { frameWidth: 128, frameHeight: 128 });
    }

    create() {
        this.board = new ChessBoard(this, 0, 0);
        new ChessPiece(this, 64, 64, 0);
        new ChessPiece(this, 64, 64, 1);
        new ChessPiece(this, 64, 64, 7);
    }
}