class DoneCleaning extends Phaser.Scene {
    constructor() {
        super({ key: "DoneCleaning" });
    }

    preload() {
        this.bg = this.load.image("doneClean", "assets/doneCleaning-03.png");
        this.load.audio("done2", "assets/quiz_complete.wav")

        
    }

    create() {
        this.add.image(640, 360, 'doneClean');
       let audiodoneclean = this.sound.add("done2");
        audiodoneclean.play();
        audiodoneclean.once("complete", function() {
            audiodoneclean.stop();
            setTimeout(() => {
                this.scene.start("Playing")
            }, 5000);
        }, this);
    }
}