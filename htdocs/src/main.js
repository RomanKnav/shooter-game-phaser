var MainConfig = (()=>{

	// loose reference
	let config = this;

	// path to our scene scripts
	let scene_path = "js/scenes/";

	// class/file names of all our scenes
	config.scene_names = [
		'InitScene',
		'PreloaderScene',
		'GameScene'
	];

	// This will be called when all our scene files have loaded and we are ready to start the Phaser game.
	function startGame() {

		config.game = new Phaser.Game({

			width: 800,
			height: 300,
			type: Phaser.AUTO,	// Render mode, could also be Phaser.CANVAS or Phaser.WEBGL
			scene: config.scene_classes // the code below will set this for us

		});
	}

	//---------- You shouldn't need to edit anything below here ----------\\

	// this will store references to our scene classes as they are loaded.
	config.scene_classes = [];

	// get the body tag in the HTML document
	let body = document.getElementsByTagName('body')[0];

	// keep track of number of loaded scenes
	let scenes_loaded = 0;

	// Loads a scene file by adding a script tag for it in our page HTML
	function loadScene(scene_name) {

		let script_tag = document.createElement('script');
		script_tag.src = scene_path + scene_name + ".js";

		// wait for the scene file to load, then check if we have loaded them all
		script_tag.addEventListener('load', ()=>{
			scenes_loaded++;
			eval("config.scene_classes.push("+scene_name+")");

			// looks like we can start the game!
			if (scenes_loaded === config.scene_names.length) startGame();
		});

		body.appendChild(script_tag);
	}

	// start loading all of our scene files
	config.scene_names.forEach((scene_name)=> {
		loadScene(scene_name);
	});

	return this;
})();