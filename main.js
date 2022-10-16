function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 450);
    canvas.position(550,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is now active!');
}

difference = 0;
rightWristX = 0;
leftWristX = 0;
function draw() {
    background('#FFFF00');
    document.getElementById("fontsizewillbe").innerHTML = "Font Size of the Text will be = "+difference+"px"
    textSize(difference);
    text('Arkashish',30,300);
    fill('#000080');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = "+ leftWristX + "rightWristX = "+ rightWristX + "difference = "+difference);
    }
}