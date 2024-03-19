class GameMenu extends Phaser.Scene {
    constructor() {
        super({ key: "GameMenu" });
    }

    preload() {
        this.bg = this.load.image("background", "assets/bg1.png");
        this.load.audio("beachSound", "assets/menuMusic.wav")
        
    }

    create() {
        let logo = this.add.image(640, 360, 'background');
        let beachSound = this.sound.add("beachSound");
        beachSound.play();

        let play = this.add.text(550, 550, "Play", {
            
            font: "50px Calibri",
            fill: "#07F392",
            
        });
        play.setInteractive();
        play.on('pointerup', () => {
            beachSound.stop();
        this.scene.start("School");
        });

       
    }
}