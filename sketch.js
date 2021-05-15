var mRect,fRect,car,wall;
var object1,object2;

function setup() {
  createCanvas(1200,400);
  mRect = createSprite(600, 400, 50, 80);
  mRect.shapeColor = "green";

  fRect = createSprite(400, 200, 80, 30);
  fRect.shapeColor = "green";

  car = createSprite(200, 100, 50, 50);
  car.shapeColor = "blue";
  car.velocityX = 4

  wall = createSprite(1000, 100, 50, 100);
  wall.shapeColor = "brown";
}

function draw() {
  background(255,255,255);
  
  mRect.x = World.mouseX;
  mRect.y = World.mouseY;

  if(isTouching(mRect,fRect))
  {
    mRect.shapeColor = "red";
    fRect.shapeColor = "red";
  }
  else
  {
    mRect.shapeColor = "green";
    fRect.shapeColor = "green";
  }

bounceOff(wall,car)

  drawSprites();
}
