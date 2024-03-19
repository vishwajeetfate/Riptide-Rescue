class School extends Phaser.Scene {
    constructor() {
        super({ key: "School" });
    }

    preload() {
        this.load.image("scho", "assets/schoolpic.png");
    }

    create() {
       let sc =  this.add.image(640, 360, 'scho');
       let tween = this.tweens.add({
        targets: sc,
        scaleX: 1.5,
        scaleY: 1.5,
        duration: 5000, 
        ease: 'Linear',
        repeat: 0,
        yoyo: false,
        onComplete: function() {
            this.scene.start("Conversation");
        },
        onCompleteScope: this
       });
        
      
    }
}