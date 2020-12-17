var wall, bullet;
var thickness, speed, weight;
var damage;

function setup() {
 createCanvas(1600,400);

 speed = random(233, 321);
 weight = random(30, 52);
 thickness = random(22, 83)

 wall = createSprite(1200, 200, thickness, height/2);
 wall.shapeColor = "white";
 
 bullet = createSprite(50, 200, 50, 5);
 bullet.velocityX = speed;
 bullet.shapeColor = "white";
}

function draw() {
  background(0);

   if(isTouching(bullet, wall)) {
    bullet.velocityX = 0;

    damage = 0.5 * weight * speed * speed / (thickness * thickness * 
      thickness);
       
    if(damage > 10) {
      wall.shapeColor = "red";
    }

    if(damage < 10) {
      wall.shapeColor = "green";
    }
  }
  drawSprites();
}

function isTouching(bullet, wall) {
  if(wall.x - bullet.x < wall.width/2 + bullet.width/2) {
    return true;
  } 
  else {
    return false;
  }
  }