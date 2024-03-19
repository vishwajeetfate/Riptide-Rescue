class Attention extends Phaser.Scene {
    constructor() {
        super({ key: "Attention" });
    }
    preload() {
        this.load.video("animation4", "assets/Attention.mp4");
        this.load.audio("beachSound7", "assets/beachSound1.mp3");
        this.load.audio("scream", "assets/help.wav")
        this.load.audio("hey", "assets/heyShout.wav")


    }
    
    create() {

        let beachAudio1 = this.sound.add("beachSound7");
        beachAudio1.play();
        let scream = this.sound.add("scream");
        scream.volume = 0.01;
        scream.play();
        setInterval(() => {
            scream.loop = true;

        }, 15000);
        
        let hey = this.sound.add("hey");

        hey.play();

        
        
        
        
        let video = this.add.video(640, 360, "animation4");
        video.play();
        video.once("complete", function() {
            beachAudio1.stop();
        this.scene.start("Tools");
    }, this);
    }
}