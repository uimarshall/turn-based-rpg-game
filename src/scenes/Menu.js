import Phaser from 'phaser';
import Title from './Title';

class Menu extends Phaser.Scene {
  constructor() {
    super({ key: 'Menu', active: false });
  }

  init() {
    this.CONFIG = this.sys.game.CONFIG;
  }

  // preload() {


  // }


  create() {
    // this.text = this.add.text(this.CONFIG.centerX, this.CONFIG.centerY, 'Menu');
    // this.text.setColor('#ffffff');
    // this.text.setOrigin(0.5);

    // Background
    this.createBackground()
    // Game title
    this.title = new Title(this, 
      this.CONFIG.centerX,
      75,
      'Battle Of Condor',
      'title',
  
      );
   

    // Click to play text
     this.text = new Title(
      this,
      this.CONFIG.centerX,
      this.CONFIG.centerY,
      'Play Game',
      'standard',
     

    );

    
    // Grab mouse input
    this.onMouseInput()
    // Grab keyboard input
    this.onKeyboardInput()

  }

  createBackground(){
    this.bg=this.add.graphics({x:0,y:0})
    this.bg.fillStyle('0xD6CDB0',1)
    this.bg.fillRect(0,0,this.CONFIG.width,this.CONFIG.height)
  }

  onMouseInput(){
    this.input.on('pointerup',this.playGame,this)
  }
  onKeyboardInput(){
    function handleKeyUp (e) { 
      switch (e.code) {
        case 'Enter':
          this.playGame()
          
          break;
      
        default:
          break;
      }
     }
    this.input.keyboard.on('keyup',handleKeyUp,this)
  }

  playGame(){
    this.scene.start('Game')
  }
}


export default Menu;