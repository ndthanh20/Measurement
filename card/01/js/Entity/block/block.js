class Block extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, weight, obj) {
        super(scene, x, y, obj);
        this.setWeight(weight);
        scene.add.existing(this).setOrigin(0, 0);
        this.setInteractive();
        scene.input.setDraggable(this);
        scene.input.on('drag', this.onDoDrag);
    }

    create() {
        let weight = 0;
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

    onDoDrag(pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;
    }

}