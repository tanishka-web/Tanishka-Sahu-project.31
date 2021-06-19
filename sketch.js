const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var plinkos = [];
var particles = [];
function preload() {
    backgroundImg = loadImage("Pinko.jpg");
}

function setup(){
    var canvas = createCanvas(680,700);
    engine = Engine.create();
    world = engine.world;




    ground = new Ground(600,height,1200,20);
    ground1 = new Div(600,height,10,500);
    ground2 = new Div(500,height,10,500);
    ground3 = new Div(400,height,10,500);
    ground4 = new Div(300,height,10,500);
    ground5 = new Div(200,height,10,500);
    ground6 = new Div(100,height,10,500);

    plinko1=new Plinko(200,200,80)
    
  

for (var j=70; j<=width; j = j+70) {
  plinkos.push(new Plinko(j, 75));
}
for (var j=70; j<=width; j=j+70) {
  plinkos.push(new Plinko(j,175));
}
for (var j=70; j<=width; j=j+70) {
  plinkos.push(new Plinko(j,275));
}
for (var j=70; j<=width-10; j=j+70) {
  plinkos.push(new Plinko(j,375));
}


}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
  
    if (frameCount %60 === 0) {
        particles.push(new Particle(random(width/2-30, width/2+30),10,10));
      }
      
      for (var h = 0; h<particles.length; h++) {
        particles[h].display();
      }
  ground.display();
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
 
  for (var j = 0; j<plinkos.length; j++) {
    plinkos[j].display();
  }
}

