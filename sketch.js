var backGround,backgroundImg,earth,earthImage,spaceShip,spaceShImg,a1,a2,crosshair,crosshairImg
var e1,e2,e3,e4,e5,e6,e7;
function preload() {
backgroundImg =  loadImage("assets/Space1.jpg")
earthImage = loadImage("assets/Earth.png")
spaceShImg = loadImage("assets/Alien.png")
a1=loadImage("assets/A1.png");
a2=loadImage("assets/AVictory.png")
e1=loadImage("assets/e1.png");
e2=loadImage("assets/e2.png");
e3=loadImage("assets/e3.png");
e4=loadImage("assets/e4.png");
e5=loadImage("assets/e5.png");
e6=loadImage("assets/e6.png");
e7=loadImage("assets/e7.png");
crosshair = loadImage("assets/Crosshair.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight-150);
  crosshair = createSprite(width/2,height/2,200,200)
  backGround=createSprite(750,500,1500,500);
 backGround.addImage(backgroundImg)
 background.scale=1
 earth = createSprite(50,height/2,100,100)
 earth.addImage(earthImage)
 earth.scale=2;
 spaceShip = createSprite(1350,height/2,100,100)
 spaceShip.addImage(spaceShImg);
 spaceShip.scale = 3
 spaceShip.velocityY=2;
 edges=createEdgeSprites();

}
function draw() {
  background(backgroundImg);
  spaceShip.bounceOff(edges);

  spawnAlien();
  drawSprites()
}

function spawnAlien(){

  if(frameCount%120===0) {
    var alien= createSprite(spaceShip.x-100,spaceShip.y-100);
    alien.velocityX=-4;

    var rand=Math.round(random(1,7)) 
    switch(rand){
  case 1: alien.addImage(e1);
          alien.scale=0.5;
          break;
        
  case 2: alien.addImage(e2);
         alien.scale=0.2;
          break;
  case 3: alien.addImage(e3);
          alien.scale=0.2;
           break;
  case 4: alien.addImage(e4);
           alien.scale=0.2;
            break;
  case 5: alien.addImage(e5);
            alien.scale=0.2;
             break;
  case 6: alien.addImage(e6);
             alien.scale=0.2;
              break;
  case 7: alien.addImage(e7);
              alien.scale=0.2;
               break;
    }
    alien.lifetime=300;
    alien.scale=0.5;
  }
}