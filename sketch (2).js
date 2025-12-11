function setup() {
 let canvas = createCanvas(400, 400);
  canvas.parent('teacup');

}

function draw() {
  background(255);
  
  //Plate
  stroke(105, 93, 28);
  strokeWeight(1);
  fill(183, 160, 43);
  ellipse(200,349,250,40);
  noStroke(0);
  fill(232, 227, 233);
  ellipse(200,349,200,30);
 
  
  //handle
  noFill();
  stroke(219, 217, 207);
  strokeWeight(13);
  ellipse(300, 280, 60);
  noFill();
  stroke(255);
  strokeWeight(10);
  ellipse(300, 280, 60);

  //Cup body
  strokeWeight(2);
  stroke(219, 217, 207);
  fill(255);
  ellipse(200,340,90,40);
  fill(255);
  ellipse(200,300,170,90);
  rect(200,270,170,57);
  noStroke(0);
  fill(255);
  rect(200,300,167,10);
  fill(40, 40, 185);
  
 
  // Tea 
   strokeWeight(0);
  fill(169, 139, 28);
  rectMode(CENTER);
  ellipse(200,240,170,50);
  fill(183, 103, 119);
  ellipse(200, 245, 150, 30);
  noFill(0);
  strokeWeight(2);
  stroke(211, 140, 140);
  ellipse(200, 245, 110, 20);
  ellipse(200, 245, 150, 30);
  ellipse(200, 245, 30, 5);
  
 // Petals 
 fill(239, 225, 241);
 noStroke(0);
 // top petal
ellipse(200, 285, 25, 40);
// side petals
ellipse(179, 295, 30, 30);
ellipse(219, 295, 30, 30);
// lower petals
ellipse(188, 315, 30, 20);
ellipse(213, 315, 30, 20);
// center 
fill(255, 120, 170);
ellipse(200, 300, 15, 13);
// inner piece
fill(255, 80, 140);
ellipse(200, 303, 10, 8);


// Steam
drawSteam();
  
 
}

let t = 0;
function drawSteam() {
  strokeWeight(0);
  fill(233, 227, 229);

  for (let i = 0; i < 3; i++) {
    let x = 180 + i * 20;
    let y = 210 - (t % 200);

    ellipse(x, y, 20, 40);
    ellipse(x + 10, y + 20, 15, 30);
    ellipse(x - 10, y + 40, 10, 20);
  }

  t += 1.5;

  
 
}

