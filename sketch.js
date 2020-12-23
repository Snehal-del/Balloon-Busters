var arrowImage,Arrow;
var Bow,bowImage;
var blueBalloon,blueBalloonImage; // Done
var greenBalloon, greenBalloonImage; // Done
var pinkBallon, pinkBalloonImage;
var redBallon,redBalloonImage;   // Done
var bg,backgroundImage;

var selectBalloon;
var score = 0; 

function preload(){  
 //load your images here 
 blueBalloonImage = loadImage("blue_balloon0.png");
 greenBalloonImage = loadImage("green_balloon0.png");
 pinkBalloonImage = loadImage("pink_balloon0.png");
 redBalloonImage = loadImage("red_balloon0.png");
 bowImage = loadImage("bow0.png");
 arrowImage = loadImage("arrow0.png");
 backgroundImage = loadImage("background0.png");
   
}

function setup() {
  createCanvas(600, 600);
  
  //add code here
  
  bg = createSprite(0,0,600,600);
  bg.addImage("Background",backgroundImage);
  bg.scale = 2.5;
  bg.velocityX = -4.5;
    
  Bow = createSprite(500,210,10,10);
  Bow.addAnimation("Bow",bowImage);
  
arrowGroup = createGroup();
redB = createGroup();
blueB = createGroup();
greenB = createGroup();
pinkB = createGroup();
  
   /* for(var i = 80; i < 430; i = i + 60){
    blueBalloon = createSprite(70,i,10,10);
    blueBalloon.addImage("Blue Balloon",blueBalloonImage);
    blueBalloon.scale = 0.1;
  }
  
  for(var j = 110; j < 380; j = j + 60){
    redBalloon = createSprite(120,j,10,10);
    redBalloon.addImage("Red Balloon",redBalloonImage);
    redBalloon.scale = 0.1;
  }
  
  for(var k = 140; k < 330; k = k + 60){
    greenBalloon = createSprite(170,k,10,10);
    greenBalloon.addImage("GreenBalloon",greenBalloonImage);
    greenBalloon.scale = 0.1;
  }
  
  for(var l = 170; l < 330; l = l + 60){
    pinkBalloon = createSprite(20,l,10,10);
    pinkBalloon.addImage("PinkBalloon", pinkBalloonImage);
    pinkBalloon.scale = 1.15;
  } */
  
}

function draw() {
background("white");
  
console.log(score);  

if(bg.x < 300){
bg.x = bg.x + bg.width/2; 
}

if(keyDown("space")) {
createArrow();
Arrow.y = Bow.y;
}
  
if(arrowGroup.isTouching(redB)) {
  redB.destroyEach();
  arrowGroup.destroyEach();
  score = score + 3;
}
  
if(arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score = score + 2;
}
  
if(arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score = score + 1;
}
  
if(arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score = score + 4;
}

Bow.y = mouseY;
  
  if(World.frameCount % 80 === 0) {
   selectBalloon = Math.round(random(1,4));
    
  if(selectBalloon === 1) {
    redBalloon();
  } else if(selectBalloon === 2) {
    greenBalloon();
  } else if(selectBalloon === 3) {
    pinkBalloon();
  } else {
   blueBalloon(); 
   }
  }
  
    
drawSprites();

fill("black");
textSize(20);
text("Score: "+score,270,30);
}

function createArrow() {
  Arrow = createSprite(470,210,10,10);
  Arrow.addAnimation("Arrow",arrowImage);
  Arrow.x = 470;
  Arrow.lifetime = 190;
  Arrow.scale = 0.25;
  Arrow.velocityX = -6;
  arrowGroup.add(Arrow);
  return Arrow;
}

function redBalloon() {
var red_balloon = createSprite(0,Math.round(random(20,370)),10,10);
red_balloon.addImage(redBalloonImage);
red_balloon.scale = 0.1;
red_balloon.velocityX = 3;
red_balloon.lifetime = 150;
redB.add(red_balloon);
}

function greenBalloon() {
var Greenballoon =createSprite(0,Math.round(random(20,370)),10,10);
Greenballoon.addImage(greenBalloonImage);
Greenballoon.scale = 0.1;
Greenballoon.velocityX = 3;
Greenballoon.lifetime = 150;
greenB.add(greenBalloon);
}

function pinkBalloon() {
var pink_balloon = createSprite(0,Math.round(random(20,370)),10,10);
pink_balloon.addImage(pinkBalloonImage);
pink_balloon.scale = 1.2;
pink_balloon.velocityX = 3;
pink_balloon.lifetime = 150;
pinkB.add(pink_balloon);
}

function blueBalloon() {
var blue_balloon = createSprite(0,Math.round(random(20,370)),10,10);
blue_balloon.addImage(blueBalloonImage);
blue_balloon.scale = 0.1;
blue_balloon.velocityX = 3;
blue_balloon.lifetime = 150;
blueB.add(blue_balloon);
}