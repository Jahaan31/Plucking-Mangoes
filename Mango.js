class Mango {
    constructor (x,y,r) {
        var options={
            isStatic:true
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r
        this.mangoimage=loadImage("mango.png");
        World.add(world, this.body)
    }
display(){
    imageMode(RADIUS);
    image(this.mangoimage,this.body.position.x, this.body.position.y, this.r, this.r)
}
}

