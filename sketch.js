function setup() {
  createCanvas(640, 480);
  
  noFill();

  stroke(255, 0, 0);

}

function draw () {

    background(50, 0, 50);
	ellipse(100, 100, 100, 100)
// draw function
if (mouseX < 100) {
  ellipse(50, 200, 100, 100);
} else if (mouseX < 200){
  ellipse(150, 200, 100, 100);
} else if (mouseX < 300){
  ellipse(250, 200, 100, 100);
} else if (mouseX < 400){
  ellipse(350, 200, 100, 100);
} else if (mouseX < 500){
  ellipse(450, 200, 100, 100);
} else {
  ellipse(550, 200, 100, 100);
}
}