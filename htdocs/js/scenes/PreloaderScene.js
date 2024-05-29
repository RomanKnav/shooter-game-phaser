class PreloaderScene extends Phaser.Scene {

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

        // TO LOAD: textwall obj, button obj
        // note: textwall object already makes background black.

		// Load your assets here (FOR THE GAME)
        this.load.image('background', '/Users/master/Desktop/Coding Shit/Javascript/shooter-game-phaser/htdocs/lib/images/background/background-working3.png');
	}

	create()
	{
        // MAKE PLAY BUTTON HERE:
        // to do that, I need to 1st make the button class. Where'd I put that?

        // set our background color
        this.cameras.main.setBackgroundColor(0x000000);

		let play_btn = this.add.image(this.interact_point.x, this.interact_point.y, 'preloader_button');
		// make the button interactive
		play_btn.setInteractive();
		// add some alpha for the default state
		play_btn.alpha = 0.9;

		// remove alpha on hover
		play_btn.on('pointerover', ()=>{
			play_btn.alpha = 1;
		});

		// add alpha on roll out
		play_btn.on('pointerout', ()=>{
			play_btn.alpha = 0.9;
		});

		// start the GameScene when the button is clicked. Bonus - this will enable audo playback as well!
		play_btn.on('pointerup', ()=>{
			this.scene.start('GameScene');
		});
	}

}