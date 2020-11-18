
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobj1,bobj2,bobj3,bobj4,bobj5;
var roof,rope1,roof2;
var constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobj1 = new Bob(300,550,60);
	bobj2 = new Bob(350,550,60);
	bobj3 = new Bob(400,550,60);
	bobj4 = new Bob(450,550,60);
	bobj5 = new Bob(500,550,60);
  roof = new Roof(400,580,400,20);
  roof1 = new Roof(400,350,400,15)
  rope1 = new Rope(bobj1.body.X,bobj2.body.X);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("mistyrose");
  


  bobj1.display();
  bobj2.display();
  bobj3.display();
  bobj4.display();
  bobj5.display();
  roof.display();
  rope1.display();
  roof2.display();
}



