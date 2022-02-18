var otirano, ocorreno;
var floor, floor_Animation;
var invisible_floor;

function preload(){

ocorreno = loadAnimation("trex1.png", "trex3.png", "trex4.png");
floor_Animation = loadImage("ground2.png");

}
function setup(){

createCanvas(600,200);
otirano = createSprite(50, 160, 20, 50);
otirano.addAnimation("correndo", ocorreno);
otirano.scale = 0.5
//otirano.frameDelay = 2;

floor = createSprite(200,180,400,20);
floor.addImage(floor_Animation);
floor.x = floor.width/2;

invisible_floor = createSprite(200,190,400,10);
invisible_floor.visible = false;

borda = createEdgeSprites();

//Como criar números aleatórios
//var roleta = Math.round(random(1,100));
//console.log(roleta);

}
function draw(){

background("#e6e6e6");

//console.log(otirano.y);

floor.velocityX = -2;
if(floor.x < 0 ){
    floor.x = floor.width/2;
}

if(keyDown("space")&& otirano.y >= 140){
    otirano.velocityY = -10;

}

otirano.velocityY += 1;
otirano.collide(invisible_floor);

algodao();

drawSprites();

}

function algodao(){

}

