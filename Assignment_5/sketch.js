function setup() {
  createCanvas(1000,1000);
}

function draw() {
    scale(.25,.25);
  cuteComputer(random(4000),random(4000));

}
  function cuteComputer(x,y) {
  strokeWeight(8);
  //body
  fill(210);
  rect(x, y, 245, 280, 10);
  //face
  fill(167, 178, 250);
  rect(x+25, y+25,195, 155, 10);
  //left eye
  strokeWeight(15);
  line(x+80, y+70, x+80, y+85);
  //right eye
  strokeWeight(15);
  line(x+165, y+70, x+165, y+85);
  //nose 
  strokeWeight(10);
  line(x+125, y+70, x+125, y+125);
  line(x+125, y+125, x+115, y+125);
  //mouth
  arc(x+123, y+140, 65, 35, 0, PI);
  //power
  line(x+30, y+240, x+50, y+240);
  //disk drive
  line(x+170, y+220, x+220, y+220);
  //stand
  fill(210);
  rect(x+20, y+282, 205, 35);
}
