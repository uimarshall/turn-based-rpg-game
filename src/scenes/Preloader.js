import Phaser from 'phaser';


// The Scene that will load all the assets of the game
class Preloader extends Phaser.Scene {
 
  constructor() {
    super({key: 'Preload', active:false});
  }

 init(){

 }

  preload() {
   

     
  }

  
 
  create() {
    
  this.scene.start('Menu')
  }

  
}


export default Preloader;