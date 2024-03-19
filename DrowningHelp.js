class DrowningHelp extends Phaser.Scene {
    constructor() {
        super({ key: "DrowningHelp" });
    }
    preload() {
        this.load.video("animation3", "assets/Drowninghelp.mp4");
        this.load.audio("beachSound6", "assets/beachSound1.mp3");
        this.load.audio("scream", "assets/help.wav")


    }
    
    create() {

        let beachAudio1 = this.sound.add("beachSound6");
        beachAudio1.play();
        let scream = this.sound.add("scream");
        scream.volume = 0.1;
        scream.play();
        scream.loop = true;
        
        
        
        
        let video = this.add.video(640, 360, "animation3");
        video.play(); 
        video.once("complete", function() {
            beachAudio1.stop();
            scream.stop();
        this.scene.start("Attention");
    }, this);
    }
}