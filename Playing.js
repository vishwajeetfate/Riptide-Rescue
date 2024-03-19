class Playing extends Phaser.Scene {
    constructor() {
        super({ key: "Playing" });
    }
    preload() {
        this.load.video("playAnimat", "assets/Playing.mp4");
       this.load.audio("beachSound1", "assets/beachSound1.mp3")

    }
    
    create() {
        let beachAudio1 = this.sound.add("beachSound1");
        beachAudio1.play();
        
        let video = this.add.video(640, 360, "playAnimat");
        video.play();
        video.once("complete", function() {
            beachAudio1.stop();
            this.cameras.main.fadeOut(2000);
            this.cameras.main.once("camerafadeoutcomplete", function() {
                this.scene.start("Drowning");
            }, this);
        }, this);
    }
}



