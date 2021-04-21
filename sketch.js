
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperObject,paperImg;

function preload(){
paperImg=loadImage("paper.png");



}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
paperObject=new paperObject(pos.x,pos.y,this.radius);
  
}


function draw() {
  rectMode(CENTER);
  background(233);

	
	
  
paperObject.display();
  groundObject.display();
  dustbinObj.display();
 keyPressed();
drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

	}
}



