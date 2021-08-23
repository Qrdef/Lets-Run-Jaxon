var path_image;
var path;
var jax;
var jaxImg;
var edge1;
var edge2;
function preload(){
  //pre-load images
  jaxImg=loadAnimation("Runner-1.png","Runner-2.png")
  path_image=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage("path",path_image);
  path.scale=1.2;
  path.velocityY=4;
  jax=createSprite(200,340);
  jax.addAnimation("running",jaxImg);
  jax.scale=0.1;
  edge1=createSprite(390,200,60,1600)
  edge1.visible=false
  edge2=createSprite(22,200,60,1600)
  edge2.visible=false
}

function draw() {
  background("black");

 //making bg inf
 if(path.y > 400)
 {
   path.y=height/2
 }
 //to move jax left and right
jax.x=mouseX
jax.collide(edge1)
jax.collide(edge2)
 drawSprites();
 text(mouseX+","+mouseY,mouseX,mouseY);
}
