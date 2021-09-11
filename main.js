canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
var mouseEvent=""
var last_position_of_x=0;
var last_position_of_y=0;
canvas.addEventListener("mousedown", mymousedown)
function mymousedown(e){
mouseEvent="mousedown"
}
canvas.addEventListener("mouseleave", mymouseleave)
function mymouseleave(e){
mouseEvent="mouseleave"
}
canvas.addEventListener("mouseup", mymouseup)
function mymouseup(e){
mouseEvent="mouseup"
}
canvas.addEventListener("mousemove", mymousemove)
function mymousemove(e){
    mousex=e.clientX-canvas.offsetLeft
    mousey=e.clientY-canvas.offsetTop
   if(mouseEvent=="mousedown") {
    ctx.beginPath();
    ctx.strokeStyle="grey";
    ctx.lineWidth=5;
    ctx.moveTo(last_position_of_x, last_position_of_y)
    ctx.lineTo(mousex, mousey)
    ctx.arc(mousex,mousey,30,0,360);
    ctx.stroke();
   }
   last_position_of_x=mousex;
   last_position_of_y=mousey;
}
