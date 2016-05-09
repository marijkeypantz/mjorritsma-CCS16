function setup() {
  createCanvas(500, 700);
}

function draw() {
  strokeWeight(0);
//dark purple
fill(57, 0, 77);
rect(0,0,500, 180);
//light purple
fill(204, 51, 255);
//tilted purple
rect(0,550,500, 180);
fill(191, 0, 255);
beginShape();
vertex(75, 30);
vertex(425, 45);
vertex(405, 650);
vertex(50, 635);
endShape();
//green
fill(255, 102, 0);
rect(0,150, 500, 400);
//orange
fill(0,51, 0);
rect(0,100, 500, 50);

}