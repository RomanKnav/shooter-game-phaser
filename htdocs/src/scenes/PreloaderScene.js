// seems I'm gonna probably import ALOT of shit
// 1st thing to import: button
// reminder: "." refers to current directory

// I will be pulling assets from assets.js w/ for loop.
import assets from '../assets.js';
import Button from '../classes/button.js';

export default class PreloaderScene extends Phaser.Scene {
	constructor ()
    {
    	// Sets the string name we can use to access this scene from other scenes
		super({key:'PreloaderScene'});
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

        const loadingText = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'Loading...',
            { fontFamily: 'Times New Roman', fontSize: 24, color: '#ffffff' }
        );

        loadingText.setOrigin();

        // TO LOAD: textwall obj, button obj (not actual "assets")
        // note: textwall object already makes background black.

		// Load your assets here (FOR THE GAME)
        this.load.image('background', '/lib/images/background/background-working3.png');

        // load all the IMAGES
        assets.images.forEach(image => {
            this.load.image(image.key, image.path);
        });
	}

	create()
	{
        // MAKE PLAY BUTTON AND TEXTWALL HERE:

        
		// start the GameScene when the button is clicked. Bonus - this will enable audo playback as well!
        this.scene.start('GameScene');
	}

}