var player, playerImg1, playerImg2, playerImg3, playerImg4;
var monster, monsterImg;
var portal1,portal2,portal3,portal4, portalImg;
var hurdle1, hurdle2;
var hurdle1Img, hurdle2Img, bgImg
var bar1,bar2,bar3,bar4,bar5,bar6,bar7,bar8,bar9,bar10,bar11,bar12,bar13,bar14,bar15,bar16,bar17;
var bar18, bar19, bar20, bar22,bar23,bar24,bar25,bar26;
var edges;
var gamestate=0;
var grp1,grp2,grp3,grp4;
var player1Img,player2Img,player3Img,player4Img;
var player;

function preload(){
  portalImg=loadImage("portal.png")
bgImg=loadImage("hogwarts.jpg")
player1Img=loadImage("red.jpg")
//player2Img=loadImage("draco.jfif")
//player3Img=loadImage("luna.png")
//player4Img=loadImage("cedric.png")
}
function setup(){
  createCanvas(1000,600)
  bar1=createSprite(164,65,10,150);
  bar1.shapeColor="red";
  bar2=createSprite(900,165,10,150);
  bar2.shapeColor="blue";
  bar3=createSprite(500,80,10,150);
  bar3.shapeColor="green";
  bar4=createSprite(594,365,10,150);
  bar4.shapeColor="yellow";
  bar5=createSprite(600,865,10,150);
  bar5.shapeColor="red";
  bar6=createSprite(950,650,10,200)
  bar6.shapeColor="blue";
  bar7=createSprite(550,100,10,200)
  bar7.shapeColor="green";
  bar8=createSprite(700,650,10,140)
  bar8.shapeColor="yellow";
  bar9=createSprite(350,500,10,150)
  bar9.shapeColor="red";
  bar10=createSprite(350,900,10,150)
  bar10.shapeColor="blue";
  bar11=createSprite(480,950,10,190)
  bar11.shapeColor="green";
  bar12=createSprite(164,605,10,250)
  bar12.shapeColor="yellow";
  bar13=createSprite(300,690,10,150)
  bar13.shapeColor="red";
  //horizontal 
  bar14=createSprite(205,605,100,10);
  bar14.shapeColor="blue";
  bar15=createSprite(305,165,150,10);
  bar15.shapeColor="green";
  bar16=createSprite(404,265,200,10);
  bar16.shapeColor="yellow";
  bar17=createSprite(904,365,180,10);
  bar17.shapeColor="red";
  bar18=createSprite(104,565,210,10);
  bar18.shapeColor="green";
  bar19=createSprite(504,65,110,10);
  bar19.shapeColor="blue";
  bar20=createSprite(894,605,150,10);
  bar20.shapeColor="yellow";
  bar22=createSprite(674,700,120,10);
  bar22.shapeColor="red";
  bar23=createSprite(794,780,160,10);
  bar23.shapeColor="blue";
  bar24=createSprite(864,95,310,10);
  bar24.shapeColor="green";
  bar25=createSprite(464,655,110,10);
  bar25.shapeColor="yellow";
  bar26=createSprite(164,658,110,10);
  bar26.shapeColor="red";
  bar27=createSprite(0,358,110,10);
  bar27.shapeColor="blue";
  bar28=createSprite(0,168,110,10);
  bar28.shapeColor="green";
  portal1=createSprite(253,459,50,50)
  portal1.addImage(portalImg)
  portal1.scale=0.5;
  portal1.velocityX=2
  portal2= createSprite(371,86,50,50)
  portal2.addImage(portalImg);
  portal2.scale=0.5;
  portal2.velocityY=2
  portal3=createSprite(628,169,50,50)
  portal3.addImage(portalImg);
  portal3.scale=0.5;
  portal3.velocityX=2
  portal4= createSprite(610,416,50,50)
  portal4.addImage(portalImg);
  portal4.scale=0.5;
  portal4.velocityY=2
  edges= createEdgeSprites();
  grp1=createSprite(200,400,50,50);
  //player1.addImage(player1Img);
  grp2=createSprite(400,400,50,50);
  //player2.addImage(player2Img);
  grp3=createSprite(600,400,50,50);
 // player3.addImage(player3Img);
  grp4=createSprite(800,400,50,50);
 // player4.addImage(player4Img);
 player=createSprite(100,100,50,50)

}
function draw(){
  background(0);

if(gamestate===0){
  background(bgImg);
  textSize(80);
fill("red")
  text("CHOOSE YOUR HOUSE",40,72)
  
  if(mousePressedOver(grp1)){
    gamestate=1;
    
  }
  if(mousePressedOver(grp2)){
    gamestate=1;
   
  }
  if(mousePressedOver(grp3)){
    gamestate=1;
    
  }
  if(mousePressedOver(grp4)){
    gamestate=1;

  }
  

  bar1.visible=false;
  bar2.visible=false;
  bar3.visible=false;
  bar4.visible=false;
  bar5.visible=false;
  bar6.visible=false;
  bar7.visible=false;
  bar8.visible=false;
  bar9.visible=false;
  bar10.visible=false;
  bar11.visible=false;
  bar12.visible=false;
  bar13.visible=false;
  bar14.visible=false;
  bar15.visible=false;
  bar16.visible=false;
  bar17.visible=false;
  bar18.visible=false;
  bar19.visible=false;
  bar20.visible=false;
  //bar21.visible=false;
  bar22.visible=false;
  bar23.visible=false;
  bar24.visible=false;
  bar25.visible=false;
  bar26.visible=false;
  bar27.visible=false;
  bar28.visible=false;
  portal1.visible=false;
  portal2.visible=false;
  portal3.visible=false;
  portal4.visible=false;
player.visible=false;
grp1.visible=true;
grp2.visible=true;
grp3.visible=true;
grp4.visible=true;

}
if( gamestate===1){
  grp1.visible=false;
grp2.visible=false;
grp3.visible=false;
grp4.visible=false;
  portal1.bounceOff(bar9)
  portal1.bounceOff(edges)
  portal2.bounceOff(bar16)
  portal2.bounceOff(edges)
  portal3.bounceOff(bar7)
  portal3.bounceOff(bar2)
  portal3.bounceOff(edges)
  portal4.bounceOff(bar16)
  portal4.bounceOff(edges)
  bar1.visible=true;
  bar2.visible=true;
  bar3.visible=true;
  bar4.visible=true;
  bar5.visible=true;
  bar6.visible=true;
  bar7.visible=true;
  bar8.visible=true;
  bar9.visible=true;
  bar10.visible=true;
  bar11.visible=true;
  bar12.visible=true;
  bar13.visible=true;
  bar14.visible=true;
  bar15.visible=true;
  bar16.visible=true;
  bar17.visible=true;
  bar18.visible=true;
  bar19.visible=true;
  bar20.visible=true;
  //bar21.visible=false;
  bar22.visible=true;
  bar23.visible=true;
  bar24.visible=true;
  bar25.visible=true;
  bar26.visible=true;
  bar27.visible=true;
  bar28.visible=true;
  portal1.visible=true;
  portal2.visible=true;
  portal3.visible=true;
  portal4.visible=true;
player.visible=true;
  if(keyDown("UP_ARROW")){
    player.y=player.y-2
  }
  if(keyDown("DOWN_ARROW")){
    player.y=player.y+2
  }
  if(keyDown("RIGHT_ARROW")){
    player.x=player.x+2
  }
  if(keyDown("LEFT_ARROW")){
    player.x=player.x-2
  }
  
  player.bounceOff(bar1);
  player.bounceOff(bar2);
  player.bounceOff(bar3);
  player.bounceOff(bar4);
  player.bounceOff(bar5);
  player.bounceOff(bar6);
  player.bounceOff(bar7);
  player.bounceOff(bar8);
  player.bounceOff(bar9);
  player.bounceOff(bar10);
  player.bounceOff(bar11);
  player.bounceOff(bar12);
  player.bounceOff(bar13);
  player.bounceOff(bar14);
  player.bounceOff(bar15);
  player.bounceOff(bar16);
  player.bounceOff(bar17);
  player.bounceOff(bar18);
  player.bounceOff(bar19);
  player.bounceOff(bar20);
  player.bounceOff(bar22);
  player.bounceOff(bar23);
  player.bounceOff(bar24);
  player.bounceOff(bar25);
  player.bounceOff(bar26);
  player.bounceOff(bar27);
  player.bounceOff(bar28);
}







  text(mouseX+","+mouseY,mouseX,mouseY)
  
  drawSprites()
 
}