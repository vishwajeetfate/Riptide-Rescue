class Saving extends Phaser.Scene {
    constructor() {
        super({ key: "Saving" });
    }
    preload() {
        this.load.image("saving", "assets/saving.png");
        this.load.audio("beachSound", "assets/beachSound1.mp3");

    }
    
    create() {
       let save =  this.add.image(640, 360, "saving").setScale(1);
        let beachAudio1 = this.sound.add("beachSound");
        beachAudio1.play();
        let tween = this.tweens.add({
            targets: save,
            scaleX: 1.5,
            scaleY: 1.5,
            duration: 10000, 
            ease: 'Linear',
            repeat: 0,
            yoyo: false
        });
        setTimeout(() => {
            this.scene.start("Cpr")
            beachAudio1.stop();
        }, 5000);
        
       
    }
}


