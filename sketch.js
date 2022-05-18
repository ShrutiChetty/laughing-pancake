var box;
function setup() {
  createCanvas(1200,600);
  box = createSprite(200,200,20,20);
  box.shapeColor="blue"
}

function draw() 
{
  background(30);
  drawSprites();
  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x+5
  }
  if(keyIsDown(LEFT_ARROW)){
    box.x = box.x-5
  }
  if(keyIsDown(UP_ARROW)){
    box.y = box.y-5
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y+5
  }
}




