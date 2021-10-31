function setup() {

  video = createCapture(550,500);
  video.size(560,150);

  canvas = createCanvas(550,550);
  canvas.position(560,100);

  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);

}

function modelLoaded() {

  console.log("posenet is initialised");

}

function gotPoses(results) {

  if(results.length>0) {

    console.log(results);

  }

}

function draw() {

  background("#91807e")

}