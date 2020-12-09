import Phaser from 'phaser';
// The Scene that will start the game
class BootScene extends Phaser.Scene {
 
  constructor() {
    super({key: 'BootScene', active:true});
  }

 init(){

 }

  preload() {
   

     
  }

  
 
  create() {
    
  this.scene.start('Preload')
  }

  
}


export default BootScene;