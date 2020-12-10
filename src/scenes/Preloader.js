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
    // Create loading bar
    this.createLoader();
    // Set path to where spritesheets are located
    this.load.setPath(`${this.URL}src/assets/images`);

    // Spritesheets - include only key and file-name
    this.load.spritesheet('hero', 'hero.png', {
      frameWidth: 16, // frame size
      frameHeight: 16,
      endFrame: 3,
      margin: 1,
      spacing: 2,
    });
    this.load.spritesheet('spider', 'spider.png', {
      frameWidth: 16, // frame size
      frameHeight: 16,
      endFrame: 3,
      margin: 1,
      spacing: 2,
    });

    this.load.spritesheet('octo', 'Run.png', {
      frameWidth: 16, // frame size
      frameHeight: 16,
      endFrame: 3,
      margin: 1,
      spacing: 2,
    });
  }


  create() {
    // this.scene.start('Menu');
  }

  createLoader() {
    // Title
    this.title = new Title(this, 
      this.CONFIG.centerX,
      75,
      'Loading Game....',
      'preload',
      0.5
      );
    // Progress text
    this.txt_progress = new Title(
      this,
      this.CONFIG.centerX,
      this.CONFIG.centerY-5,
      'Loading...',
      {x:0.5, y:1}

    );
    // Progress Bar
  }
}


export default Preloader;