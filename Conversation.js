class Conversation extends Phaser.Scene {
    constructor() {
        super({ key: "Conversation" });
    }
    preload() {
        this.load.video("animation", "assets/Conversation.mp4");
        this.load.audio("convers", "assets/conversation.wav")
    }
    
    create() {

        let conAudio = this.sound.add("convers");
        conAudio.play();

        let video = this.add.video(640, 360, "animation");
        let a =  video.play();
        video.once("complete", function() {
            conAudio.stop();
        this.scene.start("Announcement");
    }, this);
    }
}