var value;  
function setup() {
createCanvas(500, 500);

}

function draw() {
  value = color(255,0,0);
  background(0);
  //fill(value);  
  if (mouseX > 250) {
    fill(255);
  } else{
  fill(255, 0, 0);}
  ellipse(250, 250, width/2, height/2);
  //mouseClicked();
}
/*
function mouseClicked() {
  if (value === color(255,0,0)) {
    value === color(255);
  } else {
    value === color(255,0,0);
  }
    
    }
*/
