class Block extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, weight, obj) {
        super(scene, x, y, obj);
        this.setWeight(weight);
        scene.add.existing(this).setOrigin(0, 0);
        scene.physics.add.existing(this);
        this.setInteractive();
        scene.input.setDraggable(this);
    }

    create() {
        let weight = 0;
        var speed = 5;
    }
    offMove() {
        this.disableInteractive();
    }

    onMove() {
        this.setInteractive();
    }
    setWeight(weight) {
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }
}