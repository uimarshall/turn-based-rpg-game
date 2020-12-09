
import Phaser, { Scenes } from 'phaser';
 
const config = {
  type: Phaser.AUTO,
  parent: 'phaser-app',
  title:'battleof condor',
  url: '',
  width: 360/2,
  height: 600/2,
  scene: Scenes,
  pixelArt: true,
  backgroundColor: 0xffffff,
};

export default config