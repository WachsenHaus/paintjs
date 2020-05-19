const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

let INITIAL_COLOR = "2c2c2c";
const CANVAS_SIZE = 700;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
ctx.backgroundColor = INITIAL_COLOR;

let painting = false;
let filling = false;
//클라리언트 xy는 윈도우를 기반으로
//오프셋 xy는 캔버스 안에서의 xy좌표이다.

function stopPainting() {
  painting = false;
  console.log(painting);
}
function startPainting() {
  painting = true;
}
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    // console.log(`${x},${y}좌표에 위치하고있습니다.`);
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else if (painting && !filling) {
    // console.log(`${x},${y}좌표에 선을 그립니다.`);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
  // console.log(x,y);
}

function handelColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  const stroke = event.target.value;
  ctx.lineWidth = stroke;
}

function handelModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}
function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}
function handleCM(event) {
  //   console.log(event);
  event.preventDefault();
}
function handleSaveClick() {
  const image = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaingJS[EXPORT]";
  link.click();
  console.log(link);
}
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}
// Array.from(colors).forEach(potato => potato.addEventListener("click",handelColorClick));

Array.from(colors).forEach(function (potato) {
  potato.addEventListener("click", handelColorClick);
});

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handelModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}
