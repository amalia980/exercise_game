class Game {
    constructor(ctx) {
        this.gameObjects = [];
        this.level = 0;
        this.score = 0;

        this.ctx = ctx;

        const player = new Player(120, 300, ctx, this);

        this.gameObjects.push(player);


        this.gameObjects.push(new Coin(400, 350, ctx, this));

        this.keys = {};

        document.addEventListener("keydown", function(event){
            this.keys[event.key] = true;
        }.bind(this) );

        document.addEventListener("keyup", function(event){
            delete this.keys[event.key];
        }.bind(this) );
    }

    // rita pa skarmen
    draw() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, 640, 480);

        this.gameObjects.forEach(function(obj){
            obj.draw();
        });

        this.drawScore();
    }

    update() {

        // kasta en tarning.
        if (getRandomNumber(0, 35) === 1) {
            this.insertEnemy();
        }

        this.gameObjects.forEach(function(obj){
            obj.update();
        });
        requestAnimationFrame(() => this.update());
        this.draw();
    }

    start() {
        this.update();
    }

    removeObject(obj) {
        this.gameObjects = this.gameObjects.filter(gameObj => gameObj != obj);
    }

    whenCarrotRemoved() {
        const x = getRandomNumber(0, 640);
        const y = getRandomNumber(0, 480);
        this.gameObjects.push(new Coin(x, y, ctx, this));

        this.score += 1;
    }

 
    whenHitDuck(x, y, duck) {
        this.score = 0;
        this.gameObjects.push(new Explosion(x, y, ctx, this));
        this.removeObject(duck);
    }

    insertEnemy() {
        const x = getRandomNumber(0, 640);
        const y = -128;
        this.gameObjects.push(new Enemy(x, y, ctx, this, 32, 32));
    }

    drawScore() {
        this.ctx.font = "22px Sans-Serif";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(`score: ${this.score}`, 16, 32);
    }
}