
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
      ui:2
    };

    this.generator = new Generator(this);

    // Main flags
    this.allowInput = false;
    this.isPause = false;
    this.isGameover = false;

    // Controls
    this.isHolding={
      left:false,
      right:false,
      direction:false,
    }

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
    

    // Craete floor
    this.generator.setup();

    // Player
    this.createPlayer();

    // Controls
    this.createControls()

    // Start the game
    this.allowInput=true
    this.isPause=false
    this.isGameover=false
  }

  update() {
    //   Camera moves down
    this.updateCamera();

    // Draw new floor tiles

    // Delete passed floor tiles
    this.generator.update();

    // Move player downward
    this.player.setSpritesPos(this.player.x, this.player.y + this.camSpeed.current);

    // Move player sideways
    if (this.isHolding.direction==='left') {
       this.player.setSpritesPos(this.player.x-1, this.player.y);

      
    }else if(this.isHolding.direction==='right'){
       this.player.setSpritesPos(this.player.x+1, this.player.y);


    }
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

  createControls(){
    // Create zones for input
    let w = 0.45 * this.CONFIG.width
    let h = this.CONFIG.height

    this.zoneLeft = this.add.zone(0,0,w,h)
    this.zoneLeft.setOrigin(0,0)
    this.zoneLeft.setDepth(this.DEPTH.ui)
    this.zoneLeft.setScrollFactor(0)

    this.zoneRight = this.add.zone(this.CONFIG.width,0,w,h)
    this.zoneRight.setOrigin(1,0)
    this.zoneRight.setDepth(this.DEPTH.ui)
    this.zoneRight.setScrollFactor(0)

    // let debug = this.add.graphics({x:0,y:0})
    // debug.fillStyle('0x000000',0.5)
    // debug.fillRect(0,0,w,h)
    // debug.setScrollFactor(0)
    // debug.setDepth(this.DEPTH.ui)

    // Add input callbacks
    this.zoneLeft.setInteractive()
    this.zoneLeft.on('pointerdown',this.holdLeft,this)
    this.zoneLeft.on('pointerup',this.releaseLeft,this)
    this.zoneLeft.on('pointerout',this.releaseLeft,this)

    this.zoneRight.setInteractive()
    this.zoneRight.on('pointerdown',this.holdRight,this)
    this.zoneRight.on('pointerup',this.releaseRight,this)
    this.zoneRight.on('pointerout',this.releaseRight,this)
  }

  holdLeft(){
    if (!this.allowInput) return
    if (this.isPause||this.isGameover) return
    this.isHolding.left=true
    this.isHolding.direction='left'
        
  }
  holdRight(){
    if (!this.allowInput) return
    if (this.isPause||this.isGameover) return
    this.isHolding.right=true
    this.isHolding.direction='right'
        
  }

  releaseLeft(){
    this.isHolding.left=false
    if (this.isHolding.right) {
      this.isHolding.direction='right'
      
    }else{
      this.isHolding.direction=false
    }
  }

  releaseRight(){
    this.isHolding.right=false
    if (this.isHolding.left) {
      this.isHolding.direction='left'
      
    }else{
      this.isHolding.direction=false
    }
  }
}


export default GameScene;