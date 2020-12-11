
import Phaser from 'phaser';
import Entity from '../libs/Entity';
import Generator from '../libs/Generator';
import Player from '../libs/Player';

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'Game', active: false });
  }

  init() {
    this.CONFIG = this.sys.game.CONFIG;

    this.DEPTH = {
      floor: 0,
      player: 1,
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

    // Player
    this.createPlayer();
  }

  update() {
    //   Camera moves down
    this.updateCamera();

    // Draw new floor tiles

    // Delete passed floor tiles
    this.generator.update();

    // Move player downward
    this.player.setSpritesPos(this.player.x, this.player.y + this.camSpeed.current);
  }

  // Player Sprite
  createPlayer() {
    this.player = new Player(
      this,
      this.CONFIG.centerX,
      this.CONFIG.centerY,
      'hero',
    );
    this.player.setDepth(this.DEPTH.player);
    this.player.startNewAnim('walk');
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