var particle = {
  width: 1,
  height: 1,
}; 

function setup () { 
  createCanvas(200, 200); 
  frameRate(30);
}
function draw () {
bluePixels(); 
bluePixels();
bluePixels();
bluePixels();
bluePixels();
bluePixels();
bluePixels(); 
bluePixels();
bluePixels();
bluePixels();
bluePixels();
bluePixels();
fill(255);
textSize(50);
text("white", 50, 50);
}

function bluePixels (){
r = random(100,255);
g = random(100,255);
b = random(100,255);
var particleX = mouseX + random(0,25);
var particleY = mouseY + random(0,25);
  noStroke();
  fill(0,g,b);
  ellipse (particleX, particleY, particle.width, particle.height);
}
  

