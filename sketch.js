const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ballObj;
var stick;
var chain;
function preload(){
  backgroundImg=loadImage("bg2.jpg");
  stick=loadImage("wood2.png") ; 
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
 
  ballObj= new ball(200,200,20,20);
  stick = new Log(810,260,300, PI/2);  
  chain = new Chain (ballObj.body);
    
}

function draw() {
  background(backgroundImg);  
  ballObj.display();  
  stick.display();
  chain.display();
  drawSprites();
}
