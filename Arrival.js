class Arrival extends Phaser.Scene {
    constructor() {
        super({ key: "Arrival" });
    }

    preload() {
        this.load.image("instruct", "assets/arrival.png")
        this.load.audio("beachGuardinst", "assets/instruction.wav");
    }

    create() {
        let img2 = this.add.image(640, 360, "instruct").setScale(1);
        let audio = this.sound.add('beachGuardinst');
        audio.play();

        let tween = this.tweens.add({
            targets: img2,
            scaleX: 1.5,
            scaleY: 1.5,
            duration: 10000, 
            ease: 'Linear',
            repeat: 0,
            yoyo: false
        });

        audio.once("complete", function() {
            audio.stop();
            this.scene.start("bq1");
        }, this);
}
}