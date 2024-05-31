import Phaser from './lib/phaser.js';
import InitScene from './scenes/InitScene.js';
import PreloaderScene from './scenes/PreloaderScene.js';
import GameScene from './scenes/GameScene.js';

const MainConfig = (() => {

    // Configuration object
    const config = {};

    // Class/file names of all our scenes
    config.scene_names = [
        InitScene,
        PreloaderScene,
        GameScene
    ];

    // This will be called when all our scene files have loaded and we are ready to start the Phaser game.
    function startGame() {
        config.game = new Phaser.Game({
            width: 800,
            height: 300,
            type: Phaser.AUTO,   // Render mode, could also be Phaser.CANVAS or Phaser.WEBGL
            scene: config.scene_names, // the code below will set this for us
			// this helps background appear less blurry
			render: {
				pixelArt: true, // Ensures pixel-perfect rendering for pixel art
				antialias: false, // Disables antialiasing for sharp images
			}
        });
    }

    // Start the game directly since we are using imports
    startGame();

    return config;
})();

export default MainConfig;
