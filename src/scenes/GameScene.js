import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'Game', active: false });
  }

  init() {
    this.CONFIG = this.sys.game.CONFIG;
  }

  preload() {


  }


  create() {
    // this.text = this.add.text(this.CONFIG.centerX, this.CONFIG.centerY, 'Menu');
    // this.text.setColor('#ffffff');
    // this.text.setOrigin(0.5);

    // Game title

    // Click to play text

  }

 
}


export default GameScene;