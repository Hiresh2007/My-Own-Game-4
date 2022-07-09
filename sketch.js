
var goku;
var gokuLeft, gokuUp,gokuRight;
var score  = 0;

function preload(){

  //Goku animations
  enemy1 = loadAnimation("./assets/Enemy1.png","./assets/Enemy2.png");
  enemy2 = loadAnimation("./assets/Enemy3.png","./assets/Enemy4.png");
  gokuUp = loadAnimation("./assets/Goku1UP.png","./assets/Goku2UP.png","./assets/Goku3UP.png");
  gokuLeft = loadAnimation("./assets/Goku1Left.png","./assets/Goku2Left.png");
  //gokuRight = loadAnimation("./assets/Goku1Right.png","./assets/Goku2Right.png");
}

function setup() {

  createCanvas(windowWidth,windowHeight);
  
  // create Goku sprite and added up animation
  goku = createSprite(width/2, height - 100, 30, 30);
  goku.addAnimation("gup",gokuUp);
  goku.debug = true;

  g1Grp = new Group();
  g2Grp = new Group();
  //add background image
  backgroundImg = loadImage("./assets/bg.png");
}

function draw() {
  
  background(backgroundImg);  
  //background(255);
  
  //moving Goku with Up arrow key
  if(keyIsDown(UP_ARROW) && goku.y >= 10){
    goku.y += -13;
//    goku.addAnimation("gup", gokuUp);
  }

 //------------------------------------------------------------------------------
  //goku
  //goku.isTouching("g1grp")
 //------------------------------------------------------------------------------
 
  //moving Goku with left arrow Key
  //if(keyDown(LEFT_ARROW)){
  //   if(keyCode===37){
  //   //goku.x -= 13;
  //   //console.log(goku.x);
  //   goku.velocityX = -13;
  //   //goku.addAnimation("gleft", gokuLeft);
  // }

  //if(keyDown(RIGHT_ARROW)){
  //   if(keyCode===38){
  //   goku.velocityX = 13;
  // //   goku.addAnimation("gright", gokuRight);
  // }

  camera.position.x = goku.x;
  camera.position.y = goku.y - (goku.y/3);

  //spawn the group 1
  spawnGroup1();
  spawnGroup2();
  spawnGroup1();
  spawnGroup2();
  spawnGroup1();
  spawnGroup2();
  spawnGroup1();
  



  drawSprites();
  
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    //goku.x -= 13;
    goku.velocityX = -13;
  } else if (keyCode === RIGHT_ARROW) {
    //goku.x += 13;
    goku.velocityX = 13;
  }
}



function spawnGroup1(){
  if(frameCount % 76 === 0){
    g1 = createSprite(random(width/2 - 100, width/2 + 100), random(goku.y - 100, 30), 10, 10);
    g1.velocityX = -2;
    g1.shapeColor = "black";
    g1Grp.add(g1);
    
    
    var randomNum = Math.round(random(1,2));
    switch(randomNum){
      case 1: g1.addAnimation("enmy",enemy1); 
              g1.scale = 0.4;
               break;
      case 2: 
              break;
      default: break;
    }


  }
}

function spawnGroup2(){
  if(frameCount % 76 === 0){
    g2 = createSprite(random(width/2 - 100, width/2 + 100), random(goku.y - 100, 30), 10, 10);
    g2.velocityX = 2;
    g2.shapeColor = "brown";
    g2Grp.add(g2);

    var randomNum = Math.round(random(1,2));
    switch(randomNum){
      case 1: g2.addAnimation("enmy2",enemy2);
              g2.scale = 0.4;
               break;
      default: break;
    }
    
  }
}