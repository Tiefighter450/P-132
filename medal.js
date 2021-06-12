status = false;
objects = [];
percent = 0;
img = "";
function back() {
  window.location.href = "index.html";
}
function preload() {
  img = loadImage("medal.jpg");
}

function setup() {
  canvas = createCanvas(400, 400);
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded() {
  console.log("Model Loaded!");
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if(error) {
      console.log(error);
  }
  console.log(results);
  objects = results;
}

function draw() {
  canvas.center();
  image(img, 0, 0, 400, 400);
}
