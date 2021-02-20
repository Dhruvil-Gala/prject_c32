const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;
var engine,world
var ball,rope,ground;
var cranes,crane;
var score=0;
var bakground1;
function preload(){
  crane=loadImage("crane.png");
  background1=loadImage("back.png")
}
function setup() {
  createCanvas(1200,590);
  engine=Engine.create();
  world= engine.world;


 ball=new Ball(505,228);
 rope=new Rope(ball.body,{x:505,y:128});
Ground=Bodies.rectangle(600,580,1200,20,{isStatic:true})
World.add(world,Ground);

box1=new Box(840,185);
box2=new Box(840,255);
box3=new Box(840,325);
box4=new Box(840,395);
box5=new Box(840,465);
box6=new Box(840,535);
box7=new Box(770,185);
box8=new Box(770,255);
box9=new Box(770,325);
box10=new Box(770,395);
//box11=new Box(770,465);
box12=new Boxs(770,535);
//box13=new Box(700,100);
//box14=new Box(700,100);
box15=new Box(700,185);
box16=new Box(700,255);
box17=new Box(700,325);
box18=new Box(700,395);
box19=new Box(700,465);
box20=new Box(700,535);



}

function draw() {
  background(background1); 
  Engine.update(engine);
  rectMode(CENTER)
  rect(600,580,1200,20);
  
 cranes=create=createSprite(300,275,10,10);
  cranes.addImage(crane);
  cranes.scale=1.3;

  ball.display();
  rope.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
 // box11.display();
  box12.display();
 // box13.display();
  //box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  stroke ("black");
  strokeWeight (10)
  fill ("yellow")
  textSize(24);
text("score:"+score,1050,50);
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-600,y:-600});
	}
}
