
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1365, 400);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	red1=new Bin(1100, 400,200,20)
	red2=new Bin(1000,360,20,100)
	red3=new Bin(1200,360,20,100)
	ground = new Ground(width / 2, height, width, 20);
	paper = new Paper(50, 350, 15);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  red1.display();
  red2.display();
  red3.display();
  if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:1.9,y:-1.9})
}
  drawSprites();
 
}



