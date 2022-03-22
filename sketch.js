var otirano, ocorreno, omorreno;
var floor, floor_Animation;
var invisible_floor;
var fumaca, fumaca_Img;
var cacto_1, cacto_2, cacto_3, cacto_4, cacto_5, cacto_6;
var cafe;
var algodois;
var verdinhos;
var INGAME = 1;
var PERDEUPLAYBOY = 0;
var estado;
var restart, restartImg;
var gameOver, gameOverImg;
var sheeeeesh, ping, pirin;
var mensagem = "Hoje não choveu aqui";
var pulso = true;

estado = INGAME;

function preload(){

ocorreno = loadAnimation("trex1.png", "trex3.png", "trex4.png");
floor_Animation = loadImage("ground2.png");
fumaca_Img = loadImage("cloud.png");
omorreno = loadAnimation("trex_collided.png");
restartImg = loadImage("restart.png");
gameOverImg = loadImage("gameOver.png");

cacto_1 = loadImage("obstacle1.png");
cacto_2 = loadImage("obstacle2.png");
cacto_3 = loadImage("obstacle3.png");
cacto_4 = loadImage("obstacle4.png");
cacto_5 = loadImage("obstacle5.png");
cacto_6 = loadImage("obstacle6.png");

sheeeeesh = loadSound("die.mp3");
ping = loadSound("jump.mp3");
pirin = loadSound("checkPoint.mp3");

}
function setup(){

createCanvas(windowWidth,windowHeight);
otirano = createSprite(50, height-70, 20, 50);
otirano.addAnimation("correndo", ocorreno);
otirano.addAnimation("morrendo", omorreno);
otirano.scale = 0.5
//otirano.frameDelay = 2;

gameOver = createSprite(width/2,height/2-50);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.7;

restart = createSprite(width/2,height/2);
restart.addImage(restartImg);
restart.scale = 0.5;

floor = createSprite(width/2,height-80,width,125);
floor.addImage(floor_Animation);
floor.x = floor.width/2;

invisible_floor = createSprite(width/2,height-10,width,125);
invisible_floor.visible = false;

borda = createEdgeSprites();
cafe = 0;
//Como criar números aleatórios
//var roleta = Math.round(random(1,100));
//console.log(roleta);
algodois = new Group();
verdinhos = new Group();
otirano.debug = false;
otirano.setCollider("circle", 0, 0, 40);


}
function draw(){
   
   // console.log(mensagem);
    background("#e6e6e6");
    otirano.collide(invisible_floor);
    //console.log(otirano.y);

if(estado === INGAME){

    if(cafe % 100 === 0 && cafe > 0){
        pirin.play();
        pirin.setVolume(0.5);
    }
    floor.velocityX = -(4 + cafe / 100);
    otirano.velocityY += 1;
    gameOver.visible = false;
    restart.visible = false;

    algodao();
    verdinho();

    cafe += Math.round(frameRate()/60);
    
    if(floor.x < 0 ){
        floor.x = floor.width/2;
    }

    if(keyWentDown("space")&& otirano.y >= height-140 && pulso === false || touches.length > 0 && otirano.y >= height-140){
        otirano.velocityY = -12;
        pulso = true;
        ping.play();
        touches = [];
    }
    if(keyWentUp("space")){
        pulso = false;
    }

    if(verdinhos.isTouching(otirano)){
        estado = PERDEUPLAYBOY;
        sheeeeesh.play();
    }

} else if(estado === PERDEUPLAYBOY){
    floor.velocityX = 0;
    algodois.setVelocityXEach(0);
    verdinhos.setVelocityXEach(0);
    otirano.changeAnimation("morrendo");
    algodois.setLifetimeEach(-1);
    verdinhos.setLifetimeEach(-1);
    otirano.velocityY = 0;
    restart.visible = true;
    gameOver.visible = true;

        if(mousePressedOver(restart) || touches.length > 0){
          reset();
          touches = [];
        
    }
}



drawSprites();

text("Score : " + cafe,width-100,height/2); 

//Desenhar grade
/*for (var i  = 0; i <= 600; i+=50){
    line(i,0,i,200);  
    }
for (var j  = 0; j <= 200; j+=50){
    line(0,j,600,j);  
    }*/
}

function reset(){
    
   estado = INGAME;

   cafe = 0;
   
   verdinhos.destroyEach();
   algodois.destroyEach();
   otirano.changeAnimation("correndo");
}

function algodao(){
    if(frameCount%60 === 0){
        fumaca = createSprite(width+20,height-300,40,10);
        fumaca.velocityX = -3;
        fumaca.addImage(fumaca_Img);
        fumaca.scale = random(0.5,1);
        fumaca.y = Math.round(random(10,height/2));
        fumaca.depth = otirano.depth;
        otirano.depth += 1;
        fumaca.lifetime = 250;
        algodois.add(fumaca);
    }

    
}

function verdinho(){
if(frameCount%60 === 0){
    var cacto = createSprite(width,height-95,10,40);
    cacto.velocityX = -(6 + cafe / 100); 
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