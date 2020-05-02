class Gift extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, weight, obj) {
        super(scene, x, y, obj);
        this.setWeight(weight);
        scene.add.existing(this).setOrigin(0, 0);
        scene.physics.add.existing(this);
    }

    create() {
        var weight = 0;
    }
    setWeight(weight) {
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }

    posOld(x, y) {
        this.xOld = x;
        this.yOld = y;
    }
}