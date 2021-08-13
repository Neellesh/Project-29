const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var wall1 , wall2 , ground ;
var stones = [];
var jointpoint



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(width/2,height-10,width,15);
  wall1 = new Base(100,height-160,225,100);
  wall2 = new Base(width-100,height-160,225,100);
  jointpoint = new Base(width - 600, height/2+10, 40, 20, "#8d6e63", true);

  bridge = new Bridge(14,{x:150,y:height-160});

  for(var i = 0; i <= 8; i++ ){
    var x = random(width/2 -200,width/2 + 300);
    var y = random(-10,140);
    var stone = new Stone(x,y,80,80);
    stones.push(stone);
  }

  Composite.add(bridge.body,jointpoint);
  var joinlink = new Link (bridge,jointpoint)

}

function draw() {
  background(51);
  Engine.update(engine);

  ground.display();
  wall1.display();
  wall2.display();
  bridge.show();

  

  for (var stone of stones) { 
    stone.display(); }

}
