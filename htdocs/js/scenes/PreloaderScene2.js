// seems I'm gonna probably import ALOT of shit
// 1st thing to import: button
// reminder: "." refers to current directory
import Projectile from "./projectile.js"; 
import Button from "./classes/button.js";
import TextWall from "./classes/textWall.js";

class PreloaderScene extends Phaser.Scene {
	constructor ()
    {
    	// Sets the string name we can use to access this scene from other scenes
		super({key:'PreloaderScene2'});
    }

    init()
    {
    	console.log('PreloaderScene Started');
    }

	preload()
	{
        // my preloader has no background, so what do I put here instead?
        // this a CUSTOM property
        // understand this better. simply just coords to use to place our button on.
        this.interact_point = {x: this.cameras.main.centerX, y: this.cameras.main.centerY};

        // TO LOAD: textwall obj, button obj (not actual "assets")
        // note: textwall object already makes background black.

		// Load your assets here (FOR THE GAME)
        // this.load.image('background', '/Users/master/Desktop/Coding Shit/Javascript/shooter-game-phaser/htdocs/lib/images/background/background-working3.png');
	}

	create()
	{
        // MAKE PLAY BUTTON AND TEXTWALL HERE:
        
        const loadingText = new TextWall(`Loading`, Math.floor(canvas.height / 3), canvas);

		// start the GameScene when the button is clicked. Bonus - this will enable audo playback as well!
		play_btn.on('pointerup', ()=>{
			this.scene.start('GameScene');
		});
	}

}