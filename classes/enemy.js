class Enemy extends GameObject {
    constructor(x, y, ctx, game, width, height) {
        super(x, y, ctx);
        this.game = game;
        this.width = width;
        this.height = height;
        this.speed = getRandomNumber(3, 5);
    }

    draw() {
        this.ctx.drawImage(DUCK_IMAGE, 
            this.x,
            this.y,
            this.width,
            this.height
            );
    }

    update() {
        this.y += this.speed;

        this.game.gameObjects.forEach(function(gameObject){
            if(gameObject.constructor.name === "Player") {
                
                /*================================ y ===============================*/

                if (this.y - this.height <= gameObject.y + gameObject.radius) {

                    if (this.y + this.height >= gameObject.y - gameObject.radius) {
                      

                        /* ========================= x ================================ */
               
                        if (this.x - this.width <= gameObject.x + gameObject.radius) {
                            if (this.x + this.width >= gameObject.x - gameObject.radius) {
                                this.game.collide();
                      
                            }
                        }

                    }
                }

            }
        }.bind(this)   );

        if (this.y + this.height > 480) {
            this.game.removeObject(this);


        }
    }
}