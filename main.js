function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(450,400);
    video.position(150,200);

    canvas = createCanvas(450,450);
    canvas.position(800,200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet has been intialised.')
}

function draw(){
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
}
}