function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  stroke(255);
  fill(0,0);
   beginShape();
   for (var i = 100; i < 400; i += 10) {
  
  vertex (255, 255);
  vertex (375, i);
  vertex (267, 255);
  vertex (267, 300);
  endShape(CLOSE);
     }
  
  
}