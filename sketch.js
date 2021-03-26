const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    Rubber1= new Rubber(390,320,10);
    Rubber2= new Rubber(375,340,10);
    Rubber3= new Rubber(360,200,10);
    Rubber4= new Rubber(345,260,10);
    Rubber5= new Rubber(330,360,10);
    Rubber6= new Rubber(310,220,10);
    Rubber7= new Rubber(290,280,10);
    
    iron1 = new Iron(600,300,90,50);
    
    stone1 = new Stone(150,300,60,40);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();

    hammer.display();

    Rubber1.display();
    Rubber2.display();
    Rubber3.display();
    Rubber4.display();
    Rubber5.display();
    Rubber6.display();
    Rubber7.display();
    
    iron1.display();

    stone1.display();
}