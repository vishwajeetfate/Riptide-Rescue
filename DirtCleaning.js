class DirtCleanign extends Phaser.Scene {
    constructor() {
        super({ key: "DirtCleaning" });
    }
    preload() {
        this.load.image("dirt", "assets/dirt-01.png");
        this.load.image("dirt2", "assets/dirt/dirt-02.png");
        this.load.image("dirt3", "assets/dirt/dirt-03.png");
        this.load.image("dirt4", "assets/dirt/dirt-04.png");
        this.load.image("dirt5", "assets/dirt/dirt-05.png");
        this.load.image("dirt6", "assets/dirt/dirt-06.png");
        this.load.image("dirt7", "assets/dirt/dirt-07.png");
        this.load.image("dirt8", "assets/dirt/dirt-08.png");
        this.load.image("dirt9", "assets/dirt/dirt-09.png");

    }
    
    create() {
        
        this.add.image(640,360,"dirt")
        let dirtArray = [];
        let dirtKeys = ["dirt2", "dirt3", "dirt4", "dirt5", "dirt6","dirt7","dirt8","dirt9"]; // Array of keys for the dirt images
        let dirtCount = dirtKeys.length;
    
        this.add.text(250, 20, "Please click on the garbage icon to remove it from the screen", {
            
            font: "35px Calibri",
            fill: "#E19002"
        });
        for (let i = 0; i < dirtCount; i++) {
            let dirtKey = dirtKeys[i];
            let dirt = this.add.image(Phaser.Math.Between(0, 1280), Phaser.Math.Between(360, 720), dirtKey);
            dirt.setInteractive();
            dirt.on('pointerdown', function () {
                dirt.destroy();
                dirtCount--;
                if (dirtCount == 0) {
                    this.sound.stopAll();
                    this.sound.removeAll();
                    this.scene.start("DoneCleaning");
                }
            }, this);
            dirtArray.push(dirt);
        }
    }
}