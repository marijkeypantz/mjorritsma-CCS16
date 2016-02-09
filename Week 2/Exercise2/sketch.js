function setup() {
createCanvas(500, 500); 
}


function draw() {
  if(mouseX > 0 ){
    rect(mouseX, mouseY, mouseX+random(50), mouseY+random(10));
    fill(0, random(255), 0);
  }

  
  
}