const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var bk, bkImg
var tower;
var cannon;
var cannonball;
var cannonBalls=[];
var angle=0;//PI/4 vamos a girar en grados

function preload(){
  bkImg=loadImage("./assets/background.gif")
}
function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  tower=new Torre(150,350,160,310);
  cannon=new Cannon(180,110,100,50,angle);
  cannonball=new Cannonball(cannon.x,cannon.y);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  Engine.update(engine);

  image(bkImg,0,0,width,height);

  tower.display();
  cannon.display();
  cannonball.display();
}

function keyReleased (){
  if (keyCode === DOWN_ARROW){
    cannonball.shoot();
  }
}
function keyPressed (){
  if (keyCode === DOWN_ARROW){
    var ball = new Cannonball(cannon.x,cannon.y);
    cannonBalls.push(ball);
  }
}