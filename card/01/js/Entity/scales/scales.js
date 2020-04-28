class Scales extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        super(scene);
        this.create();
    }

    create() {
        this.soles = this.scene.add.rectangle(330, 350, 300, 5, 0xd8d8d8).setOrigin(0, 0);
        this.right = this.scene.add.rectangle(330, 280, 40, 70, 0xd8d8d8).setOrigin(0, 0);
        this.left = this.scene.add.rectangle(590, 280, 40, 70, 0xd8d8d8).setOrigin(0, 0);
        this.oldCompare = 0;
    }

    update() {

    }

    isBalance(rackLeft, rackRight) {

        if (rackLeft.sum() == rackRight.sum()) {
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
        this.left.height += num * 1;
        this.left.y -= num * 1;
        this.right.height -= num * 1;
        this.right.y += num * 1;
        rackLeft.y += num * 1;
        rackRight.y -= num * 1;

        rackLeft.sort(scene);
        rackRight.sort(scene);
    }
}