
import Phaser from 'phaser';
import Generator from '../libs/Generator';

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'Game', active: false });
  }

  init() {
    this.CONFIG = this.sys.game.CONFIG;

    this.DEPTH = {
      floor: 0,
    };

    this.generator = new Generator(this);

    // Main flags
    this.allowInput = false;
    this.isPause = false;
    this.isGameover = false;

    // Camera
    this.camSpeed = {
      base: 1,
      current: 1,
      max: 1,
    };
  }

  preload() {


  }


  create() {
    // this.text = this.add.text(this.CONFIG.centerX, this.CONFIG.centerY, 'Menu');
    // this.text.setColor('#ffffff');
    // this.text.setOrigin(0.5);

    // Craete floor
    this.generator.setup();

    // Click to play text
  }

  update() {
    //   Camera moves down
    this.updateCamera();

    // Draw new floor tiles

    // Delete passed floor tiles
    this.generator.update();
  }

  //   Camera
  updateCamera() {
    // Scroll Camera
    this.cameras.main.setScroll(
      0,
      this.cameras.main.scrollY + this.camSpeed.current,
    );
  }

  setCamSpeed(speed) {
    this.camSpeed.base = speed;
    this.camSpeed.current = speed;
    this.camSpeed.current = Math.min(
      this.camSpeed.current,
      this.camSpeed.max,
    );
    this.camSpeed.current = Math.max(
      this.camSpeed.current,
      0,
    );
  }
}


export default GameScene;