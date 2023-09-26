function setup() {
    createCanvas(400, 400);
    frameRate(60);
    
  }
  
  function draw() {
    background(220);
    
    ellipse(mouseX,mouseY,200,200);
    fill(mouseX,mouseY,100);
    
  }