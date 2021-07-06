var trex, trex_running, edges;
var groundImage;
var ground;
var invisibleGround;
var cloud;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  cloud=loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.x=50;
  trex.scale=0.5;
  trex.velocityY=-10;
  edges=createEdgeSprites();

  //adding scale and position to trex
  ground= createSprite(300,175,1200,20);
  ground.addImage(groundImage);
  ground.velocityX=-7;

  invisibleGround= createSprite(300,188,1200,20);
  invisibleGround.visible=false;
  
}
function draw(){
  //set background color 
  background("white");
 
  //logging the y position of the trex
 // console.log(trex.y);
  if(ground.x<=0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")&&trex.y>154){
    trex.velocityY=-10;
    
  }
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(invisibleGround);
   spawnClouds();
    drawSprites();
}
function spawnClouds(){
  if(frameCount%60==0){

  
  var clouds=createSprite(640,20,15,10)
  clouds.velocityX=-7;
  clouds.addImage(cloud)
  clouds.y=Math.round(random(50,110))
  console.log(trex.depth)
  console.log(clouds.depth)
  trex.depth=clouds.depth+1
  }
}