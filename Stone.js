class Stone {
    constructor (x,y,r) {
        var options={
            isStatic:false,
            restitution:0, 
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r
        this.stoneimage=loadImage("stone.png");
        World.add(world, this.body)
    }
display(){
    imageMode(RADIUS);
    image(this.stoneimage,this.body.position.x, this.body.position.y, this.r, this.r)
}
}
