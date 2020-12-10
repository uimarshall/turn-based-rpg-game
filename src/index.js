import './main.scss';
import App from './app/app';
import Menu from './scenes/Menu';
import game from './app/app';
import config  from './app/config';



const resizeAppScreen = ()=>{
    // Width-height-ratio of game resolution
    let game_ratio = (360/2)/(640/2)

    // Make div full height of browser and keep the ratio of game resolution
    let div = document.getElementById('phaser-app')
    div.style.width = (window.innerHeight*game_ratio) + 'px'
    div.style.height = window.innerHeight + 'px'

    // Check if device DPI messes up the Width-height-ratio
    let canvas = document.getElementsByTagName('canvas')[0]
    let dpi_w = (parseInt(div.style.width)/canvas.width)
    let dpi_h = (parseInt(div.style.height)/canvas.height)

    let height = window.innerHeight*(dpi_w/dpi_h)
    let width = height*game_ratio

    // Scale canvas
    canvas.style.width = width + 'px'
    canvas.style.height = width + 'px'

}

const runApp =()=>{
    // Initialize the phaser game app
    let app = new App()
    app.start();

    // Scale to players deveice
    window.addEventListener('resize',resizeAppScreen)
    resizeAppScreen()
}

// window.onload = 
// function (){

//         try {
//             eval('let i = 0')
//             eval('const_dev = true')
            
//         } catch (error) {
//             // alert('This browser is not supported Use chrome or firefox')
//             return false
            
//         }

//         // Launch the game
//         runApp()

// }

class Game extends Phaser.Game {
  constructor () {
    super(config);
   
  }
}
 
window.game = new Game();