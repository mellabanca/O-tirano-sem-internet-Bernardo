var otirano, ocorreno;
var floor, floor_Animation;
var invisible_floor;
var fumaca, fumaca_Img;

function preload(){

ocorreno = loadAnimation("trex1.png", "trex3.png", "trex4.png");
floor_Animation = loadImage("ground2.png");
fumaca_Img = loadImage("cloud.png");

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

//Desenhar grade
/*for (var i  = 0; i <= 600; i+=50){
    line(i,0,i,200);  
    }

for (var j  = 0; j <= 200; j+=50){
    line(0,j,600,j);  
    }*/
}

function algodao(){
    if(frameCount%60 === 0){
        fumaca = createSprite(600,100,40,10);
        fumaca.velocityX = -3;
        fumaca.addImage(fumaca_Img);
        fumaca.scale = random(0.5,1);
        fumaca.y = Math.round(random(10,100));
        fumaca.depth = otirano.depth;
        otirano.depth += 1;
        fumaca.lifetime = 250;
    }

    
}

