let array = [];
let backgroundColor = 200;
let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(500, 500, 133, 5);
  //strokeWeight(strokeWeight);
  noFill();
}

function draw() {
  //console.log(mouseIsPressed);
  background(500, 500, 133, 5);
  strokeWeight(strokeWidth);
  noiseOffset = noiseOffset + 0.10;
  strokeWidth = noise(noiseOffset) * 70;

  //if (mouseIsPressed == true) {
  // clear();
  //ellipse(mouseX, mouseY, 100);
  //background(backgroundColor);
  //backgroundColor -= 7;
  stroke(map(mouseX, 0, 600, 0, 255, true))
  line(mouseX, mouseY, pmouseX, pmouseY);
  //array.push([mouseX, mouseY]);
  //beginShape();
  //for(let i = 0; i < array.length; i++){
  //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
  //console.log(i);
  //curveVertex(array[i][0], array[i][1])
  //}
  //endShape();
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
}


function keyTyped() {
  //console.log(`key ${key} is being typed`)
  //console.log(`key ${key} is being typed`)
  if (key === 's') {
    //save image
    saveCanvas('fileName', 'png');
    //} else if (key === 'd') {
  } else if (key === 'c') {
    //clear the image
    clear();
    //beginShape();
    //for (let i = 0; i < array.length; i++) {
    //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    //console.log(i);
    //curveVertex(array[i][0], array[i][1])
    //}
    //endShape();
    //line(array[1][0], array[1][1]), array[2][0], array[2][1]);
  }
  //display image
  //console.log(array);
  //console.log(array[0]);
  //console.log(array[0][1]);
  return false;
}

function mousePressed() {
  //console.log("mouse pressed function");
  array = [];
  backgroundColor = 255;
  //console.log(array)
}
