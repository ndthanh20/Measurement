class Scales extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        super(scene);
        this.create();
        scene.physics.add.existing(this.right);
        scene.physics.add.existing(this.left);
    }

    create() {
        this.soles = this.scene.add.rectangle(330, 350, 300, 5, 0xd8d8d8).setOrigin(0, 0);
        this.right = this.scene.add.rectangle(330, 280, 40, 120, 0xd8d8d8).setOrigin(0, 0);
        this.left = this.scene.add.rectangle(590, 280, 40, 120, 0xd8d8d8).setOrigin(0, 0);
        this.wall = this.scene.add.rectangle(330, 355, 300, 100, 0xffffff).setOrigin(0, 0);
        this.oldCompare = 0;
    }

    update() {

    }

    isBalance(rackLeft, rackRight) {

        if (rackLeft.sum() === rackRight.sum()) {
            return true;
        }
    }

    compare(rackLeft, rackRight) {
        var temp = rackLeft.sum() - rackRight.sum();
        var a = this.oldCompare;
        if (temp === 0) {
            this.oldCompare = 0;
            return -a;
        }
        this.oldCompare = temp;
        return temp - a;
    }

    draw(num, rackLeft, rackRight, scene) {
        if (num !== 0) {
            scene.time.addEvent({
                delay: 600,
                callback: () => {
                    var dis = Math.abs(num);
                    var speed = 10 * num / dis;
                    var maxTime = dis * 1000 / 10;
                    this.left.body.velocity.y = -speed;
                    rackLeft.body.velocity.y = speed;
                    this.right.body.velocity.y = speed;
                    rackRight.body.velocity.y = -speed;
                    scene.time.addEvent({
                        delay: maxTime,
                        callback: () => {
                            this.left.body.velocity.y = 0;
                            rackLeft.body.velocity.y = 0;
                            this.right.body.velocity.y = 0;
                            rackRight.body.velocity.y = 0;
                        },
                        loop: false,
                    });
                    rackLeft.blockMoveWhenScaleTransition(scene, speed, maxTime);
                    rackRight.blockMoveWhenScaleTransition(scene, -speed, maxTime);
                },

                loop: false,
            });
        }
    }
}