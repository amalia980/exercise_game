class Player extends GameObject {
    constructor(x, y, ctx, game) {
        super(x, y, ctx);
        this.game = game;
        this.radius = 18;
        this.width = this.radius * 2;
        this.height = this.width;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = "red";
        ctx.stroke();
    }

    update() {
       if (this.game.keys["ArrowRight"]) {
           this.x += 5;
       }
       if (this.game.keys["ArrowLeft"]) {
           this.x -= 5;
       }
       if (this.game.keys["ArrowUp"]) {
           this.y -= 5;
       }
       if (this.game.keys["ArrowDown"]) {
           this.y += 5;
       }
        
    }
}