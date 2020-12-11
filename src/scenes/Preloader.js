import Phaser from 'phaser';
import Title from './Title';


// The Scene that will load all the assets of the game
class Preloader extends Phaser.Scene {
  constructor() {
    super({ key: 'Preload', active: false });
  }

  init() {
    this.URL = this.sys.game.URL;
    this.CONFIG = this.sys.game.CONFIG;
  }

  preload() {
    // Load Background
    this.bg = this.add.graphics({ x: 0, y: 0 });
    this.bg.fillStyle('0xD6CDB0', 1);
    this.bg.fillRect(0, 0, this.CONFIG.width, this.CONFIG.height);
    // Create loading bar
    this.createLoader();
    // Set path to where spritesheets are located
    this.load.setPath(`${this.URL}src/assets/images`);

    // Spritesheets - include only key and file-name
    this.load.spritesheet('tileset', 'fantasy-tileset.png', {
      frameWidth: 32, // frame size
      frameHeight: 32,
      endFrame: 19,
      margin: 2,
      spacing: 4,
    });
    this.load.spritesheet('hero', 'hero.png', {
      frameWidth: 32, // frame size
      frameHeight: 32,
      endFrame: 3,
      margin: 2,
      spacing: 4,
    });
    this.load.spritesheet('spider', 'spider.png', {
      frameWidth: 32, // frame size
      frameHeight: 32,
      endFrame: 3,
      margin: 2,
      spacing: 4,
    });

    this.load.spritesheet('octo', 'Run.png', {
      frameWidth: 32, // frame size
      frameHeight: 32,
      endFrame: 3,
      margin: 2,
      spacing: 4,
    });
  }


  create() {
    // Load Menu
    this.time.addEvent({
      delay: 2000,
      callback: () => { this.scene.start('Menu'); },
      callbackScope: this,


    });
  }

  createLoader() {
    // Title
    this.title = new Title(this,
      this.CONFIG.centerX,
      75,
      'Loading Game....',
      'preload',
      0.5);
    // Progress text
    this.txtProgress = new Title(
      this,
      this.CONFIG.centerX,
      this.CONFIG.centerY - 5,
      'Loading...',
      { x: 0.5, y: 1 },

    );
    // Progress Bar
    const x = 10;
    const y = this.CONFIG.centerY + 5;
    this.border = this.add.graphics({ x, y });

    this.progress = this.add.graphics({ x, y });
    // Callback
    this.load.on('progress', this.onProgress, this);
  }


  onProgress(value) {
    // Width of progress bar
    const w = this.CONFIG.width - (2 * this.progress.x);
    const h = 18;
    this.progress.clear();
    this.progress.fillStyle('0xFFFFFF', 1);
    this.progress.fillRect(0, 0, w * value, h);
    this.border.clear();
    this.border.lineStyle(2, 0x2E67E3, 1);
    this.border.strokeRect(0, 0, w * value, h);
    // Percentage in progress text
    this.txtProgress.setText(`${Math.round(value * 100)}%`);
  }
}


export default Preloader;