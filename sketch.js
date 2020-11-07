const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5, ground;
var log1, log2, log3, log4;
var pig1, pig2;
var bird1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(180,370,50,50);
    box2 = new Box(280,370,50,50);
    box3 = new Box(180,300,50,50);
    box4 = new Box(280,300,50,50);
    box5 = new Box(210,230,50,50);
    ground = new Ground(200,height,400,20);
    log1 = new log(230,350,150,PI/2);
    log2 = new log(230,280,150,PI/2);
    log3 = new log(200,230,100,PI/7);
    log4 = new log(240,230,100,-PI/7);
    pig1 = new pig(210,300);
    pig2 = new pig(210,370);
    bird1 = new bird(50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    log1.display();
    box3.display();
    box4.display();
    box5.display();
    log2.display();
    log3.display();
    log4.display();
    pig1.display();
    pig2.display();
    bird1.display();

}