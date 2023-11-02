
let numArms = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(240);
  translate(width / 2, height / 2);


  numArms = int(map(mouseX, 0, width, 3, 12));
  drawSnowflake(100, numArms);
}

function drawSnowflake(radius, arms) {
  let angle = TWO_PI / arms;

  stroke(0);
  noFill();

  for (let i = 0; i < arms; i++) {
    let x1 = radius * cos(angle * i);
    let y1 = radius * sin(angle * i);
    let x2 = radius * cos(angle * i * 2);
    let y2 = radius * sin(angle * i * 2);
    line(x1, y1, x2, y2);
  }
}