class Cannonball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 40;
        this.image = loadImage("./assets/cannonball.png");

        var op = {
            isStatic: true,
            density: 1.0,
            friction: 1.0,
            restitution: 0.8,
        };
        this.body = Bodies.circle(this.x, this.y, this.r, op);
        World.add(world, this.body);
    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }

    shoot(){
        var velocity= p5.Vector.fromAngle(cannon.angle);
        velocity.mult(15);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body, {x:velocity.x,y:velocity.y});
    }
}
