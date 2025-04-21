class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 400;
        this.bodyY = 300;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_whiteA.png");
        my.sprite.body.setScale(2,1.5);

        // Legs
        let legsH = 140;
        my.sprite.LegL = this.add.sprite(this.bodyX-110, this.bodyY+legsH, "monsterParts", "leg_darkC.png").setDepth(-1);
        my.sprite.LegL.flipX = true;
        my.sprite.LegL.setScale(1.75, 1.3);
        my.sprite.LegR = this.add.sprite(this.bodyX+110, this.bodyY+legsH, "monsterParts", "leg_darkC.png").setDepth(-1);
        my.sprite.LegR.setScale(1.75, 1.3);


        // Arms
        let armsH = 30;
        my.sprite.ArmL = this.add.sprite(this.bodyX-190, this.bodyY+armsH, "monsterParts", "arm_darkE.png").setDepth(-1);
        my.sprite.ArmL.flipX = true;
        my.sprite.ArmL.angle = 20;
        my.sprite.ArmL.setScale(1, 1.25);
        my.sprite.ArmR = this.add.sprite(this.bodyX+190, this.bodyY+armsH, "monsterParts", "arm_darkE.png").setDepth(-1);
        my.sprite.ArmR.angle = -20;
        my.sprite.ArmR.setScale(1, 1.25);

        // Eyes
        let eyesH1 = -50;
        let eyesH2 = -20;
        my.sprite.Eye1 = this.add.sprite(this.bodyX-100, this.bodyY+eyesH1, "monsterParts", "eye_cute_light.png");
        my.sprite.Eye2 = this.add.sprite(this.bodyX-50, this.bodyY+eyesH2, "monsterParts", "eye_cute_light.png");
        my.sprite.Eye3 = this.add.sprite(this.bodyX+50, this.bodyY+eyesH2, "monsterParts", "eye_cute_light.png");
        my.sprite.Eye4 = this.add.sprite(this.bodyX+100, this.bodyY+eyesH1, "monsterParts", "eye_cute_light.png");

        my.sprite.Eye5 = this.add.sprite(this.bodyX+50, this.bodyY+eyesH2-40, "monsterParts", "eye_closed_feminine.png");
        my.sprite.Eye6 = this.add.sprite(this.bodyX-50, this.bodyY+eyesH2-40, "monsterParts", "eye_closed_feminine.png");
        my.sprite.Eye6.flipX = true;

        // Horns
        let hornH = - 100;
        my.sprite.Horn1 = this.add.sprite(this.bodyX-160, this.bodyY+hornH, "monsterParts", "detail_yellow_horn_large.png");
        my.sprite.Horn1.flipX = true;
        my.sprite.Horn1.setScale(1.3, 1.3);
        my.sprite.Horn2 = this.add.sprite(this.bodyX+160, this.bodyY+hornH, "monsterParts", "detail_yellow_horn_large.png");
        my.sprite.Horn2.setScale(1.3, 1.3);




        // Input Handling
        this.keys = this.input.keyboard.addKeys("S,F,A,D");

        my.sprite.mouthSmile = this.add.sprite(this.bodyX, this.bodyY+60, "monsterParts", "mouthB.png");
        my.sprite.mouthFangs = this.add.sprite(this.bodyX, this.bodyY+60, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.mouthFangs.setScale(1.6); 
        my.sprite.mouthSmile.setVisible(true);
        my.sprite.mouthFangs.setVisible(false);
    }

    update() {
        let my = this.my;
        let speed = 2;

        // Handle smile/fang toggle
        if (Phaser.Input.Keyboard.JustDown(this.keys.S)) {
            my.sprite.mouthSmile.setVisible(true);
            my.sprite.mouthFangs.setVisible(false);
        }
        if (Phaser.Input.Keyboard.JustDown(this.keys.F)) {
            my.sprite.mouthSmile.setVisible(false);
            my.sprite.mouthFangs.setVisible(true);
        }

        // Handle movement
        if (this.keys.A.isDown) {
            for (let key in my.sprite) {
                my.sprite[key].x -= speed;
            }
        }
        if (this.keys.D.isDown) {
            for (let key in my.sprite) {
                my.sprite[key].x += speed;
            }
        }
    }


}