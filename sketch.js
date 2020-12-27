const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var ground2,ground3
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25
var hexagon
var rope1
function preload(){

}
function setup(){
    createCanvas(1275, 600);

	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.
    box1 = new Box(410,530,30,40)
    box2 = new Box(440,530,30,40)
    box3 = new Box(470,530,30,40)
    box4 = new Box(500,530,30,40)
    box5 = new Box(530,530,30,40)
    box6 = new Box(560,530,30,40)
    box7 = new Box(590,530,30,40)
    box8 = new Box(440,510,30,40)
    box9 = new Box(470,510,30,40)
    box10 = new Box(500,510,30,40)
    box11 = new Box(530,510,30,40)
    box12 = new Box(560,510,30,40)
    box13 = new Box(470,480,30,40)
    box14 = new Box(500,480,30,40)
    box15 = new Box(530,480,30,40)
    box16 = new Box(500,450,30,40)
    box17 = new Box(840,230,30,40)
    box18 = new Box(870,230,30,40)
    box19 = new Box(900,230,30,40)
    box20 = new Box(930,230,30,40)
    box21 = new Box(960,230,30,40)
    box22 = new Box(870,210,30,40)
    box23 = new Box(900,210,30,40)
    box24 = new Box(930,210,30,40)
    box25 = new Box(900,180,30,40)
    ground2 = new Ground(500,550,210,20)
    ground3 = new Ground(900,250,150,20)
    hexagon = new Polygon(200,350,60,60)
    rope1 = new Rope(hexagon.body,{x:200,y:350})
    Engine.run(engine);
}
function draw(){
    rectMode(CENTER);
    background(0);
    drawSprites();
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display() 
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()
    box21.display()
    box22.display()
    box23.display()
    box24.display()
    box25.display()
    ground2.display()
    ground3.display()
    hexagon.display()
    rope1.display()
}
function mouseDragged(){
    Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    rope1.fly()
}
function keyPressed(){
    if (keyCode == 32){
      Matter.Body.setPosition(hexagon.body,{x:200,y:350})
      rope1.attach(hexagon.body)
    }
  }