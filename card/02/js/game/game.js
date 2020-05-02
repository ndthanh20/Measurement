var config = {
    width: 960,
    height: 600,
    backgroundColor: 0xffffff,
    physics: {
        default: "arcade",
        arcade: {
            //gravity: { y: 300 },
            debug: false
        }
    },
    scene: [Scene]
};

var game = new Phaser.Game(config);