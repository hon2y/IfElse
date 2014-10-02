function setup() {
  createCanvas(640, 480);
  
  noFill();

  stroke(255, 255, 255);

}

function draw () {

    background(50, 100, 50);
	ellipse(320, 240, 100, 100)
// draw function
if (mouseY < 0) {
  ellipse(0, 0, 30, 30);
} else if (mouseY < 50){
  ellipse(50, 50, 50, 50);
} else if (mouseY < 100){
  ellipse(100, 100, 70, 70);
} else if (mouseY < 150){
  ellipse(150, 150, 90, 90);
} else if (mouseY < 200){
  ellipse(200, 200, 110, 110);
} else if (mouseY < 250){
  ellipse(250, 250, 130, 130);
  } else if (mouseY < 300){
  ellipse(300, 300, 150, 150);
} else if (mouseY < 350){
  ellipse(400, 400, 170, 170);
} else if (mouseY < 400){
  ellipse(450, 450, 190, 190);
} else if (mouseY < 450){
  ellipse(550, 200, 210, 210);
} else if (mouseY < 500){
  ellipse(650, 100, 230, 230);
} else {
  ellipse(750, 0, 250, 250)
}
}