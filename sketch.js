
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world, engine;
var ground;
var ball
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var ball_options = {
    restitution : 1.0
  }
  ball = Bodies.circle(200,200,15,ball_options);
  
  var ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ball);

  
  

 
}

function draw() {
  background("lightblue");  
Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,15,15);
 
}

