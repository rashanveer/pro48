var backGround1,backGround2,ninja ,ninjaImage,invisibleGround,enemy,enemyImage,chest ,heart1,heart1Image,gameState = 0,gameOverFlag = 0 ;
var greeting,greetingImage,emoji1,emoji2,emojiImage,emoji3,emoji4,emojiImage2,emojiImage3,chest,chestImage,enemyRunning,enemyAttacking,playerdiedImage;
var playerAttackImage,enemyDiedImage,ninja1,enemy1,logImage,axeImage,fireImage,fire1,fire2,fire3,fireBallCount = 0,fireBallFlag = 0,fireBall;
var heart2,heart2Image,axeGroup,plank1,plank2,plank3,plank4,backGround3,ninja2,enemy2,heart3Image,heart3,edges,heart,heartImage;
var axeStopFlag = 0 ;
var enemyHitCount = 0;
var enemyHitCount2 = 0;

function preload() {
backGround1 = loadImage("Images/Bg1.png")
backGround2 = loadImage("Images/Bg1.png")
backGround3 = loadImage("Images/Bg3.png")
ninjaImage = loadImage("Images/PlayerStanding.png")
enemyImage = loadImage("Images/EnemyStanding.png")
heart1Image = loadImage("Images/HeartL1.png")
heart2Image = loadImage("Images/HeartL2.png")
heart3Image = loadImage("Images/HeartL3.png")
greetingImage = loadImage("Images/greeting.png")
emojiImage = loadImage("Images/crying.png")
emoji2Image = loadImage("Images/cele.png")
emoji3Image = loadImage("Images/celebration image.png")
chestImage = loadImage("Images/chest.png")
enemyRunning = loadImage("Images/EnemyRunning.png")
enemyAttacking = loadImage("Images/EnemyAttacked3.png")
playerdiedImage = loadImage("Images/PlayerDied.png")
playerAttackImage = loadImage("Images/PlayerAttack.png")
enemyDiedImage = loadImage("Images/EnemyDied.png")
logImage = loadImage("Images/log1.png")
axeImage = loadImage("Images/axe.png")
fireImage = loadImage("Images/fire.png")
ninja1AttackImage = loadImage("Images/fireAttack.png")
heartImage = loadImage("Images/heart.png")
}
function setup() {
  createCanvas(600, 400);

  invisibleGround = createSprite(300,355,600,10)
  invisibleGround.visible = false; 

  // Level 1 sprites
  ninja = createSprite(20,320,10,10)
  ninja.scale = 0.5
  ninja.addImage(ninjaImage)
  ninja.debug = true
  ninja.visible=false

  edges = createEdgeSprites()

  enemy = createSprite(475,320,10,10)
  enemy.addImage(enemyImage)
  enemy.scale = 0.8
  enemy.debug = true
  enemy.visible=false

  heart1 = createSprite (570,300,10,10)
  heart1.scale = 0.05
  heart1.addImage(heart1Image)
  heart1.visible=false

  chest = createSprite(570,325,10,10)
  chest.addImage(chestImage)
  chest.scale = 0.04
  chest.visible=false

  chest.depth = heart1.depth
  heart1.depth = heart1.depth +1 

  //level 2 sprites
  ninja1 = createSprite(20,320,10,10)
  ninja1.addImage(ninjaImage)
  ninja1.scale = 0.5
  ninja1.visible = false

  enemy1 = createSprite(475,320,10,10)
  enemy1.addImage(enemyImage)
  enemy1.scale = 0.8
  enemy1.visible = false

  plank1 = createSprite(125,240,80,10)
  plank1.addImage(logImage)
  plank1.scale = 0.5
  plank1.visible = false

  plank2 = createSprite(200,160,80,10)
  plank2.addImage(logImage)
  plank2.scale = 0.5
  plank2.visible = false

  plank3 = createSprite(50,125,80,10)
  plank3.addImage(logImage)
  plank3.scale = 0.5 
  plank3.visible = false

  plank4 = createSprite(350,130,80,10)
  plank4.addImage(logImage)
  plank4.scale = 0.5
  plank4.visible = false

  heart2 = createSprite (570,300,10,10)
  heart2.scale = 0.05
  heart2.addImage(heart2Image)
  heart2.visible = false

  fire1 = createSprite(200,100,10,10)
  fire1.addImage(fireImage)
  fire1.scale = 0.1
  fire1.visible = false

  fire2 = createSprite(50,50,10,10)
  fire2.addImage(fireImage)
  fire2.scale = 0.1
  fire2.visible = false

  fire3 = createSprite(350,50,10,10)
  fire3.addImage(fireImage)
  fire3.scale = 0.1
  fire3.visible = false

  fireBall = createSprite(0,0,10,10)
  fireBall.visible=false

  axeGroup = new Group()

  // level 3 spprites

  ninja2 = createSprite(20,320,10,10)
  ninja2.addImage(ninjaImage)
  ninja2.scale = 0.5
  ninja2.visible = false

  enemy2 = createSprite(475,320,10,10)
  enemy2.addImage(enemyImage)
  enemy2.scale = 0.8
  enemy2.visible = false
  enemy2.velocityY = -3

  heart3 = createSprite (570,300,10,10)
  heart3.scale = 0.05
  heart3.addImage(heart3Image)
  heart3.visible = false

 //ending{finale}

  heart = createSprite(300,200,10,10)
  heart.addImage(heartImage)
  heart.visible = false;
  heart.scale = 0.25

}

