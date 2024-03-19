class Tools extends Phaser.Scene {
    constructor() {
        super({ key: "Tools" });
    }
    preload() {
        this.load.image("options", "assets/tool.png")
        this.load.image("button1", "assets/buttons/button1.png");
        this.load.image("button2", "assets/buttons/button2.png");
        this.load.image("button3", "assets/buttons/button3.png");
        this.load.image("button4", "assets/buttons/button4.png");
    }
    
    create() {
        this.add.image(640, 360, "options");
        let button1 = this.add.image(500, 350, "button1").setInteractive();
        let button2 = this.add.image(700, 350, "button2").setInteractive();
        let button3 = this.add.image(500, 500, "button3").setInteractive();
        let button4 = this.add.image(700, 500, "button4").setInteractive();
        
        let selectedButtons = [];
        let correctButtons = [button1, button4];
        
        button1.on("pointerdown", function() {
            selectedButtons.push(button1);
            button1.setTint(0xff0000);
        }, this);
        
        button2.on("pointerdown", function() {
            selectedButtons.push(button2);
            button2.setTint(0xff0000);
        }, this);
        
        button3.on("pointerdown", function() {
            selectedButtons.push(button3);
            button3.setTint(0xff0000);
        }, this);
        
        button4.on("pointerdown", function() {
            selectedButtons.push(button4);
            button4.setTint(0xff0000);
        }, this);
        
        this.input.on("pointerup", function() {
            if (selectedButtons.length === 2) {
                let isCorrect = true;
                for (let i = 0; i < 2; i++) {
                    if (!correctButtons.includes(selectedButtons[i])) {
                        isCorrect = false;
                        break;
                    }
                }
                if (isCorrect) {
                    this.scene.start("Saving");
                } else {
                    this.add.text(200, 200, "Incorrect. You failed to save him.", { fontSize: "32px", fill: "#fff" });
                    this.time.delayedCall(2000, function() {
                        this.scene.start("GameMenu");
                    }, [], this);
                }
            }
        }, this);
    }
}
