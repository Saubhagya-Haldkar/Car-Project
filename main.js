canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image="Race_Track.jfif";
rover_image="Car_1.png";

rover2_width=100;
rover2_height=90;
rover2_x=10;
rover2_y=110;
rover2_image="Car_2.png";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;

    rover2_imgTag=new Image();
    rover2_imgTag.onload=uploadrover2;
    rover2_imgTag.src=rover2_image;

}
function uploadBackground(){
  ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);

}

function uploadrover2(){
    ctx.drawImage(rover2_imgTag,rover2_x,rover2_y,rover2_width,rover2_height);

}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed=='38'){
        up();
    }
    if (keyPressed=='40') {
        down();
    }
    if (keyPressed=='37') {
        left();
    }
    if (keyPressed=='39') {
        right();
    }


    keyPressed=e.keyCode;
    if(keyPressed=='87'){
        up2();
    }
    if (keyPressed=='83') {
        down2();
    }
    if (keyPressed=='65') {
        left2();
    }
    if (keyPressed=='68') {
        right2();
    }
}


function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}

function up2(){
    if(rover2_y>=0){
        rover2_y=rover2_y-10;
        uploadBackground();
        uploadrover2();
        uploadrover();
    }
}
function down2(){
    if(rover2_y<=500){
        rover2_y=rover2_y+10;
        uploadBackground();
        uploadrover2();
        uploadrover();
    }
}
function left2(){
    if(rover2_x>=0){
        rover2_x=rover2_x-10;
        uploadBackground();
        uploadrover2();
        uploadrover();
    }
}
function right2(){
    if(rover2_x<=700){
        rover2_x=rover2_x+10;
        uploadBackground();
        uploadrover2();
        uploadrover();
    }
}