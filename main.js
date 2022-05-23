song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
song1_status="";
song2_status="";
scoreRightWrist=0;
function preload(){
    song1=loadSound("harrypotter-Lumos.mp3");
    song2=loadSound("Peterpan-Diatas Normal.mp3");
}
function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
}
function modelLoaded(){
    console.log('PoseNet is initialised');
}
function gotPoses(results){
    if(results.length > 0) {
        console.log(results);

        scoreLeftWrist = results[0].pose.keypoint[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftwristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
    }

function draw(){
    image(video, 0, 0, 600, 500);
    song1_status=song1.isPlaying();
    fill("#f5101e");
    stroke("#f5101e");
    if(scoreLeftWrist>0.2){
        circle(leftWristX, leftWristY, 20);
        song1.stop();
        if(song2_status==false){
            song2.play();
            document.getElementById("song_name").innerHTML = "playing -harrypotter-Lumous.mp3";
            song_status = song_2.isPlaying();
        }
    }
    if(scoreRightWrist > 0.1)
    {
        circle(rightWristX, rightWristYs, 20);
        song_1.stop();

        if(song_status_2 == false)
        {
            song_2.play();
            document.getElementById("song_name").innerHTML = "playing -Peterpan-Diatas Normal.mp3";
        }
    }
}
function play(){
    song1.play();
    song.setVolume(1);
    song.rate(1);
}