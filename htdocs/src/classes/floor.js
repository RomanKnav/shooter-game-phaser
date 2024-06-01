export default class Floor extends Phaser.GameObjects.Rectangle {
    constructor(scene) {
        // Calculate dimensions and position
        const width = scene.scale.width;
        const height = scene.scale.height / 4; // 75px tall
        const x = width / 2; // center of the canvas
        const y = scene.scale.height - (height / 2); // positioned at the bottom of the canvas

        // Create the rectangle object
        // wtf does super mean?
        super(scene, x, y, width, height, 0x00ff00); // green color

        // Add this object to the scene
        // "this" refers to the floor object itself.
        // wtf does add.existing mean?
        scene.add.existing(this);
        this.setOrigin(0.5);
    }

    draw() {
        // No need to explicitly draw, as Phaser automatically handles it
    }
}
