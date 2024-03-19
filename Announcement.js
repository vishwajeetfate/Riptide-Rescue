class Announcement extends Phaser.Scene {
    constructor() {
        super({ key: "Announcement" });
    }

    preload() {
        this.load.audio("audio", "assets/announce.mp3");
        this.load.video("announce", "assets/announcement.mp4");
    }

    create() {
        let audio = this.sound.add('audio');
        audio.play();

        let video = this.add.video(640, 360, "announce");
        video.play();
        video.once("complete", function() {
            audio.stop();
            this.scene.start("Quiz1");
        }, this);
      
    }
}