const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, trashS1, trashS2, trashM;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,50)
	paper = new Paper(150,320,50)

	trashM = new Trash(900,365,200,20)

	trashS1 = new Trash(800,325,20,100)

	trashS2 = new Trash(1000,325,20,100)

	Engine.run(engine);
  
}


function draw() {
 
  background(217, 255, 251);
  Engine.update(engine);
  
  ground.display();
  paper.display();
  trashS1.display();
  trashS2.display();
  trashM.display();

 
  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:115,y:-115});
	}
}



