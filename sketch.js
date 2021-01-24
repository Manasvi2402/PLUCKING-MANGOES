
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var world,boy,boyImg;

function preload(){
	boyImg=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
  world = engine.world;
  
  boy = createSprite(200,500,200,300);
  boy.addImage(boyImg);
  boy.scale = 0.15;

	mango1=new mango(1100,100,30);
  mango2=new mango(1160,130,30);
	mango3=new mango(1050,150,30);
	mango4=new mango(900,200,30);
	mango5=new mango(1200,200,30);
	mango6=new mango(1000,210,30);
	mango7=new mango(1000,80,30);
	mango8=new mango(940,180,30);
	mango9=new mango(1120,230,30);
	mango10=new mango(1080,50,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new stone(120,420,20);
  slingShot1=new slingshot(stoneObj.body,{x:120,y:420});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
 
  //image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  
  groundObject.display();
  drawSprites();
  stoneObj.display();
  slingShot1.display();
  textSize(20)
  text("Press SPACE to get a second chance to play!!",100,50);
  
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);

}
function mouseDragged(){
Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot1.fly()
}
function detectCollision(lstone,lmango){
 mangoBodyPosition = lmango.body.position
 stoneObjBodyPosition = lstone.body.position

 var distance = dist(stoneObjBodyPosition.x,stoneObjBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
 if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
 }
 
}
function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(stoneObj.body,{x:240,y:500})
    slingShot1.attach(stoneObj.body);
  }
}