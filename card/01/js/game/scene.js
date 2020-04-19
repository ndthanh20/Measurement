class Scene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    preload() {
        this.load.image("block1", "./image/1.png");
        this.load.image("block2", "./image/2.png");
        this.load.image("block3", "./image/3.png");
        this.load.image("block4", "./image/4.png");
        this.load.image("block5", "./image/5.png");
        this.load.image("block6", "./image/6.png");
        this.load.image("block7", "./image/7.png");
        this.load.image("block8", "./image/8.png");
        this.load.image("block9", "./image/9.png");
        this.load.image("rackleft", "./image/left.png");
        this.load.image("rackright", "./image/right.png");
        this.load.image("rackqueue", "./image/queue.png");
        this.load.image("progressbar","./image/progressbar.png");
        this.load.image("ball","./image/ball.png");
        this.load.text('level', "./data/level.json");
    }
    
    

    create(){
        this.add.image(480,30,'progressbar');
        

        this.scales = new Scales(this);
        this.rackleft = new Rack(this, 136, 233, 'rackleft');
        this.rackright = new Rack(this, 464, 233, 'rackright');
        this.rackqueue = new Rack(this, 330, 480, 'rackqueue');
        this.gift = null;
        this.level = 1;
        this.data = JSON.parse(this.cache.text.get('level')).level;
        this.setData(this.data[this.level - 1]);
        this.input.on('gameobjectup', this.onStop, this);
        this.scales.draw(this.scales.compare(this.rackleft, this.rackright), this.rackleft, this.rackright);
        
        this.balls = this.physics.add.group({
            key: 'ball',
            repeat: 9,
            setXY: { x: 215, y: 30, stepX: 30 }
        });    

    }

    update() {
        var list = this.balls.getChildren();
        if (this.scales.isBalance(this.rackleft, this.rackright)) {
            if (this.level === 2)
                this.time.addEvent({
                    delay: 2000,
                    callback: () => {
                        window.location = '../../lesson/weight.html';
                    },
                    loop: true
                })
            list[list.length-this.level].x +=265;
            this.level++;
            this.reset();
            console.log(this.data[this.level - 1]);
            this.setData(this.data[this.level - 1]);
            this.scales.draw(this.scales.compare(this.rackleft, this.rackright), this.rackleft, this.rackright);
        }
    }

    onStop(pointer, gameObject) {
        if (gameObject.x < this.rackqueue.x + this.rackqueue.width && gameObject.x > this.rackqueue.x && gameObject.y < this.rackqueue.y + this.rackqueue.height && gameObject.y > this.rackqueue.y) {
            this.rackqueue.addBlocks(gameObject);
            this.rackright.removeBlocks(gameObject);
            this.rackleft.removeBlocks(gameObject);
            this.scales.draw(this.scales.compare(this.rackleft, this.rackright), this.rackleft, this.rackright);
        } else if (gameObject.x < this.rackleft.x + this.rackleft.width && gameObject.x > this.rackleft.x && gameObject.y < this.rackleft.y + this.rackleft.height && gameObject.y > this.rackleft.y) {
            this.rackleft.addBlocks(gameObject);
            this.rackright.removeBlocks(gameObject);
            this.rackqueue.removeBlocks(gameObject);
            this.scales.draw(this.scales.compare(this.rackleft, this.rackright), this.rackleft, this.rackright);
        } else if (gameObject.x < this.rackright.x + this.rackright.width && gameObject.x > this.rackright.x && gameObject.y < this.rackright.y + this.rackright.height && gameObject.y > this.rackright.y) {
            this.rackright.addBlocks(gameObject);
            this.rackleft.removeBlocks(gameObject);
            this.rackqueue.removeBlocks(gameObject);
            this.scales.draw(this.scales.compare(this.rackleft, this.rackright), this.rackleft, this.rackright);
        } else {
            this.rackqueue.sort();
            this.rackleft.sort();
            this.rackright.sort();
        }
    }

    reset() {
        this.gift = null;
        this.rackleft.reset();
        this.rackright.reset();
        this.rackqueue.reset();
    }


    setData(data) {
        this.setRackqueue(data.rackQueue);
        this.setRackright(data.rackRight);
        this.setGift(data.gift);
    }

    setRackright(data) {
        for (var i = 0; i < data.length; i++) {
            this.rackright.addBlocks(this.setBlock(data[i]));
        }
    }

    setRackqueue(data) {
        for (var i = 0; i < data.length; i++) {
            this.rackqueue.addBlocks(this.setBlock(data[i]));
        }
    }

    setGift(data) {
        this.gift = this.setBlock(data);
        this.gift.offMove();
        this.rackleft.addBlocks(this.gift);
    }

    setBlock(weight) {
        switch (weight) {
            case 1:
                return new Block(this, 0, 0, 1, 'block1');
            case 2:
                return new Block(this, 0, 0, 2, 'block2');
            case 3:
                return new Block(this, 0, 0, 3, 'block3');
            case 4:
                return new Block(this, 0, 0, 4, 'block4');
            case 5:
                return new Block(this, 0, 0, 5, 'block5');
            case 6:
                return new Block(this, 0, 0, 6, 'block6');
            case 7:
                return new Block(this, 0, 0, 7, 'block7');
            case 8:
                return new Block(this, 0, 0, 8, 'block8');
            case 9:
                return new Block(this, 0, 0, 9, 'block9');
        }
    }

    move(start, des) {

    }

}