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
        this.interact_point = {x: this.cameras.main.centerX, y: this.cameras.main.centerY};

        // once assets are loaded, this text should be destroyed:
        const loadingText = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'Loading...',
            { fontFamily: 'Times New Roman', fontSize: 24, color: '#ffffff' }
        );
        loadingText.setOrigin();

		// Load your assets here (FOR THE GAME)

        this.load.image('background', 'assets/images/background/background-working3.png');

        // load all the IMAGES
        assets.images.forEach(image => {
            this.load.image(image.key, image.path);
        });

        // WTF? does that actually work?
        // Destroy the loading text once all assets have been loaded
        this.load.on('complete', () => {
            loadingText.destroy();
        });
}

	create()
	{

        const playButton = new Button(this, this.cameras.main.centerX, this.cameras.main.centerY, 100, 'Play', true);

        playButton.on('pointerup', ()=>{
			this.scene.start('GameScene');
		});
	}

}