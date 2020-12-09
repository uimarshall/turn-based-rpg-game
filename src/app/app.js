const { config } = require("./config");

 


const App = ()=>{
    this.IS_DEV = true
}

App.prototype.start = ()=>{
    
// Create game app
    let game = new Phaser.Game(config);

    // Globals
    game.IS_DEV = this.IS_DEV;
    game.URL = '';
    game.CONFIG = {
        width:config.width,
        height:config.height,
        centerX: Math.round(0.5 * config.width),
        centerY: Math.round(0.5 * config.height),
        tile:16//size in px of each individual tile
    };

    // Sound
//    game.sound_on:true


}


