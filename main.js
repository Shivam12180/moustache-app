nose_x = 0;
nose_y = 0;

m_x = 0;
m_y = 0;
function preload(){
    clown_nose = loadImage("clown_nose.png");
    moustache = loadImage("moustache.png");
}

function setup(){
    canvas = createCanvas(500,500)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",getPoses);

}

function modelLoaded(){
    console.log('modelLoaded');
}

function getPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x = results[0].pose.nose.x-45;
        nose_y = results[0].pose.nose.y-40;

        m_x = results[0].pose.nose.x-60;
        m_y = results[0].pose.nose.y-10;
    }
}

function draw(){
    image(video,0,0,500,500);
    image(clown_nose,nose_x,nose_y,100,50);

    image(moustache,m_x,m_y,120,120);
}

function take_snapshot(){
    save("pic.png");
}