function draw(){
  enemy2.bounceOff(edges[3])
  enemy2.bounceOff(edges[2])
  
 
  if(keyDown(UP_ARROW)){
    ninja.velocityY = -6
  }
  
  if(keyDown(RIGHT_ARROW)&& gameOverFlag===0){
    ninja.x = ninja.x+4
  }
  if(keyDown(LEFT_ARROW)&& gameOverFlag===0){
    ninja.x = ninja.x - 4
  }
  ninja.velocityY = ninja.velocityY +0.8
  ninja.collide(invisibleGround)

  if(gameState===0){
    background("lightBlue")
    //level1
    ninja.visible=false
    enemy.visible=false
    chest.visible=false
    heart1.visible=false
    //level2
    ninja1.visible = false
    enemy1.visible = false
    plank1.visible = false
    plank2.visible = false
    plank3.visible = false
    plank4.visible = false
    fire1.visible = false
    fire2.visible = false
    fire3.visible = false

    ninja.debug = false
    enemy.debug = false
   
    fill("RED")
    textSize(15)
    text("PLAYERS WELCOME TO THE DANGEROUS NINJA GAME",100,100)
    text("PLEASE PRESS S TO START THE GAME",135,350)
    text("USE RIGHT AND LEFT ARROW KEY TO MOVE THE NINJA",90,200)
    text("TO MAKE THE NINJA JUMP YOU HAVE TO USE UP ARROW KEY",75,250)
    text("IN FIRST LEVEL YOU HAVE TO JUMP OVER THE BULL RUNNING TOWARDS YOU ",10,300)
    gameOverFlag = 0
    if(keyDown("S")){
      gameState = 1
    }
  }
  if(gameState===1){
    background(backGround1);
    ninja.visible=true
    enemy.visible=true
    chest.visible=true
    heart1.visible=true
   
    if(enemy.x - ninja.x<400){
      enemy.velocityX = -13
      enemy.addImage(enemyRunning)
    }

    if(ninja.isTouching(enemy)){
      enemy.addImage(enemyAttacking)
      ninja.addImage(playerdiedImage)
      enemy.velocityX = 0
      gameOverFlag = 1
    }
    if(gameOverFlag===1){
      background("red")
      fill("black")
      textSize(25)
      text("Sorry! Bull has attacked ninja, You Lose",100,50)
      text("Press R to restart",200,150)
      enemy.velocityX = 0
    }
    if(keyDown("R") && gameOverFlag===1){
      console.log("reset")
      
      ninja.x = 20
      enemy.x = 475
      enemy.addImage(enemyImage )
      ninja.addImage(ninjaImage)
      gameState = 0
      gameOverFlag = 0
    }
    if(ninja.isTouching(chest)){
      gameState = 2
    }
  }
  if(gameState === 2){
    background("Lightgreen")
    ninja.destroy()
    enemy.destroy()
    heart1.destroy();
    chest.visible = false
    textSize(10)
    fill("red")
    text("YAAAY! YOU HAVE FOUND ONE PIECE OF HEART. THERE,STILL 2 PIECES ARE  LEFT",50,100)
    text("IN NEXT LEVEL THERE ARE 3 FIRE FLAMES THAT YOU HAVE TO COLLECT AND THROW USING SPACE ON ENEMY",10,200)
    text("NOTE: DEFEND FROM THE AXE ATTACKING CONTINOUSLY IN A STRAIGHT LINE.USE THE PLANKS TO DEFEND YOURSELF",10,300)
    text("PLEASE PRESS 'N' TO START THE NEXT LEVEL",150,375)

    if(keyDown("N")){
      gameState = 3   
    }
  }

  if(gameState === 3){
    background(backGround2)


    ninja1.visible = true
    enemy1.visible = true
    plank1.visible = true
    plank2.visible = true
    plank3.visible = true
    plank4.visible = true
    fire1.visible = true
    fire2.visible = true
    fire3.visible = true
    chest.visible = true
    heart2.visible = true
   
    ninja1.collide(plank1)
    ninja1.collide(plank2)
    ninja1.collide(plank3)
    ninja1.collide(plank4)

    if(keyDown(UP_ARROW)){
      ninja1.velocityY = -6
    }

    if(keyDown(RIGHT_ARROW)&& gameOverFlag===0){
      ninja1.x = ninja1.x+4
    }
    if(keyDown(LEFT_ARROW)&& gameOverFlag===0){
      ninja1.x = ninja1.x-4
    }
    ninja1.velocityY = ninja1.velocityY +0.8
    ninja1.collide(invisibleGround)

    if(axeStopFlag === 0){
      axeAttack()
    }
    

    if(ninja1.isTouching(fire1)){
      fireBallCount++
      fire1.destroy()
    }
    if(ninja1.isTouching(fire2)){
      fireBallCount++
      fire2.destroy()
    }
    if(ninja1.isTouching(fire3)){
      fireBallCount++
      fire3.destroy()
    }
    
    if(fireBallCount===3){
      if(keyWentDown("space") && fireBallFlag ===0 ){
        fireBall = createSprite(ninja1.x,ninja1.y,10,10)
        fireBall.velocityX = 6
        fireBall.addImage(fireImage)
        fireBall.scale = 0.08
        fireBall.lifetime = 150
        fireBall.addImage(fireImage)
        fireBallFlag=1
      }

      if(fireBall.isTouching(axeGroup)){
        fireBall.destroy();
        axeGroup.destroyEach();
      }

      if(keyWentUp("space") ){
        fireBallFlag = 0
      }
    }
    if(fireBall.isTouching(enemy1)){
      enemyHitCount2 = enemyHitCount2+1
      fireBall.destroy();
      console.log(enemyHitCount2)
    }
    
    if(enemyHitCount2>=3){
      enemy1.destroy();
      axeGroup.destroyEach();
      axeStopFlag = 1
    }

    if (ninja1.isTouching(enemy1) || ninja1.isTouching(axeGroup)){
      enemy1.addImage(enemyAttacking)
      ninja1.addImage(playerdiedImage)
      axeGroup.destroyEach()
      axeStopFlag = 1
      gameOverFlag = 1
    }

    if(gameOverFlag===1){
      fire1.visible = false
      fire2.visible = false
      fire3.visible = false  
      chest.visible = false
      heart2.visible = false
      plank1.visible = false
      plank2.visible = false
      plank3.visible = false
      plank4.visible = false
      background("red")
      fill("black")
      textSize(25)
      text("Sorry! Bull has attacked ninja, You Lose",100,50)
      text("Press R to restart",200,150)
    }

    if(keyDown("R") && gameOverFlag===1){
      enemy1.addImage(enemyImage )
      ninja1.addImage(ninjaImage)
      enemy1.x=475
      ninja1.x =20
      gameState = 3
      gameOverFlag = 0
      axeStopFlag = 0
      fireBallCount =0

      fire1 = createSprite(200,100,10,10)
      fire1.addImage(fireImage)
      fire1.scale = 0.1

      fire2 = createSprite(50,50,10,10)
      fire2.addImage(fireImage)
      fire2.scale = 0.1

      fire3 = createSprite(350,50,10,10)
      fire3.addImage(fireImage)
      fire3.scale = 0.1
    }

    if(ninja1.isTouching(chest)){
      gameState = 4
    }

  }
  if(gameState === 4){
    background("Lightgreen")
    ninja1.destroy();
    enemy1.destroy();
    axeGroup.destroyEach();
    plank1.visible = false
    plank2.visible = false
    plank3.visible = false
    plank4.visible = false
    heart2.destroy()
    chest.visible = false
    axeStopFlag = 0
    textSize(10)
    fill("red")
    text("YAAAY! YOU HAVE FOUND ANOTHER PIECE OF HEART. THERE,STILL 1 PIECE IS  LEFT",50,100)
    text("IN NEXT LEVEL THE ENEMY WILL MOVE UP AND DOWN CONTINOUSLY",100,200)
    text("HE WILL THROW AXE AT YOU CONTINOUSLY.SO, DEFEND YOUR SELF AND THROW FIRE BALLS TO KILL HIM",25,250)
    text("PLEASE PRESS 'N' TO START THE NEXT LEVEL",150,300)
    if(keyDown("N")){
      gameState = 5
    }
  }
  if (gameState == 5){
    background(backGround3)

    chest.visible = true
    ninja2.visible = true
    enemy2.visible = true
    heart3.visible = true

    plank1.visible = true
    plank2.visible = true
    plank3.visible = true
    plank4.visible = true

    ninja2.collide(plank1)
    ninja2.collide(plank2)
    ninja2.collide(plank3)
    ninja2.collide(plank4)

    if(keyDown(UP_ARROW)){
      ninja2.velocityY = -6
    }
    if(keyDown(RIGHT_ARROW)&& gameOverFlag===0){
      ninja2.x = ninja2.x+4
    }
    if(keyDown(LEFT_ARROW)&& gameOverFlag===0){
      ninja2.x = ninja2.x - 4
    
    }
    ninja2.velocityY = ninja2.velocityY +0.8
    ninja2.collide(invisibleGround)

    if(axeStopFlag === 0){
      axeAttack()
    }
    
  
    if(keyWentDown("space") && fireBallFlag ===0 ){
      fireBall = createSprite(ninja2.x,ninja2.y,10,10)
      fireBall.velocityX = 6
      fireBall.addImage(fireImage)
      fireBall.scale = 0.08
      fireBall.lifetime = 150
      fireBall.addImage(fireImage)
      fireBallFlag=1
    }
    if(keyWentUp("space") ){
      fireBallFlag = 0
    }
  
    if(fireBall.isTouching(enemy2)){
      enemyHitCount = enemyHitCount+1
      fireBall.destroy();
      console.log(enemyHitCount)
    }
    
    if(enemyHitCount>=3){
      enemy2.destroy();
      axeGroup.destroyEach();
      axeStopFlag = 1
    }

    if (ninja2.isTouching(enemy2) || ninja2.isTouching(axeGroup)){
      enemy2.addImage(enemyAttacking)
      ninja2.addImage(playerdiedImage)
      axeGroup.destroyEach()
      axeStopFlag = 1
      gameOverFlag = 1
    }

    if(gameOverFlag===1){
      heart3.visible = false
      chest.visible = false
      plank1.visible = false
      plank2.visible = false
      plank3.visible = false
      plank4.visible = false
      enemy2.velocityY = 0
      background("red")
      fill("black")
      textSize(25)
      text("Sorry! Bull has attacked ninja, You Lose",100,50)
      text("Press 'R' to restart",200,150)
    }

    if(keyDown("R") && gameOverFlag===1){
      enemy2.addImage(enemyImage )
      enemy2.velocityY = -10
      ninja2.addImage(ninjaImage)
      enemy2.x=475
      ninja2.x =20
      gameState = 5
      gameOverFlag = 0
      axeStopFlag = 0
    }

    if(ninja2.isTouching(chest)){
      gameState = 6
    }
  }
  if(gameState===6){
    background("yellow")
    chest.visible = false
    ninja2.visible = false
    enemy2.visible = false
    heart3.visible = false

    plank1.visible = false
    plank2.visible = false
    plank3.visible = false
    plank4.visible = false

    fill("red")
    textSize(20)
    text("YAAAAAAY!!!!!! YOU HAVE FOUND ALL THE HEART PEICES.",10,180)
    text("NOW ALL PEICES WILL JOIN INTO A BIG PEICE OF HEART.",10,220)
    text("PRESS W TO GO TO YOUR WINNING PRIZE",10,260)
   if(keyDown("W")){
   gameState = 7
   }
  }

if(gameState===7){
  background("blue")
  chest.visible = false
  ninja2.visible = false
  enemy2.visible = false
  heart3.visible = false

  plank1.visible = false
  plank2.visible = false
  plank3.visible = false
  plank4.visible = false

  heart.visible = true

  fill("yellow")
    textSize(20)
  text("YOU HAVE WON AND THIS HEART IS YOUR PRIZE.THANK U",10,370)

}

  drawSprites()
}

function axeAttack(){
  if(frameCount % 70===0){
    var axe = createSprite(440,310,20,20)
    axe.velocityX = -6
    axe.lifetime=100
    axe.addImage(axeImage)
    axeGroup.add(axe)
    if(gameState===5){
      axe.y = enemy2.y
    }
  }
}