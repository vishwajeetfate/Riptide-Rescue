class Travel extends Phaser.Scene {
    constructor() {
        super({ key: "Travel" });
    }

    preload() {
        this.load.audio("busAudio", "assets/bus.wav");
        this.load.video("bus", "assets/Travel.mp4");
    }

    create() {
        let audio = this.sound.add('busAudio');
        audio.play();

        let video = this.add.video(640, 360, "bus");
        audio.duration = video.duration;
        video.play();
        video.once("complete", function() {
            audio.stop();
            this.scene.start("Arrival");
        }, this);
      
    }
}