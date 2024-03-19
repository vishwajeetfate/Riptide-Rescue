class Intro extends Phaser.Scene {
    constructor() {
        super({ key: "LoadingScreen" });
    }

    preload() {
        this.load.image("logo", "assets/logo.png");
    }

    create() {
        let logo = this.add.image(640, 360, 'logo');
        let tween = this.tweens.add({
            targets: logo,
            scaleX: 0.5,
            scaleY: 0.5,
            duration: 1000, // 1 second
            ease: 'Linear',
            repeat: 0,
            yoyo: false
        });
        this.add.text(500, 550, "Riptide Rescue", {
            
            font: "50px Serif",
            fill: "#ffffff",
            
        });

        
        setTimeout(() => {
            this.scene.start("GameMenu")
        }, 5000);
        
        
        
    }
    
    
}
