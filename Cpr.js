class Cpr extends Phaser.Scene {
    constructor() {
        super({ key: "Cpr" });
    }
    preload() {
        this.load.video("rescue", "assets/Cpr.mp4");
        this.load.image("playButton", "assets/cpr_button.png");
    }
    
    create() {
        let video = this.add.video(640, 360, "rescue");
        let playButton = this.add.image(640, 700, "playButton").setInteractive();
       
        let counter = 0;

        playButton.on("pointerdown", function() {
            counter++;
            video.play();
            if (counter === 5) {
                this.scene.start("Lesson");
                
            }
        }, this);
        
    }
}