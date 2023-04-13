var rex;
function setup() {
  createCanvas(1200,256.5);
  rex = createSprite(50,50,50,50);
}

function draw() 
{
  background("#bbbbbb");
  
  if (keyDown("d"))
  {
    rex.x = rex.x+3;
    rex.shapeColor=rgb(50,222,111); //50,222,111 = verde limón
    background(222,50,111);
  }
  if (keyDown("a"))
  {
    rex.x = rex.x-3;
    rex.shapeColor=rgb(222,222,50); //222,222,50 = amarillo
    background(180,50,255);
  }
  if (keyDown("w"))
  {
    rex.y = rex.y-3;
    rex.shapeColor=rgb(222,50,222); //222,50,222 = magenta
    background(100,225,50);
  }
  if (keyDown("s"))
  {
    rex.y = rex.y+3;
    rex.shapeColor=rgb(50,222,222); //50,222,222 = cyan
    background(255,111,50);
  }
  drawSprites();
}




