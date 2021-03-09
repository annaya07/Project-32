var plane;
var baskect;
var foodbag;
var ground;
var engine, world;

function preload()
{
	planeIMG=loadImage("plane.png")
	foodbagIMG=loadImage("foodbag.png")
}


function setup(){
    createCanvas(800, 700);
	rectMode(CENTER);
	

	foodbagSprite=createSprite(width/2, 80, 10,10);
	foodbagSprite.addImage(foodbagIMG)
	foodbagSprite.scale=0.2

	planeSprite=createSprite(width/2, 200, 10,10);
	planeSprite.addImage(planeIMG)
	planeSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	foodbagBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, foodbagBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
	background(0);
   
	foodbagSprite.x= foodbagBody.position.x 
	foodbagSprite.y= foodbagBody.position.y 
  
	drawSprites();
   
  }

  function keyPressed() {
	if (keyCode === LEFT_ARROW) {
  
	  planeSprite.x=planeSprite.x-20;    
	  translation={x:-20,y:0}
	  Matter.Body.translate(foodbagBody, translation)
  
  
	} else if (keyCode === RIGHT_ARROW) {
	  planeSprite.x=planeSprite.x+20;
	  translation={x:20,y:0}
	  Matter.Body.translate(foodbagBody, translation)
	}
	else if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(foodbagBody,false);
	  
	}
  }









