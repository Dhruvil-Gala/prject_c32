class Rope{
    constructor(bodyA,pointb){
        var options={
            bodyA:bodyA,
            pointB:pointb,
            stiffness:1.2,
            length:250,

        }
        this.constraint=Matter.Constraint.create(options)
        World.add(world,this.constraint);
    }
    display(){

        line(this.constraint.bodyA.position.x,this.constraint.bodyA.position.y,   this.constraint.pointB.x  ,this.constraint.pointB.y)
    }
}