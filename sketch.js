const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg, r
var snow = []
var newSnow = []



function preload(){
  bg = loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  if(bg)
  background(bg); 
  Engine.update(engine);
  fall()
  sFall()
  for(r = 0; r<snow.length; r++){
    snow[r].display()
  }
  for(s = 0; s<snow.length; s++){
    newSnow[s].display()
  }
  drawSprites();
}

function fall(){
  if(frameCount%5===0){
    snow.push(new Snowfall(random(0,800),0,50,50))
  }
}

function sFall(){
  if(frameCount%5===0){
    newSnow.push(new Snowfall2(random(0,800),0,40,40))
  }
}
