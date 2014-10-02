function setup() {
  createCanvas(640, 480);
  
  noFill();

  stroke(255, 0, 0);

}

function draw () {

    background(50, 0, 50);
	ellipse(100, 100, 100, 100)
// draw function
if (mouseX < 300) {
  ellipse(200, 200, 100, 100);
}
}