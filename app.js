const canvas = document.getElementById("jsCanvas");
const ctx= canvas.getContext('2d');

ctx.strokeStyl

let painting = false;
//클라리언트 xy는 윈도우를 기반으로
//오프셋 xy는 캔버스 안에서의 xy좌표이다.

function stopPainting(){
    painting = false;
    console.log(painting)
}
function onMouseMove(event)
{
    const x= event.offsetX;
    const y = event.offsetY;
    // console.log(x,y);
}

function onMouseDown(event)
{
    painting = true
    console.log(painting);
}
function onMouseUp(event)
{
    painting = false;
    console.log(painting);
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",onMouseDown);
    canvas.addEventListener("mouseup",onMouseUp);
    canvas.addEventListener("mouseleave",stopPainting);
}