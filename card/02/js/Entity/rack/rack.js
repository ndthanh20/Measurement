class Rack extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, obj) {
        super(scene, x, y, obj);
        scene.add.existing(this).setOrigin(0, 0);
        scene.physics.add.existing(this);
        this.createList(scene);
        this.setScene(scene);
    }

    create() {
        var blocks;
    }

    createList(scene) {
        this.blocks = scene.add.group();
    }

    setScene(scene) {
        this.scene = scene;
    }

    createDragRack(scene, key) {
        this.rackTouch = new Rack(scene, this.x, this.y, key);
        this.rackTouch.turnOff();
    }

    updateRackTouch() {
        this.rackTouch.x = this.x;
        this.rackTouch.y = this.y;
    }

    sum() {
        var sum = 0;
        var blocksList = this.blocks.getChildren();
        for (var i = 0; i < blocksList.length; i++) {
            sum += blocksList[i].weight;
        }
        return sum;
    }

    sort() {
        var list = this.blocks.getChildren();
        var temp = this.x + this.width / 2 + 20 - 30 * list.length;
        for (var i = 0; i < list.length; i++) {
            var tempX = temp;
            var tempY = this.y - 3 - (-this.height + list[i].height);
            this.scene.moveToXY(list[i], tempX, tempY, 500);
            list[i].posOld(tempX, tempY);
            temp += list[i].width + 5;
        }
    }

    blockMoveWhenScaleTransition(scene, speed, maxTime) {
        var list = this.blocks.getChildren();
        for (var i = 0; i < list.length; i++) {
            scene.moveToY(list[i], speed, maxTime);
        }
    }

    offMove() {
        var list = this.blocks.getChildren();
        for (var i = 0; i < list.length; i++) {
            if (list[i] instanceof Block) {
                list[i].offMove();
            }
        }
    }

    onMove() {
        var list = this.blocks.getChildren();
        for (var i = 0; i < list.length; i++) {
            if (list[i] instanceof Block) {
                list[i].onMove();
            }
        }
    }

    addBlocks(obj) {
        this.blocks.add(obj);
        this.sort();
    }

    reset() {
        this.blocks.clear(true, true);
    }

    removeBlocks(obj) {
        this.blocks.remove(obj);
    }


    turnOn() {
        this.visible = true;
    }

    turnOff() {
        this.visible = false;
    }
}