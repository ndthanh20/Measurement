class Rack extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, obj) {
        super(scene, x, y, obj);
        scene.add.existing(this).setOrigin(0, 0);
        this.createList(scene);
    }

    create() {
        var blocks;
    }

    createList(scene) {
        this.blocks = scene.add.group();
    }

    sum() {
        var sum = 0;
        let blocksList = this.blocks.getChildren();
        for (var i = 0; i < blocksList.length; i++) {
            sum += blocksList[i].weight;
        }
        return sum;
    }

    update() {}

    sort() {
        var list = this.blocks.getChildren();
        var temp = this.x + 10;
        for (var i = 0; i < list.length; i++) {
            list[i].x = temp;
            list[i].y = this.y - (-this.height + list[i].height);
            temp += list[i].width + 5;
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
        this.sort();
    }
}