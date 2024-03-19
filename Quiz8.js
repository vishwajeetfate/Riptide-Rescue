class Quiz8 extends Phaser.Scene {
    constructor() {
        super({ key: "Quiz8" });
    }

    preload() {
        this.bg = this.load.image("quiz_8", "assets/done.png");
        this.load.audio("complete", "assets/quiz_complete.wav");

    }

    create() {
        this.add.image(640, 360, 'quiz_8');
        let audio = this.sound.add('complete');
        audio.play();
        setTimeout(() => {
            this.scene.start("Travel")
        }, 5000);
    }
}