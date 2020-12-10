
import Phaser from 'phaser';
import BootScene from '../scenes/BootScene';
import Menu from '../scenes/Menu';
import Preloader from '../scenes/Preloader';

// Scenes
const scenes = [BootScene, Preloader, Menu];

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-app',
  title: 'Treasure of condor',
  url: '',
  width: 800,
  height: 600,
  scene: scenes,
  pixelArt: true,
  backgroundColor: 0xD6CDB0,
};

export default config;