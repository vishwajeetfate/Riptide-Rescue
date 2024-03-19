class Lesson extends Phaser.Scene {
    constructor() {
        super({ key: "Lesson" });
    }
    preload() {
        this.load.image("lesson", "assets/w.png");
        this.load.audio("lessonSound", "assets/lesson.wav");

    }
    
    create() {
       this.add.image(640, 360, "lesson").setScale(0.65);
        let lessonAudio = this.sound.add("lessonSound");
        this.sound.stopAll();
        lessonAudio.play();
        
        
        lessonAudio.once("complete", function() {
            lessonAudio.stop();
            this.scene.start("GameMenu");
        }, this);
        
       
    }
}

