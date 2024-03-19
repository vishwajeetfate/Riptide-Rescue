class Quiz2 extends Phaser.Scene {
    constructor() {
        super({ key: "Quiz2" });
    }

    preload() {
        this.bg = this.load.image("quiz_2_1", "assets/quiz2_1.png");
        this.load.audio("a", "assets/quizMusic.wav");
        this.load.audio("quizc", "assets/correct.wav");
        this.load.audio("quizw", "assets/wrong.wav");
        

    }

    create() {
        this.add.image(640, 360, 'quiz_2_1');
        let audio = this.sound.add('a');
        audio.play();
        let quizc = this.sound.add('quizc');
        let quizw = this.sound.add('quizw');
        
    
        let options = [
            "Properly disposing of waste",
            "Using eco-friendly products",
            "Supporting beach clean-up programs",
            "All of the above"
        ];
        let answer = 4;

        this.option1 = this.add.text(320, 300, options[0], {
            font: '24px Arial',
            fill: '#000',
            align: 'center',
        });
        this.option1.setInteractive();
        this.option1.on('pointerdown', () => {
            if (answer === 1) {
                this.add.text(320, 500, 'Correct', {
                    font: '36px Arial',
                    fill: '#24F307',
                    align: 'center',
                });
                quizc.play();
                this.time.addEvent({
                    delay: 2000,
                    callback: () => {
                        this.scene.start('Quiz3');
                    }
                });
            } else {
                this.add.text(320, 500, 'Wrong', {
                    font: '36px Arial',
                    fill: '#F30707',
                    align: 'center',
                });
                quizw.play();
                this.time.addEvent({
                    delay: 2000,
                    callback: () => {
                        this.scene.start('Quiz3');
                    }
                });
            }
        });
    
        this.option2 = this.add.text(320, 350, options[1], {
            font: '24px Arial',
            fill: '#000',
            align: 'center',
        });
        this.option2.setInteractive();
        this.option2.on('pointerdown', () => {
            if (answer === 2) {
                this.add.text(320, 500, 'Correct', {
                    font: '36px Arial',
                    fill: '#24F307',
                    align: 'center',
                });
                quizc.play();
                this.time.addEvent({
                    delay: 2000,
                    callback: () => {
                        this.scene.start('Quiz3');
                    }
                });
            } else {
                this.add.text(320, 500, 'Wrong', {
                    font: '36px Arial',
                    fill: '#F30707',
                    align: 'center',
                });
                quizw.play();
                this.time.addEvent({
                    delay: 2000,
                    callback: () => {
                        this.scene.start('Quiz3');
                    }
                });
            }
            
        });

        this.option3 = this.add.text(320, 400, options[2], {
            font: '24px Arial',
            fill: '#000',
            align: 'center',
        });
        this.option3.setInteractive();
        this.option3.on('pointerdown', () => {
            if (answer === 3) {
                this.add.text(320, 500, 'Correct', {
                    font: '36px Arial',
                    fill: '#24F307',
                    align: 'center',
                });
                quizc.play();
                this.time.addEvent({
                    delay: 2000,
                    callback: () => {
                        this.scene.start('Quiz3');
                    }
                });
            } else {
                this.add.text(320, 500, 'Wrong', {
                    font: '36px Arial',
                    fill: '#F30707',
                    align: 'center',
                });
                quizw.play();
                this.time.addEvent({
                    delay: 2000,
                    callback: () => {
                        this.scene.start('Quiz3');
                    }
                });
            }
            
        });

        this.option4 = this.add.text(320, 450, options[3], {
            font: '24px Arial',
            fill: '#000',
            align: 'center',
        });
        this.option4.setInteractive();
        this.option4.on('pointerdown', () => {
            if (answer === 4) {
                this.add.text(320, 500, 'Correct', {
                    font: '36px Arial',
                    fill: '#24F307',
                    align: 'center',
                });
                quizc.play();
                this.time.addEvent({
                    delay: 2000,
                    callback: () => {
                        this.scene.start('Quiz3');
                    }
                });
            } else {
                this.add.text(320, 500, 'Wrong', {
                    font: '36px Arial',
                    fill: '#F30707',
                    align: 'center',
                });
                quizw.play();
                this.time.addEvent({
                    delay: 2000,
                    callback: () => {
                        this.scene.start('Quiz3');
                    }
                });
            }
            
        });
    }
}