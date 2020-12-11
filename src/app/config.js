
import Phaser from 'phaser';
import BootScene from '../scenes/BootScene';
import GameScene from '../scenes/GameScene';
import Menu from '../scenes/Menu';
import Preloader from '../scenes/Preloader';

// Scenes
const scenes = [BootScene, Preloader, Menu, GameScene];

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-app',
  title: 'Treasure of condor',
  url: '',
  width: 360,
  height: 640,
  scene: scenes,
  zoom: 2,
  pixelArt: true,
  backgroundColor: 0x333333,
};

export default config;