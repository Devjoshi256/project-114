upperlipX = 0; 
upperlipY = 0;

function preload(){
 upper_lip = loadImage("https://www.freepnglogos.com/uploads/mustache-png/mustache-student-math-favorite-for-friday-the-the-1.png");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        upperlipX = results[0].pose.upperlip.x-15;
        upperlipY = results[0].pose.upperlip.y-15;
        console.log("upper lip x = " + results[0].pose.upperlip.x);
        console.log("upper lip y = " + results[0].pose.upperlip.y);
    }
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialised');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(upper_lip, upperlipX, upperlipY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}