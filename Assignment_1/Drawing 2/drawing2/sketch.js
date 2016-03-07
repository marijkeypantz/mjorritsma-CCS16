//Six white Geometric Figures (outlines) superimposed on a black wall.  

function setup() {
  createCanvas(400, 400);

  
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(3);
  fill(0, 0);
  //SHAPE 1
  beginShape();
  vertex (180, 82);
  vertex (5, 100);
  vertex (75, 255);
  vertex (400, 97);
  endShape(CLOSE);
  
  //SHAPE 2
  beginShape(); 
  vertex(300, 375);
  vertex(150, 125); 
  vertex(50, 325); 
  endShape(CLOSE);
  
  //SHAPE 3
  beginShape();
  vertex (40, 100);
  vertex (255, 255);
  vertex (8, 195);
  vertex (34, 92);
  endShape(CLOSE);
  
  //SHAPE 4
  beginShape();
  vertex (43, 80);
  vertex (294, 100);
  vertex (398, 264);
  vertex (111, 300);
  endShape(CLOSE);
  
  //SHAPE 5
  beginShape();
  vertex (298, 362);
  vertex (194, 372);
  vertex (177, 119);
  vertex (181, 120);
  endShape(CLOSE);
  
  //SHAPE 6
  beginShape();
  vertex (17, 264);
  vertex (312, 151);
  vertex (86, 41);
  vertex (341, 117);
  endShape(CLOSE);
  
}