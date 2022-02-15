var otirano, ocorreno;
var floor, floor_Animation;
function preload(){
ocorreno = loadAnimation("trex1.png", "trex3.png", "trex4.png");
floor_Animation = loadImage("ground2.png");
}
function setup(){
createCanvas(600,200);
otirano = createSprite(50, 160, 20, 50);
otirano.addAnimation("correndo", ocorreno);
otirano.scale = 0.5;
//otirano.frameDelay = 2;
floor = createSprite(200,180,400,20);
floor.addImage(floor_Animation);
floor.x = floor.width/2
borda = createEdgeSprites();
}
function draw(){
background("#e6e6e6");
floor.velocityX = -2;
if(floor.x < 0 ){
floor.x = floor.width/2;
}
if(keyDown("space")){
otirano.velocityY = -10;
}
otirano.velocityY += 1;
otirano.collide(floor);
drawSprites();
}
