import './main.scss';
import config from './app/config';
import Game from './app/app';

// const resizeAppScreen = () => {
//   // Width-height-ratio of game resolution
//   const gameRatio = (360) / (640);

//   // Make div full height of browser and keep the ratio of game resolution
//   const div = document.getElementById('phaser-app');
//   div.style.width = `${window.innerHeight * gameRatio}px`;
//   div.style.height = `${window.innerHeight}px`;

//   // Check if device DPI messes up the Width-height-ratio
//   const canvas = document.getElementsByTagName('canvas')[0];
//   const dpiW = (parseInt(div.style.width) / canvas.width);
//   const dpiH = (parseInt(div.style.height) / canvas.height);

//   const height = window.innerHeight * (dpiW / dpiH);
//   const width = height * gameRatio;

//   // Scale canvas
//   canvas.style.width = `${width}px`;
//   canvas.style.height = `${width}px`;
// };

// const runApp = () => {
//   // Initialize the phaser game app
//   const app = new App();
//   app.start();

//   // Scale to players deveice
//   window.addEventListener('resize', resizeAppScreen);
//   resizeAppScreen();
// };


window.game = new Game();
// Globals
// game.IS_DEV = this.IS_DEV;
window.game.URL = '';
window.game.CONFIG = {
  width: config.width,
  height: config.height,
  centerX: Math.round(0.5 * config.width),
  centerY: Math.round(0.5 * config.height),
  tile: 32, // size in px of each individual tile
  mapOffset: 4,
};

// Sound
window.game.soundOn = true;
