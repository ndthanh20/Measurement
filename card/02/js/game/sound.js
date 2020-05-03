class Sound {
    constructor(scene, x, y) {
        this.clickButton = scene.add.text(x + 40, y - 15, "Balance the scales and figure out the dog's weight ", {
            font: "30px Arial",
            fill: "#000"
        });
        this.create(scene, x, y);
    }

    create(scene, x, y) {
        this.button = scene.add.image(x, y, 'sound')
            .setInteractive()
            .on('pointerover', () => this.enterButtonHoverState())
            .on('pointerout', () => this.enterButtonRestState())
            .on('pointerdown', () => this.enterButtonActiveState())
        this.sound = scene.sound.add('speak');
        this.level = 1;
    }

    reset(){
        this.level ++;
        if(this.level === 2) this.clickButton.setText("Balance the scales and figure out the cat's weight");
        if(this.level === 3) this.clickButton.setText("Balance the scales and figure out the pig's weight");
        if(this.level === 4) this.clickButton.setText("Balance the scales and figure out the money's weight");
        if(this.level === 5) this.clickButton.setText("Balance the scales and figure out the duck's weight");
    }

    enterButtonHoverState() {
        this.button.setFrame(1);
    }

    enterButtonRestState() {
        this.button.setFrame(0);
    }

    enterButtonActiveState() {
        this.button.setFrame(1);
        this.on();
    }

    on() {
        this.sound.play();
    }
}