var fixedrect
var movingrect

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  fixedrect=createSprite(300,200,50,70);
  movingrect=createSprite(400,200,70,50);
  fixedrect.shapeColor="green"
  movingrect.shapeColor='green'
  movingrect.velocityY=-5
  fixedrect.velocityY=5
}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX
  movingrect.y=mouseY
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    
    &&fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
   ) {
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  if (movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    
    &&fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
    
    movingrect.shapeColor="blue";
    fixedrect.shapeColor="blue";
  }
  
  
  drawSprites();
}