class Boxs{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:1,
            density:0.04
        }
     this.body=Bodies.rectangle(x,y,70,140,options);
     this.image=loadImage("door.png");
     World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        push();
        imageMode(CENTER);
        translate(pos.x,pos.y);
        rotate (this.body.angle);
        stroke ("green")
        strokeWeight (4)
        fill (255)
        image(this.image,0,0,70,140);

        pop();
    }
}

