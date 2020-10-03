
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground1;   


function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper1 = new Paper(5,200,20,20);
	ground1 = new Ground(200,300,800,20);

	
}


function draw() {
  rectMode(CENTER);
  background("red");
  
	console.log(paper1.x);

	paper1.display();
	ground1.display();

  drawSprites();
 
}



