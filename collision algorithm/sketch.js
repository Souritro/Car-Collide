var car,wall,damage, speed, weight;
function setup() {
  createCanvas(1600,400);
 //input= createInput();
  car= createSprite(50, 100, 100,50);
  wall= createSprite(1500,100,50,150);
  wall.shapeColor= color(80,80,80);
  speed= Math.round(random(50,200));
  weight= Math.round(random((400,1500)))
  damage= (0.5*weight*speed*speed)/22500;

}
function draw(){
  background(0);
  text(`speed:${speed}`,50,50);
  text(`weight:${weight}`, 80,350);
  car.setVelocity(speed,0);
  if(wall.x-car.x< (car.width+wall.width)/2){
      car.velocityX=0
    //text(`damage${damage}`,382,382);
    //car.VelocityY=0
      if(damage<100){
        car.shapeColor= color(0,255,0);
        text("Car is GOOD",800,200);
      }
      else if(damage>100&&damage<180){
        car.shapeColor = color(230,230,0);
        text("Car is AVERAGE",800,200);

      }
      else if(damage>180){
        car.shapeColor=color(255,0,0);
        text("Car is Dangerous",800,200);

      }
    }
  drawSprites();

}


 // }

