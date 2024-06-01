/* the way chatgpt wrote this is very interesting. I can simply create an instance
of this class in any scene file and put "this" for "scene". The scene just calls
itself on the object! */

// wtf is the difference between constructor and super?
export default class Button extends Phaser.GameObjects.Container {
    constructor(scene, x, y, width, text, clickable) {
        super(scene, x, y);

        this.width = width;
        this.height = 30;
        this.text = text;
        this.clickable = clickable;
        this.show = true;

        this.stroke = "black";

        // Create the button background
        this.buttonBackground = scene.add.rectangle(0, 0, this.width, this.height, 0x808080);
        this.buttonBackground.setOrigin(0.5);

        this.buttonOutline = scene.add.graphics();
        this.buttonOutline.lineStyle(2, 0x000000, 1);  // Set the line style: thickness, color, and alpha
        this.buttonOutline.strokeRect(-this.width / 2, -this.height / 2, this.width, this.height);

        // Create the button text
        this.buttonText = scene.add.text(0, 0, this.text, {
            fontFamily: 'serif',
            fontSize: '12.5px',
            color: '#000',
            align: 'center',
            wordWrap: { width: this.width, useAdvancedWrap: true }
        });
        this.buttonText.setOrigin(0.5);

        // Add background and text to the container
        this.add(this.buttonBackground);
        this.add(this.buttonOutline);
        this.add(this.buttonText);

        // Make the container interactive
        if (clickable) {
            this.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.width, this.height), Phaser.Geom.Rectangle.Contains);
            
            this.on('pointerover', () => {
                this.buttonBackground.setFillStyle(0xa0a0a0);
            });
            this.on('pointerout', () => {
                this.buttonBackground.setFillStyle(0x808080);
            });
            this.on('pointerup', () => {
                // Handle the click event
                console.log(`${this.text} button clicked`);
            });
        }

        // Add this container to the scene
        scene.add.existing(this);
    }
}
