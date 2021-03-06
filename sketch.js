
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var world,boy;
var stone;
var chain;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,50,30);
	mango2=new mango(1000,100,30);
	mango3=new mango(1180,140,30);
	mango4=new mango(1070,150,30);
	mango5=new mango(1140,220,30);
	mango6=new mango(1230,220,30);
	mango7=new mango(1000,220,30);
	mango8=new mango(900,180,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stone = new Stone(230,400,50,50);

	chain = new Chain(stone.body,{x:230,y:400})
	
	Engine.run(engine);

}

function draw() {
  
  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  treeObj.display();
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  stone.display();

  groundObject.display();

  chain.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
   chain.fly();
}

function keyPressed(){
if(keyCode === 32){
  Matter.Body.setPosition(stone.body,{x:230,y:400});
  chain.attach(stone.body);
  }
}

function detectCollision(lstone,lmango){
	mangoPos = lmango.body.position;
	stonePos = lstone.body.position;
 
	var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);
 
	if(distance <= lstone.r + lmango.r){
	   Matter.Body.setStatic(lmango.body,false);
	}
 }

 
	 
