import UIBoardScene from  "./ui/UIBoardScene.js";

const config = {
  width: 768,
  height: 768,
  backgroundColor: '#333333',
  type: Phaser.AUTO,
  parent: 'game',
  scene: [UIBoardScene],
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'phaser-example',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 768,
    height: 768
  }
}

new Phaser.Game(config);
