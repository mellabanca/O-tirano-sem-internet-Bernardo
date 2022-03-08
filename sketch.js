var otirano, ocorreno;
var floor, floor_Animation;
var invisible_floor;
var fumaca, fumaca_Img;
var cacto_1, cacto_2, cacto_3, cacto_4, cacto_5, cacto_6;
var cafe;
var algodois;
var verdinhos;
var INGAME = 1;
var PERDEUPLAYBOY = 0;
var estado = INGAME;


function preload(){

ocorreno = loadAnimation("trex1.png", "trex3.png", "trex4.png");
floor_Animation = loadImage("ground2.png");
fumaca_Img = loadImage("cloud.png");

cacto_1 = loadImage("obstacle1.png");
cacto_2 = loadImage("obstacle2.png");
cacto_3 = loadImage("obstacle3.png");
cacto_4 = loadImage("obstacle4.png");
cacto_5 = loadImage("obstacle5.png");
cacto_6 = loadImage("obstacle6.png");

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
cafe = 0;
//Como criar números aleatórios
//var roleta = Math.round(random(1,100));
//console.log(roleta);
algodois = new Group();
verdinhos = new Group();
}
function draw(){
    background("#e6e6e6");

    //console.log(otirano.y);

if(estado === INGAME){
    floor.velocityX = -2;

} else if(estado === PERDEUPLAYBOY){
    floor.velocityX = 0;
}




if(floor.x < 0 ){
    floor.x = floor.width/2;
}

if(keyDown("space")&& otirano.y >= 140){
    otirano.velocityY = -10;

}

otirano.velocityY += 1;
otirano.collide(invisible_floor);

algodao();
verdinho();
drawSprites();

text("Score : " + cafe,500,50); 
cafe += Math.round(frameCount/60);
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
        algodois.add(fumaca);
    }

    
}

function verdinho(){
if(frameCount%60 === 0){
    var cacto = createSprite(600,165,10,40);
    cacto.velocityX = -6; 
    var surprise = Math.round(random(1,6));
    switch (surprise) {
        case 1: cacto.addImage(cacto_1);
        break;
        case 2: cacto.addImage(cacto_2);
        break;
        case 3: cacto.addImage(cacto_3);
        break;
        case 4: cacto.addImage(cacto_4);
        break;
        case 5: cacto.addImage(cacto_5);
        break;
        case 6: cacto.addImage(cacto_6);
        break;
    
        default:
            break;
    }
    cacto.scale = 0.5;
    cacto.lifetime = 300;
    verdinhos.add(cacto);
}

}