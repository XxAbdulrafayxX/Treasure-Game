var play = 1;
var gameOver = 0;
var gameState = play;


var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordIm, gameOverImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup,gameOver1, hurdle, hurdleImg, hurdleG;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg = loadImage("gameOver.png");
  hurdleImg = loadImage("hurdles.png");
  
}

function setup(){
  
  edges= createEdgeSprites();
  
  
  createCanvas(400,400);
// Moving background
path = createSprite(200,200);
path.addImage(pathImg);

gameOver1 = createSprite(200,200);
gameOver1.addImage(endImg);

//creating boy running
boy = createSprite(70,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale = 0.08;
boy.collide(edges);

 
  
cashG = new Group();
diamondsG = new Group();
jwelleryG = new Group();
swordGroup = new Group();
hurdleGroup = new Group();

}

function draw() {

  background(0);
  boy.x = World.mouseX;
  
  

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection = treasureCollection+100

    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection = treasureCollection+200
      
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection = treasureCollection+150
      
    }else 
    {if(swordGroup.isTouching(boy)) {
      swordGroup.destroyEach();
      gameState = gameOver;
    
    }else {
     if(hurdleGroup.isTouching(boy)) {
      hurdleGroup.destroyEach();
      gameState = gameOver;
    }
  
  }

  

  if (gameState === gameOver){
    path.velocityY = 0;
    cashG.setVelocityYEach(0);
    jwelleryG.setVelocityYEach(0);
    swordGroup.setVelocityYEach(0);
    diamondsG.setVelocityYEach(0);
    hurdleGroup.setVelocityYEach(0);     
    
    swordGroup.setLifetimeEach(1);
    cashG.setLifetimeEach(1);
    jwelleryG.setLifetimeEach(1);
    diamondsG.setLifetimeEach(1);
    hurdleGroup.setLifetimeEach(1);
    

    
    boy.visible = false;
    gameOver1.visible = true;
    
  }
  
  if(gameState === play){

   boy.visible = true;
   gameOver1.visible = false;
    
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
    createHurdle();
    
    diamondsG.setLifetimeEach(150);
    cashG.setLifetimeEach(150);
    jwelleryG.setLifetimeEach(150);



    
  
    
  path.velocityY = 4;
 
    
  //code to reset the background
    
    if(path.y > 400 ){
    path.y = height/2;

  }   
    
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure Score: "+ treasureCollection,150,30);

}
  
}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
  
  function createHurdle(){
  if (World.frameCount % 190 == 0) {
  var hurdle = createSprite(Math.round(random(50, 350),40, 10, 10));
  hurdle.addImage(hurdleImg);
  hurdle.scale= 0.75;
  hurdle.velocityY = 3;
  hurdle.lifetime = 150;
  hurdleGroup.add(hurdle);
  }
 }
