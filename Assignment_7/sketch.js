var waveLengthOne = 125.0;
var waveLengthTwo = 180.0;
var pointCount = 0;
var angle = 0.0;
var particle; 

function Particle (posX, posY, col, bright) {
  this.posX = posX;
  this.posY = posY;
  this.width = random(100);
  this.height = random(100);
  this.col = col; 
  this.bright = brightness; 
}

Particle.prototype = {
     
  draw: function() { 
  noStroke();
fill(red(this.col),green(this.col),blue(this.col), 100);
  for (var i = 0; i < 10; i++) {
  ellipse (this.posX + random(-75,75), this.posY + random(-75,75), this.width, this.height); }
}
};var amplitude = 325;


function setup(){
  createCanvas(400,400);
}
function draw(){
  if(pointCount > 50000){
    noLoop();
  }
  noFill();
  particle = new Particle (x, y, color(random(100,255), random(100,255), random(100,255))); 
particle.draw(); 
  translate(width/2, height/2);
beginShape();
  for(var i=0; i < pointCount; i++){
  angle = i / waveLengthOne * TWO_PI;
  var y = sin(angle)* amplitude;
  
  angle = i / waveLengthTwo * TWO_PI;
  var x = sin(angle)* amplitude;
  vertex(x,y); 
  }
endShape();
pointCount++;

}