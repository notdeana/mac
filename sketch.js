let array = [];
function setup() {
  createCanvas(2560, 1440);
  background(10);
  strokeWeight(7)
}

function draw() {
  //console.log(mouseIsPressed);
  if (mouseIsPressed == true) {
    stroke(map(mouseX, 0, 600, 0, 255, true))
    //line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  }
}

function keyTyped() {
  //console.log(`key ${key} is being typed`)
  //console.log(`key ${key} is being typed`)
  if (key === 's') {
    //save image
    saveCanvas('fileName', 'png');
  } else if (key === 'd'){
    for(let i = 0; i < array.length - 1; i++){
          line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      //console.log(i);
    }

    //line(array[1][0], array[1][1]), array[2][0], array[2][1]);
  }
    //display image
    //console.log(array);
    //console.log(array[0]);
    //console.log(array[0][1]);
  return false;
}
