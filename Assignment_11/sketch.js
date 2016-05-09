var table;
var stimulants = [];
nonStimulants=[];
depressants=[];
var textX = 75;

function preload(){
table = loadTable("data/marijke_drink_stats.csv", "csv", "header");
}

function setup() {
  createCanvas(700,700);
  textSize(24);
  //VERY IMPORTANT: to get row as array, we need to call
  //getRow(rowNumber).arr; // <--no parens
  stimulants = table.getRow(0).arr;
  nonStimulants = table.getRow(1).arr;
  depressants = table.getRow(2).arr;


}

function draw(){
  background(255);
  fill(0);
  textSize(12);
  text('Personal beverage consumption throughout the week', 125, 50);
  fill(255,0,0);
  noStroke(); 
  rect(10, 370, 25, 25);
  fill(0);
  text('caffeine', 50, 390);
  fill(0,255,0);
  rect(10, 420, 25, 25);
   fill(0);
  text('non-caffeine', 50, 440);
  fill(0,0,255);
  rect(10, 470, 25, 25);
   fill(0);
  text('alcohol', 50, 490);
  textSize(12);
fill(0);
text("tuesday", textX,(height/2)+10);
text("wednesday", textX*2,(height/2)+10);
text("thursday", textX*3,(height/2)+10);
text("Friday", textX*4,(height/2)+10);
text("Saturday", textX*5,(height/2)+10);
text("Sunday", textX*6,(height/2)+10);

  translate(0,height/2);
  //we loop from i=2 to aveTemperatureData.length-2
  //because our row contains more data than just monthly
  //temps
  for(var i = 1; i < stimulants.length; i++){
    translate(75,0);
    push();
    fill (255, 0, 0);
    noStroke();
    rect(0,0,20,stimulants[i] * -50.0);
    pop();
  } 
  for(var j = 1; j < nonStimulants.length; j++){
    translate(75,0);
    push();
    fill (0, 255, 0);
    noStroke();
    rect(-425,0,20,nonStimulants[j] * -50.0);
    pop();
}

  for(var k = 1; k < depressants.length; k++){
    translate(75,0);
    push();
    fill (0, 0, 255);
    noStroke();
    rect(-850,0,20,depressants[k] * -50.0);
    pop();
}

    
  
}
      