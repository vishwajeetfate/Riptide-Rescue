class Quiz1 extends Phaser.Scene {
    constructor() {
        super({ key: "Quiz1" });
    }

    preload() {
        this.bg = this.load.image("quiz_1", "assets/quiz_scene1.png");
        this.load.image("yesButton", "assets/yes_button.png");
        this.load.image("noButton", "assets/no_button.png");

        
    }

    create() {
        this.add.image(640, 360, 'quiz_1');
        let yesButton = this.add.image(500, 450, "yesButton").setInteractive();
        let noButton = this.add.image(750, 450, "noButton").setInteractive();

        yesButton.on('pointerup', function () {
            this.scene.start('Quiz2');
          }, this);
          
        noButton.on('pointerup', function () {
            this.scene.start('GameMenu');
          }, this);

       
    }
}