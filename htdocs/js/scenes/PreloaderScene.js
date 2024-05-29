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
        loadingText.setOrigin(0.5);

        // Load assets here

    }

    create() {


        // After assets are loaded, transition to the next scene

        // PUT FUCKING BUTTON AND TEXT HERE
        // this.scene.start('NextScene');
    }
}
