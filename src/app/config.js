
import Phaser from 'phaser';
import BootScene from '../scenes/BootScene';
import Menu from '../scenes/Menu';
import Preloader from '../scenes/Preloader';

// Scenes
    let scenes = [BootScene, Preloader, Menu]
 
const config = {
  type: Phaser.AUTO,
  parent: 'phaser-app',
  title:'Treasure of condor',
  url: '',
  width: 360/2,
  height: 600/2,
  scene: scenes,
  pixelArt: true,
  backgroundColor: 0xffffff,
};

export default config