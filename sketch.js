const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4, bob5
var rope1, rope2, rope3, rope4, rope5

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	engine = Engine.create();
	world = engine.world;

	var roof_options={isStatic:true}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
	World.add(world,roof);

	bob1 = new bob(340)
	bob1.atw()
	rope1 = new rope(-50, bob1.bob)
	rope1.atw()
	bob2 = new bob(370)
	bob2.atw()
	rope2 = new rope(-25, bob2.bob)
	rope2.atw()
	bob3 = new bob(400)
	bob3.atw()
	rope3 = new rope(0, bob3.bob)
	rope3.atw()
	bob4 = new bob(430)
	bob4.atw()
	rope4 = new rope(25, bob4.bob)
	rope4.atw()
	bob5 = new bob(460)
	bob5.atw()
	rope5 = new rope(50, bob5.bob)
	rope5.atw()
	Engine.run(engine);
}

function draw() {
  background("#99004d");
  rect(roof.position.x,roof.position.y,230,20);
	bob1.display()
	bob2.display()
	bob3.display()
	bob4.display()
	bob5.display()
	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()
	Body.setPosition(bob2.bob, {x:370,y:550})
	Body.setPosition(bob3.bob, {x:400,y:550})
	Body.setPosition(bob4.bob, {x:430,y:550})
}

function keyPressed() {
	if (keyCode==LEFT_ARROW) {
		Body.applyForce(bob1.bob,{x:bob1.bob.position.x,y:bob1.bob.position.y},{x:-0.04,y:0})
	}
	if (keyCode==RIGHT_ARROW) {
		Body.applyForce(bob5.bob,{x:bob5.bob.position.x,y:bob5.bob.position.y},{x:0.04,y:0})
	}
}
