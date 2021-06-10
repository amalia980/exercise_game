  
class Player extends GameObject {
    constructor(x, y, ctx, game) {
        super(x, y, ctx);
        this.game = game;
        this.radius = 32;
        this.width = this.radius;
        this.height = this.width;
    }

    draw() {
        this.ctx.drawImage(
            PLAYER_IMAGE,     // picture to draw
            this.x,             // horisontell cordinate
            this.y,             // vertical cordinate
            this.width,         // width
            this.height         // height
        );
    }


    update() {
        // right
        if (this.game.keys["ArrowRight"]) {
            this.x += 5;
        }

        // left
        if (this.game.keys["ArrowLeft"]) {
            this.x -= 5;
        }

        // up
        if (this.game.keys["ArrowUp"]) {
            this.y -= 5;
        }

        // down
        if (this.game.keys["ArrowDown"]) {
            this.y += 5;
        }

        this.game.gameObjects.forEach(function(gameObject){

            if(gameObject.constructor.name === "Enemy") {
                
                if (this.isTouching(gameObject)) {
                    this.game.whenHitDuck(this.x, this.y, gameObject);
                }
            }
        }.bind(this)   );
    }
}