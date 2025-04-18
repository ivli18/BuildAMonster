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
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenA.png");
        my.sprite.body.setScale(2,1);

        // Mouth
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY+20, "monsterParts", "mouthB.png");

        // Legs
        my.sprite.LegL = this.add.sprite(this.bodyX-100, this.bodyY+90, "monsterParts", "leg_whiteE.png");
        my.sprite.LegL.flipX = true;
        my.sprite.LegL.setScale(1,1.5)
        
        my.sprite.LegR = this.add.sprite(this.bodyX+100, this.bodyY+80, "monsterParts", "leg_whiteE.png");
        


        //my.sprite.body = this.add.sprite(this.bodyX, this.bodyY+40, "monsterParts", "mouth_closed_fangs.png");
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

       
    }

}