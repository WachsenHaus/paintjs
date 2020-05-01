const canvas = document.getElementById("jsCanvas");
const ctx= canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');

canvas.width = 700;
canvas.height = 700;
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;
//클라리언트 xy는 윈도우를 기반으로
//오프셋 xy는 캔버스 안에서의 xy좌표이다.

function stopPainting(){
    painting = false;
    console.log(painting)
}
function startPainting(){
painting = true;
}
function onMouseMove(event)
{
    const x= event.offsetX;
    const y = event.offsetY;
    if(!painting)
    {
        // console.log(`${x},${y}좌표에 위치하고있습니다.`);
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        // console.log(`${x},${y}좌표에 선을 그립니다.`);
        ctx.lineTo(x,y);
        ctx.stroke();
    }
    // console.log(x,y);
}

function handelColorClick(event) {
const color = event.target.style.backgroundColor;
ctx.strokeStyle = color;
}

function handleRangeChange(event)
{
    const stroke = event.target.value;
    ctx.lineWidth = stroke;
}

function handelModeClick()
{
    if(filling === true)
    {
        filling = false;
        mode.innerText="Fill";
    }
    else
    {
        filling = true;
        mode.innerText="Paint";
    }
}
if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
}
// Array.from(colors).forEach(potato => potato.addEventListener("click",handelColorClick));

Array.from(colors).forEach(function(potato){
    potato.addEventListener("click",handelColorClick);
})

if(range)
{
    range.addEventListener("input",handleRangeChange);
}

if(mode)
{
    mode.addEventListener('click',handelModeClick);
}