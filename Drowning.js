class Drowning extends Phaser.Scene {
    constructor() {
        super({ key: "Drowning" });
    }
    preload() {
        this.load.video("animation2", "assets/Drowning.mp4");
        this.load.audio("beachSound5", "assets/beachSound1.mp3")

    }
    
    create() {

        let beachAudio1 = this.sound.add("beachSound5");
        beachAudio1.play();
        
        let video = this.add.video(640, 360, "animation2");
        video.play();
        
        video.once("complete", function() {
            beachAudio1.stop();
        this.scene.start("DrowningHelp");
    }, this);
    }
}