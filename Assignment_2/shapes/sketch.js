function setup() {
  createCanvas(769, 1048)
}

function draw() {
  var c = color(246, 244, 232);
  background(0,22,67);
  strokeWeight(0);
  fill(c);
  triangle(0,0, 0, 340, 346, 0);
  rect(166, 175, 263, 255);
  rect(245, 604, 263, 263);
  triangle(769, 696, 769, 1047, 437, 1047);
  quad(0, 606, 168, 779, 168, 1047, 0, 871);
  quad(598, 0, 769, 169, 769, 428, 598, 258)
}