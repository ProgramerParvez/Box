var box 
function setup() {
  createCanvas(400,400);
  box = createSprite(120,300,60,57)
}

function draw()

{
  background("white");
  if(keyIsDown(RIGHT_ARROW)) {
   box.position.x = box.position.x + 5
  }

  if(keyIsDown(LEFT_ARROW)) {
    box.position.x = box.position.x-5
  }
drawSprites()
}




