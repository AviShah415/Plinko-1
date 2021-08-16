class Plinko{
    constructor(x,y){
        var options = {
            restitution : 1,
            friction : 0,
            isStatic: true
        }
        this.r = 10
        this.body = Bodies.circle(x,y,this.r,options)
        World.add(world, this.body)
    }
   
    display(){
        var pos = this.body.position;

        fill("yellow");
        ellipseMode(RADIUS)
        ellipse(pos.x, pos.y, 10, 10)
    }
}