/*

        ## Wall Drawing #46 (1970)

        Vertical lines, not straight, not touching, covering the wall evenly.

      */


function setup() {
  createCanvas(400, 400);
  strokeWeight(2);
  background(150,255,78);
  
}

function draw() {
  //
  
  //loop function for zig zag
   var startX=0; 
    var startY=0;
    var endX=10; 
    var endY=10;
    var Xfactor = 10; 
    var Yfactor = 0; 
  for(var i=0; i<40; i++){
    console.log(i+ "," + startX + "," + startY + "," +endX + "," + endY);
    
    line(startX, startY, endX, endY);
    line(startX+10, startY, endX+10, endY);
    line(startX+20, startY, endX+20, endY);
    line(startX+30, startY, endX+30, endY);
    line(startX+40, startY, endX+40, endY);
    line(startX+50, startY, endX+50, endY);
    line(startX+60, startY, endX+60, endY);
    line(startX+70, startY, endX+70, endY);
    line(startX+80, startY, endX+80, endY);
    line(startX+90, startY, endX+90, endY);
    line(startX+100, startY, endX+100, endY);
    line(startX+110, startY, endX+110, endY);
    line(startX+120, startY, endX+120, endY);
    line(startX+130, startY, endX+130, endY);
    line(startX+140, startY, endX+140, endY);
    line(startX+150, startY, endX+150, endY);
    line(startX+160, startY, endX+160, endY);
    line(startX+170, startY, endX+170, endY);
    line(startX+180, startY, endX+180, endY);
    line(startX+190, startY, endX+190, endY);
    line(startX+200, startY, endX+200, endY);
    line(startX+210, startY, endX+210, endY);
    line(startX+220, startY, endX+220, endY);
    line(startX+230, startY, endX+230, endY);
    line(startX+240, startY, endX+240, endY);
    line(startX+250, startY, endX+250, endY);
    line(startX+260, startY, endX+260, endY);
    line(startX+270, startY, endX+270, endY);
    line(startX+280, startY, endX+280, endY);
    line(startX+290, startY, endX+290, endY);
    line(startX+300, startY, endX+300, endY);
    line(startX+310, startY, endX+310, endY);
    line(startX+320, startY, endX+320, endY);
    line(startX+330, startY, endX+330, endY);
    line(startX+340, startY, endX+340, endY);
    line(startX+350, startY, endX+350, endY);
    line(startX+360, startY, endX+360, endY);
    line(startX+370, startY, endX+370, endY);
    line(startX+380, startY, endX+380, endY);
    line(startX+390, startY, endX+390, endY);
    startX=endX; 
    startY=endY; 
    endX=endX*(-1)+10
    endY=endY+10; 
  }
    

}

  
  