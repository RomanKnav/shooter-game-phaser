import Button from "../classes/button.js";

export default class GameScene extends Phaser.Scene {

	constructor ()
    {
		super({key:'GameScene'});
    }

	preload()
	{
		this.load.image('background', 'assets/images/background/background-working3.png');
	}

	create()
	{
		this.add.image(0, 0, 'background').setOrigin(0, 0);

		// TODO: add "play" button
		// scene, x, y, width, text, clickable
		const playButton = new Button(this, this.cameras.main.centerX, this.cameras.main.centerY, 100, 'Initiate Bloodbath', true);


		console.log('GameScene Created');
	}	
}