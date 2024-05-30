import Button from "js/classes/button.js";

class GameScene extends Phaser.Scene {

	constructor ()
    {
		super({key:'GameScene'});
    }

	create()
	{
		this.add.image(0, 0, 'background').setOrigin(0, 0);

		// TODO: add "play" button
		// const playButton = new Button(this, centerX, centerY, 100, 'Play', true);


		console.log('GameScene Created');
	}
}