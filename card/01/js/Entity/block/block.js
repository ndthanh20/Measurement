class Block extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, weight, obj) {
        super(scene, x, y, obj);
        this.setWeight(weight);
        scene.add.existing(this).setOrigin(0, 0);
        this.setInteractive();
        scene.input.setDraggable(this);
        scene.input.on("drag", this.onDoDrag);
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

    onDoDrag(pointer, gameObject, dragX, dragY) {
        if (dragX + gameObject.width > config.width) {
            gameObject.y = dragY;	            
            } else if (dragX < 0) {
                gameObject.x = 0;
            } else {
                gameObject.x = dragX;
            }
    
            if (dragY < 0) {
                gameObject.y = 0;
            } else if (dragY + gameObject.height > config.height) {
                gameObject.y = config.height - gameObject.height;
            } else {
                gameObject.y = dragY;
            }
    }
    
    /*
    move(start, des) {
        var dx = start.x - des.x;
        var dy = start.y - des.y;
        var angle = (Math.atan2(y, x) * 180) / Math.PI + 90;
        this.x = this.x + this.speed * cos(angle);
        this.y = this.y + this.speed * sin(angle);
    }
    */

}