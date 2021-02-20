class Ball{
    constructor(x,y){
        var options={
          density:1,
          isStatic:false,
          frictionAir:0.005
        }
        this.body=Bodies.circle(x,y,80,options);
        World.add(world,this.body);
        this.radius=80;
    }
     display(){
         var pos=this.body.position
         push()
      ellipseMode(RADIUS)
       translate(pos.x,pos.y);
       rotate(this.body.angle);
       ellipse(0,0,80,80);

      pop()
    }
}