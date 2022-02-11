var otirano, ocorreno;

function preload(){
  
  ocorreno = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}

function setup(){
  createCanvas(600,200);
  
  otirano = createSprite(50, 160, 20, 50);
  otirano.addAnimation("correndo", ocorreno);
  otirano.scale = 0.5;
  //otirano.frameDelay = 2;

  borda = createEdgeSprites();
 
}

function draw(){
  background("grey");

  if(keyDown("space")){
    otirano.velocityY = -10;
  }
  otirano.velocityY += 1;

  otirano.collide(borda[3]);
  
  drawSprites();
}
