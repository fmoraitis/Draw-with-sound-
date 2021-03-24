let mic;

let y = 0;
let x = 0;
let theta1 = 0;
let theta2 = 0;
let theta3 = 0;
let theta4 = 0;
let theta5 = 0;
let v1 = 0;
let v2 = 0;
let v3 = 0;
let v4 = 0;
let v5 = 0;
let mul = 0.1;

let keepDraw = false;


function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);

  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();


}

function draw() {
  // background(220);

  let vol = mic.getLevel();
  rectMode(CENTER);
  fill(150);

  if (mouseIsPressed === true) {
    x = x + (mouseX - x) * 0.05;
    y = y + (mouseY - y) * 0.05;
  }

  translate(x, y);
  fill(255, v1);

  push();
  fill(255 / vol);
  scale(vol * 50);
  beginShape(QUADS);
  vertex(-20 + v1, -20 + v1 * 0.6); //v1
  vertex(30 + v2 * 0.5, -20 + v2 * 0.4); //v2
  vertex(30 + v3 * 0.7, 20 + v3 * 0.2); //v3
  vertex(-20 + v4 * 0.4, 20 + v4 * 0.1); //v4
  endShape();

  pop();

  v1 = 10 * sin(theta1);
  theta1 = theta1 + PI / 160;
  v2 = 10 * sin(theta2);
  theta2 = theta2 + PI / 16;
  v3 = 10 * sin(theta3);
  theta3 = theta3 + PI / 90;
  v4 = 10 * sin(theta4);
  theta4 = theta4 + PI / 30;
  v5 = 10 * sin(theta5);
  theta5 = theta5 + PI / 70;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
