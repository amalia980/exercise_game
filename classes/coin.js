  
class Coin extends GameObject {
    constructor(x, y, ctx, game) {
        super(x, y, ctx);
        this.game = game;
        this.radius = 8;
        this.width = this.radius * 2;
        this.height = this.width;
    }

    draw() {
        this.ctx.drawImage(
            CARROT_IMAGE, 
            this.x,
            this.y,
            this.width,
            this.height
            );
    }


    update() {
        this.game.gameObjects.forEach(function(gameObject){
            if(gameObject.constructor.name === "Player") {
                if (this.isTouching(gameObject)) {
                    this.game.whenCarrotRemoved();
                    this.game.removeObject(this);
                }
            }
        }.bind(this)   );
    }
}