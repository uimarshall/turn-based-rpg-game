import './main.scss';
import config from './app/config';
import Game from './app/app';

const resizeAppScreen = () => {
  // Width-height-ratio of game resolution
  const game_ratio = (360 / 2) / (640 / 2);

  // Make div full height of browser and keep the ratio of game resolution
  const div = document.getElementById('phaser-app');
  div.style.width = `${window.innerHeight * game_ratio}px`;
  div.style.height = `${window.innerHeight}px`;

  // Check if device DPI messes up the Width-height-ratio
  const canvas = document.getElementsByTagName('canvas')[0];
  const dpi_w = (parseInt(div.style.width) / canvas.width);
  const dpi_h = (parseInt(div.style.height) / canvas.height);

  const height = window.innerHeight * (dpi_w / dpi_h);
  const width = height * game_ratio;

  // Scale canvas
  canvas.style.width = `${width}px`;
  canvas.style.height = `${width}px`;
};

const runApp = () => {
  // Initialize the phaser game app
  const app = new App();
  app.start();

  // Scale to players deveice
  window.addEventListener('resize', resizeAppScreen);
  resizeAppScreen();
};


window.game = new Game();
// Globals
// game.IS_DEV = this.IS_DEV;
window.game.URL = '';
window.game.CONFIG = {
  width: config.width,
  height: config.height,
  centerX: Math.round(0.5 * config.width),
  centerY: Math.round(0.5 * config.height),
  tile: 16, // size in px of each individual tile
};

// Sound
window.game.sound_on = true;
