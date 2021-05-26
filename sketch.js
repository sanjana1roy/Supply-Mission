//declaring variables

var helicopterAnimation, helicopter, package, packageAnimation;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//loading Images

	helicopterAnimation = loadAnimation("helicopter.png")
	packageAnimation = loadAnimation("package.png")
}

function setup() {

	//creating the canvas
	var canvas = createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	//creating the package
	package = createSprite(width/2, 80, 10, 10);
	package.addAnimation("Package", packageAnimation);
	package.scale=0.2

	//creating the helicopter
	helicopter = createSprite(width/2, 200, 10,10);
	helicopter.addAnimation("Heliopter", helicopterAnimation);
	helicopter.scale=0.6

	//creating the ground
	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255);

	//creating packageBody and adding it to the world
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	//creating groundBody and adding it to the world
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);

}


function draw() {

  //Background color	
  background(0);
  rectMode(CENTER);

  //setting package co-ordinates
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
 
  //calling keyPressed function
  keyPressed();

  //drawing the sprites
  drawSprites();
 }

 //keyPressed function
function keyPressed() {
	
  if (keyCode === DOWN_ARROW) {
    
	Matter.Body.setStatic(packageBody, false);
	
  }
}
