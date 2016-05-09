var lexicon;
var particle; 
function Particle (posX, posY, col, bright) {
  this.posX = posX;
  this.posY = posY;
  this.width = random(1,3);
  this.height = random(1,3);
  this.col = col; 
  this.bright = brightness; 
}

Particle.prototype = {
     
  draw: function() { 
  noStroke();
  var alphaY = mouseY;
 fill(0,green(this.col),blue(this.col), (alphaY/3));
  for (var i = 0; i < mouseY*.75; i++) {
  ellipse (this.posX + random(-75,75), this.posY + random(-75,75), this.width, this.height); }
}
}; 



function setup () { 
  createCanvas(700, 700); 
  lexicon = new RiLexicon();
  textAlign(CENTER, CENTER);
  textAlign(LEFT, TOP);
}


function draw () {
particle = new Particle (mouseX, mouseY, color(random(100,255), random(100,255), random(100,255)));
particle.draw(); 


}




