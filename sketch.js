var snow,snowImage;
var backgroundImage;

function preload(){
  snowImage= loadImage("snow3.jpg")
  backgroundImage=loadImage("snow1.jpg")
}

function setup() {
  createCanvas(800,400);
  snow=createSprite(400, 200, 50, 50);
  snow.addImage(snowImage);
}

function draw() {
  background(backgroundImage); 
  
  if (snow.x>800){

    snow.x=200;
  }
  drawSprites();
}

function keyPressed(){

  if (keyCode===RIGHT_ARROW){
    snow.velocityX=2;
  }
}