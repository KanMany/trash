class Bin {
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        // Matter.Body.setStatic(this.body, isStatic);

    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("white");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
