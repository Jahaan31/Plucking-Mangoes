class Constraint{
    constructor(A,B){
        var options={
        bodyA:A,
        pointB:B,
        stiffness:0.4,
        length:10
        }
        this.body = Matter.Constraint.create(options);
        this.pointB = B
        World.add(world, this.body);
    }

    fly(){
        this.body.bodyA = null;     
    }

    attach(abc){
        this.body.bodyA = abc
    }

    display(){
        if(this.body.bodyA)
            line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.pointB.x, this.pointB.y);
    }
}