import Phaser from 'phaser';
// The Scene that will load all the assets of the game
class Menu extends Phaser.Scene {
 
  constructor() {
    super({key: 'Menu', active:false});
  }

 init(){

 }

  preload() {
   

     
  }

  
 
  create() {
    
  this.text = this.add.text(0,0, 'Menu')
  }

  
}


export default Menu;