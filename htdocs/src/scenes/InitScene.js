// loader for the Preloader
export default class InitScene extends Phaser.Scene {

	constructor ()
    {
    	// Sets the string name we can use to access this scene from other scenes
		super({key:'InitScene'});
    }

    init()
    {
    	console.log('InitScene Started');
    }

    /* NOTE: preloading applies mainly to images and sounds. No need to preload
        other stuff like Javascript buttons or even text. */
	preload()
	{
        // get outta scenes, get outta js, into lib
        this.load.image('girl-sprite', '/lib/images/enemy-sheep/girl-frames/clears/spritesheet.png');
	}

	create()
	{
        // nothing should actually be created in InitScene
		console.log('InitScene Created');

		// Once the preload phase is done, we can switch to our preloader scene
        // so I don't even have to input the filepath anywhere? 
        // remember, these names are defined at top of each scene.
		this.scene.start('PreloaderScene');
	}

}