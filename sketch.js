
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;

var paperObject



function setup() {
	createCanvas(900, 400);

	engine = Engine.create();
	world = engine.world;
	
	Engine.run(engine);
  
  paperObject = new Paper(50,360,15) 
  line1 = new Dustbin(680,370,200,20)
  line2 = new Dustbin(580,330,40,100)
  line3 = new Dustbin(780,330,40,100)
  ground1 = new Ground(450,390,900,20)

}


function draw() {
  background(0);
  
  paperObject.display()
  line1.display()
  line2.display()
  line3.display()
  ground1.display()
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:40,y:-30});
  
  }
}

 