var fixedrect,movingrect
function setup() {
  createCanvas(800,400);
 fixedrect =createSprite(400, 200, 50, 50);
 movingrect=createSprite(100,100,40,60);
 fixedrect.debug=true;
 movingrect.debug=true;
}

function draw() {
  background(0); 
  movingrect.x=mouseX ;
  movingrect.y=mouseY ;
  isTouching();
  drawSprites();
}
function isTouching(){
if(movingrect.x-fixedrect.x<=movingrect.width/2+fixedrect.width/2&&
  fixedrect.x-movingrect.x<=movingrect.width/2+fixedrect.width/2&&
  movingrect.y-fixedrect.y<=movingrect.height/2+fixedrect.height/2&&
  fixedrect.y-movingrect.y<=movingrect.height/2+fixedrect.height/2){
  text("ALL OF U DAB AS THEY ARE TOUCHING",150,50);
  fixedrect.shapeColor="blue";
  movingrect.shapeColor="red";
}
else{
  fixedrect.shapeColor="green";
  movingrect.shapeColor="yellow";
}



}