var canva;
var trex;
var trexImagem;
var solo;
var soloImagem;
var soloInvisivel
var nuvemImg

function setup(){
    canva = createCanvas(600, 200);
    trex = createSprite(55, 140, 50, 50);
    trex.addAnimation("trex correndo", trexImagem);
    trex.scale = 0.6;

    solo = createSprite(300, 180, 600, 5);
    solo.velocityX = -3
    solo.scale = 0.6;
    solo.addAnimation("solo", soloImagem);

    soloInvisivel = createSprite(300, 190,600,5)
    soloInvisivel.visible = false
}

function preload(){
    trexImagem = loadAnimation("trex1.png", "trex2.png", "trex3.png");

    soloImagem = loadAnimation("ground2.png");

    nuvemImg = loadAnimation("cloud.png")
}

function draw(){
    background("170");
    drawSprites();

     nuvem = createSprite(300,50,60,20)
        nuvem.addImage(nuvemImg)

    if(keyDown("w") && trex.y>155){
        trex.velocityY = -10;
    }
    trex.velocityY = trex.velocityY + .5;  


    trex.collide(soloInvisivel);

    if(solo.x < 0){
        solo.x = 300;
    }
}
