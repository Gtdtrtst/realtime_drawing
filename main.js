nosex = 0;
nosey = 0;
difference = 0;
leftwristx = 0;
rightwristx = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(550,400);
    canvas.position(560,100);
    video.position(40,50);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotResults)
}
function draw(){
    background('#DEDAED');
    document.getElementById("width_and_height").innerHTML="Width ad height of the square will be : "+difference;
    fill('#070c14');
    stroke('#070c14');
    square(nosex,nosey,difference);
}
function modelLoaded(){
    console.log("model is loaded");
}
function gotResults(results){
    if(results.length>0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nosex = "+nosex+" nosey= "+nosey);
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx);
        console.log("leftwrist x = "+leftwristx+ " rightwristx = "+rightwristx+" defference= "+difference);
    }
}
