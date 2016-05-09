function setup(){
  createCanvas(500, 500);
}
function draw() {
strokeWeight(5);
from = color(250, 30, 20);
to = color(255, 50, 25);
interA = lerpColor(to, from, random(.01, .99));
stroke(interA);
translate(width/2,height/2);
rotate(radians(frameCount%360));
for(var i =0; i < 8; i++){
push();
//this means that we are dividing 360 degrees into
//8 portions
rotate(TWO_PI * i / 8);
//play around with the first parameter
fill(10,242,220);
triangle(frameCount % (width/2),0,100,100, 30, 30);
pop();
  }
}