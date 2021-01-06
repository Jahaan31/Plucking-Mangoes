var tree, ground, stone,constraint;
var mango1,mango2,mango3,mango4,mango5,mango6;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	boyi = loadImage("boy.png");
	treei = loadImage("tree.png")
}


function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);	

	ground = new Ground(500,690,1000,20);
	stone = new Stone(200,420,50)
	mango1 = new Mango(700,350,60);
	mango2 = new Mango(750,300,60);
	mango3 = new Mango(800,325,60);
	mango4 = new Mango(850,200,60);
	mango5 = new Mango(900,280,60);
	mango6 = new Mango(950,310,60);

	constraint = new Constraint(stone.body, {x:160, y:560})
}


function draw() {
  imageMode(CENTER);
  background("lightgrey");

	ground.display();
	stone.display();

	image(boyi, 200, 620, 150, 250)
	image(treei, 800,420,400,600)

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();

	algorithm(mango1,stone);
	algorithm(mango2,stone);
	algorithm(mango3,stone);
	algorithm(mango4,stone);
	algorithm(mango5,stone);
	algorithm(mango6,stone);

	constraint.display();

	textSize(30);
	text("Press space to restart", 150, 50);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y: mouseY}) 
}

function mouseReleased(){
	constraint.fly();
}

function keyPressed(){
	if(keyCode===32){
		constraint.attach(stone.body);
	}
}

function algorithm(a,b){
	if(a.body.position.x-b.body.position.x < a.r + b.r &&
	   b.body.position.x-a.body.position.x < a.r + b.r &&
	   a.body.position.y-b.body.position.y < a.r + b.r &&
	   b.body.position.y-a.body.position.y < a.r + b.r){

		Matter.Body.setStatic(a.body, false);
	}
}