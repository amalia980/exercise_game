  
class Player extends GameObject {
    constructor(x, y, ctx, game) {
        super(x, y, ctx);
        this.game = game;
        this.radius = 32;
        this.width = this.radius;
        this.height = this.width;
        this.rotation = 90;
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.translate(this.width / 2, this.height / 2);
        const radians = (this.rotation - 90 - 180) * (Math.PI / 180);
        this.ctx.rotate(radians);

        this.ctx.translate(-(this.width / 2), -(this.height / 2));

        this.ctx.drawImage(
            PLAYER_IMAGE,     // picture to draw
            0,             // horisontal cordinate
            0,             // vertical cordinate
            this.width,         // width
            this.height         // height
        );

        this.ctx.restore();
    }

    

    update() {
        // right
        if (this.game.keys["ArrowRight"]) {
            this.x += 5;
            this.rotation = 360;
        }

        // left
        if (this.game.keys["ArrowLeft"]) {
            this.x -= 5;
            this.rotation = 180;
        }

        // up
        if (this.game.keys["ArrowUp"]) {
            this.y -= 5;
            this.rotation = 270;
        }

        // down
        if (this.game.keys["ArrowDown"]) {
            this.y += 5;
            this.rotation = 90;
        }

        this.game.gameObjects.forEach(function(gameObject){

            if(gameObject.constructor.name === "Enemy") {
                
                if (this.isTouching(gameObject)) {
                    this.game.whenHitDuck(this, gameObject);
                }
            }
        }.bind(this)   );
    }
}