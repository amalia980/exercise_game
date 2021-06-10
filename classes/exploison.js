  
class Explosion extends GameObject {
    constructor(x, y, ctx, game) {
        super(x, y, ctx);
        this.game = game;

        const width = 32;
        const height = 32;

        this.scale = getRandomNumber(1, 10);
        this.width = width * this.scale;
        this.height = height * this.scale;
        this.radius = this.width;

        this.counter = 0;
    }

    draw() {

        this.ctx.drawImage(
            EXPLOSION_IMAGES[this.counter % EXPLOSION_IMAGES.length], // picture to draw
            this.x,             // horisontal cordinate
            this.y,             // vertical cordinate
            this.width,         // width
            this.height         // height
        );


        if (this.counter < EXPLOSION_IMAGES.length) {
            this.counter += 1;
        } else {
            this.game.removeObject(this);
        }
    }


    update() {

    }

}