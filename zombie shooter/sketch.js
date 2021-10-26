var backround,backgroundImage
var zombie,zombieimg;
var bullet,bulletimg;
var hero,heroimg;
function preload(){
  backgroundImage = loadImage("back.png");
  heroimg = loadImage("main_charector-removebg-preview.png");
  bulletimg = loadImage("bullet-removebg-preview.png");
  zombieimg = loadImage("zombie-removebg-preview.png");
}
function setup() 
{ createCanvas(800,400);
 backround = createSprite(400,200);
 backround.addImage(backgroundImage);
 backround.scale = 4;
 hero = createSprite(50,325);
 hero.addImage(heroimg);
 hero.scale = .5;
 zombieg = new Group();
 bulletGroup= new Group();
}

function draw() 
{
   
background("black");

if (keyDown("w")){
  hero.y = hero.y -4;
}
if (keyDown("s")){
  hero.y = hero.y +4;
}
if (keyDown("d")){
  hero.x = hero.x +4;
}
if (keyDown("a")){
  hero.x = hero.x -4;
}
if (keyDown("space")){
   createbullet();
}
var select_zombie = Math.round(random(1,2));

if (World.frameCount % 50 == 0) {
  if (select_zombie == 1) {
    zombiespawn();
  }
}
if (bulletGroup.isTouching(zombieg)) {
  zombieg.destroyEach();
  bulletGroup.destroyEach();
 
}


drawSprites();
}
function createbullet() {
  var bullet = createSprite(100, 100, 60, 10);
  bullet.addImage(bulletimg);
  bullet.x = hero.x;
  bullet.y = hero.y;
  bullet.velocityX = 100;
  bullet.lifetime = 8;
  bullet.scale = 0.3;
  bulletGroup.add(bullet);
}
function zombiespawn() {
  var zombie = createSprite(800,Math.round(random(20, 370)), 0, 0);
  zombie.addImage(zombieimg);
  zombie.velocityX = -1.5;
  //zombie.lifetime = 150;
  zombie.scale = 1;
  zombieg.add(zombie);
}
