class Rack extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, obj) {
        super(scene, x, y, obj);
        scene.add.existing(this).setOrigin(0, 0);
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
        let blocksList = this.blocks.getChildren();
        for (var i = 0; i < blocksList.length; i++) {
            sum += blocksList[i].weight;
        }
        return sum;
    }

    sort() {
        var list = this.blocks.getChildren();
        var temp = this.x + this.width / 2 + 20 - 30 * list.length;
        for (var i = 0; i < list.length; i++) {
            list[i].x = temp;
            list[i].y = this.y - (-this.height + list[i].height);
            list[i].posOld(list[i].x, list[i].y);
            temp += list[i].width + 5;
        }
    }

    addBlocks(obj) {
        this.blocks.add(obj);
        this.sort(this.scene);
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