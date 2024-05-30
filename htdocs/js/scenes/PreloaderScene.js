class PreloaderScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloaderScene' });
    }

    preload() {
        // Set background color
        this.cameras.main.setBackgroundColor(0x000000);

        // Display loading text
        const loadingText = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'Loading...',
            { fontFamily: 'Times New Roman', fontSize: 24, color: '#ffffff' }
        );

        // wtf this do:
        // UNDERSTOOD: sets the origin point of objs from top-left corner to center
        loadingText.setOrigin();

        // Load GAME assets here
        this.load.image('background', 'lib/images/background/background-working3.png');
    }

    create() {
        console.log('PreloaderScene Created');

        // After assets are loaded, transition to the next scene

        // PUT FUCKING BUTTON AND TEXT HERE
        this.scene.start('GameScene');
    }
}
