import './main.scss';
import './app/app';
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