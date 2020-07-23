//Global Variables
var banana,obstacle,bananaImg,obstacleImg;
var player, player_running;
var backImage;
var ground,invisibleGround;
var score=0;



var obstacleGroup;

function preload(){
  backImage = loadImage("jungle.jpg");
 
  
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImg = loadImage("Banana.png");
  obstacleImg = loadImage("stone.png");
  
  groundImg = loadImage("ground.jpg")
 
}


function setup() {
  createCanvas(600,300);
  bg = createSprite(300,150,50,50);
  bg.addImage(backImage);
  
  ground = createSprite(300,280,1000,10);
  ground.addImage("ground.jpg",groundImg);
  ground.scale = 0.2;
  
  player = createSprite(100,150);
  player.addAnimation("running",player_running);
  player.scale=0.12
  player.debug = true;
  
  invisibleGround = createSprite(300,285,600,10);
  invisibleGround.visible = false;
  invisibleGround.debug = true;
  
  bananasGroup = new Group();
  stoneGroup = new Group();
 
}


function draw(){
 background(0);
  
  
 
  
  if (keyDown("space")){
    player.velocityY=-10
  }
  player.velocityY = player.velocityY + 0.8;
  player.collide(invisibleGround);
  
  if (bananasGroup.isTouching(player)){
    bananasGroup.destroyEach();
    score = score+2;
  }
  player.scale = 0.12 + (score/10)*0.02
  
  spawnObstacles();
  spawnBananas();
  drawSprites();
   stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score, 500,50);
}
function spawnBananas() {
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,80);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImg);
    banana.scale = 0.05;
    banana.velocityX = -3;

    
    bananasGroup.add(banana);
} 
}
function spawnObstacles(){
  if (frameCount % 60 === 0) {
    var stone = createSprite(600,250);
    stone.velocityX = - 6;
    stone.addImage(obstacleImg);
    stone.scale = 0.22; 
    stoneGroup.add(stone);
  }
}