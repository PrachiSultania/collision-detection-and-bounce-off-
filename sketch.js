function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(400, 400, 50, 50);
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
  rect1 = createSprite(200, 100, 50, 50);
  rect2 = createSprite(200, 400, 50, 50);
  rect1.shapeColor = "blue";
  rect2.shapeColor = "green";
  rect1.velocityY = 4;
  rect2.velocityY = -4;
  
}

function draw() {
  background(0);  
  drawSprites();
  //is touching Algorithm
 movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && 
    movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 &&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor = "pink";
    movingRect.shapeColor = "pink";
    
  }
  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  // bounce off algorithm
   if(rect1.x-rect2.x<rect1.width/2+rect2.width/2 && rect2.x-rect1.x<rect1.width/2+rect2.width/2){
    rect1.velocityX = rect1.velocityX * (-1);
    rect2.velocityX = rect2.velocityX * (-1);
   }
   if(rect1.y-rect2.y<rect1.height/2+rect2.height/2 && rect2.y-rect1.y<rect1.height/2+rect2.height/2){
     rect1.velocityY = rect1.velocityY * (-1);
     rect2.velocityY = rect2.velocityY * (-1);
   }
}