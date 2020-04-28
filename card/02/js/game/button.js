class Button {
    constructor(scene, x, y) {
        this.clickButton = scene.add.text(x, y, '< Back', {
                font: "25px Arial",
                fill: "#000"
            })
            .setInteractive()
            .on('pointerover', () => this.enterButtonHoverState())
            .on('pointerout', () => this.enterButtonRestState())
            .on('pointerdown', () => this.enterButtonActiveState())
            .on('pointerup', () => {
                this.enterButtonHoverState();
            });
    }

    enterButtonHoverState() {
        this.clickButton.setStyle({
            fill: '#f00'
        });
    }

    enterButtonRestState() {
        this.clickButton.setStyle({
            fill: '#000'
        });
    }

    enterButtonActiveState() {
        window.location = "/lesson/weight.html";
    }
}