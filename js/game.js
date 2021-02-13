import BoardScene from  '../js/BoardScene.js'

const config = {
    width: 768,
    height: 768,
    backgroundColor: '#333333',
    type: Phaser.AUTO,
    parent: 'game',
    scene: [BoardScene]
}

new Phaser.Game(config);
