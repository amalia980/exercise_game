class GameObject {
    constructor(x, y, ctx, game) {
        this.x = x;     // where are we horisontally?
        this.y = y;     // where are we vertically?
        this.ctx = ctx;
        this.game = game;
    }

    draw() {

    }

    update() {

    }

    isTouching(obj) {
        // players head smaller than coins foot?
        if (this.y <= obj.y + obj.height) {

            // players foot under coins head?
            if (this.y + this.height >= obj.y) {

                // players left side within coims coins right side?
                if (this.x <= obj.x + obj.width) {

                    // players right side within coins left side?
                    if (this.x + this.width >= obj.x) {
                        return true;
                    }
                }
            }
        }
    }
}