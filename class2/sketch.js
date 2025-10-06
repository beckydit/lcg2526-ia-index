//variabili
let xMax = 400; 
let yMax = 600; 

let xrocket = xMax/2; 
let yrocket = yMax*0.6;


function setup() {
  createCanvas(xMax, yMax);
  frameRate (500);
}

function draw() {
  background(20,24,40);
  //mostrare un testo bianco che dice le coordinate del mouse
  fill (255);
  text ("X: " + mouseX + " Y: " + mouseY, 20, 20);

  //aprire contesto di diesgno
  push ();
  fill (200);
  stroke (40);
  //alternativa
  rectMode (CENTER)
  rect (xrocket,yrocket,80,180,20);
  //
  //pop ();
  //triangolo
  fill (200,40,40);
  triangle (xrocket-40,yrocket-80,xrocket+40,yrocket-80,xrocket,yrocket-120);

  //cerchio
  fill (40,150,220);
  stroke (255);
  strokeWeight (3);
  ellipse (xrocket,yrocket-40,48,48);
  //finire contestodi disegno
  pop ();  

  yrocket = (yrocket-1) % yMax;
  if (yrocket <  ) 
    yrocket = yMax;
}