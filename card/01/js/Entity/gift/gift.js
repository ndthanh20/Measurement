class Gift extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, weight, obj) {
        super(scene, x, y, obj);
        this.setWeight(weight);
        scene.add.existing(this).setOrigin(0, 0);
        scene.physics.add.existing(this);
        this.createAnims(scene);
    }

    createAnims(scene) {
        scene.anims.create({
            key: "anims_gift3",
            frames: scene.anims.generateFrameNumbers("gift3"),
            frameRate: 3,
            repeat: 0
        });
        scene.anims.create({
            key: "anims_gift4",
            frames: scene.anims.generateFrameNumbers("gift4"),
            frameRate: 3,
            repeat: 0
        });
        scene.anims.create({
            key: "anims_gift5",
            frames: scene.anims.generateFrameNumbers("gift5"),
            frameRate: 3,
            repeat: 0
        });
        scene.anims.create({
            key: "anims_gift6",
            frames: scene.anims.generateFrameNumbers("gift6"),
            frameRate: 3,
            repeat: 0
        });
        scene.anims.create({
            key: "anims_gift7",
            frames: scene.anims.generateFrameNumbers("gift7"),
            frameRate: 3,
            repeat: 0
        });
        scene.anims.create({
            key: "anims_gift8",
            frames: scene.anims.generateFrameNumbers("gift8"),
            frameRate: 3,
            repeat: 0
        });
        scene.anims.create({
            key: "anims_gift9",
            frames: scene.anims.generateFrameNumbers("gift9"),
            frameRate: 3,
            repeat: 0
        });
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