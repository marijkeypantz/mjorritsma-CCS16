function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  stroke(255);
  fill(0,0);
   beginShape();
   for (var i = 250; i < 400; i += 10) {
  
  vertex (i, i);
  vertex (i, 125);
  vertex (75, 75);
  vertex (125, 25);
  endShape(CLOSE);
     }
  
  
}