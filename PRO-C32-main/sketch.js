var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var balls = [];
var plinkos = [];
var divisions =[];
var ball;
var turno = 0;
var jugador = 1;
var pl;

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(30)
  text("Puntuación : "+score,20,40);
  textSize(10)
  fill("white");
  text("El primer tiro cuando turno dice 0 es de prueba", 20, 400);
  text("Presiona tecla 'd' si ya han jugado todos y quieren otra ronda",20, 430 )

  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
  ground.display();


  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(ball!=null)
    {
       ball.display();
if ( ball.body.position.y > 450 && ball.body.position.x > 560 && ball.body.position.x < 800){
    score = score +200;
        ball = null;  
}

  if ( ball != null){
    ball.display();
    if ( ball.body.position.y > 450 && ball.body.position.x > 0 && ball.body.position.x < 320){
      score = score +500;
          ball = null;  
}
  }

  if (ball != null){
    ball.display();
    if ( ball.body.position.y > 450 && ball.body.position.x > 320 && ball.body.position.x < 560){
      score = score +100;
          ball = null;  
    }
  }

  
    }


   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }

   strokeWeight (5);
   stroke("yellow");
   pl = line (0,450,800,450);

   if (turno === 0){
    score = 0;
  }
 ADMIN ();
 strokeWeight (1);
 stroke("white");
 textSize(30)
  text("Jugador:"+jugador,250,40);
  fill("red");
  textSize(30)
  text("Turno(cada quien tiene 5):"+turno,400,40);
  Keypressed();
}


function mousePressed()
{
  ball=new Ball(mouseX, 10, 10, 10);  
  turno = turno +1;
}

function ADMIN (){
  if ( turno === 6){
    turno = 0;
    jugador = jugador + 1;
  }

  console.log(jugador);
  console.log(turno);
  
}

function Keypressed(){
if ( keyCode == 100){
  score = 0;
  jugador = 0;
  turno = 0;
}

}
