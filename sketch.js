
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
createCanvas(800, 700);
engine = Engine.create();
world = engine.world;
Engine.run(engine);

bobObject1 = new Bob(340,500,30);
bobObject2 = new Bob(370,500,30);
bobObject3 = new Bob(400,500,30);
bobObject4 = new Bob(430,500,30);
bobObject5 = new Bob(460,500,30);
roof = new Roof(400,300,250,10)
rope1 = new Rope(bobObject1.body,roof.body,1500,1500);//  ,bobObject1.x,0);
rope2 = new Rope(bobObject2.body,roof.body,bobObject2.x,0)
rope3 = new Rope(bobObject3.body,roof.body,bobObject3.x,0)
rope4 = new Rope(bobObject4.body,roof.body,bobObject4.x,0)
rope5 = new Rope(bobObject5.body,roof.body,bobObject5.x,0)

  
}


function draw() {
  rectMode(CENTER);
  background(500);
  
  drawSprites();
 bobObject1.display();
 
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 
bobObject5.display();
roof.display();
rope1.display();

rope2.display();
rope3.display();
rope4.display();

rope5.display();
}

function mouseDragged (){
  Matter.Body.setPosition(bobObject1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  Matter.Body.setPosition(bobObject1.body,{x:mouseX,y:mouseY})
}






