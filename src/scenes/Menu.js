import Phaser from 'phaser';
import game from '../app/app';

// The Scene that will load all the assets of the game
class Menu extends Phaser.Scene {
 
  constructor() {
    super({key: 'Menu', active:false});
  }

 init(){
     this.CONFIG = this.sys.game.CONFIG

 }

  preload() {
   

     
  }

  
 
  create() {
    
  this.text = this.add.text(game.CONFIG.centerX,game.CONFIG.centerY, 'Menu')
  this.text.setColor('#ffffff')
  this.text.setOrigin(0.5)
  }

  
}


export default Menu;