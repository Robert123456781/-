//готовим инструменты
var canvas = document.getElementById("canvas");
var canvasWidth = 750;
var canvasHeight = 750;
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var canvasContext = canvas.getContext("2d");

//рисуем фон
canvasContext.fillStyle= "gray";
canvasContext.fillRect(0,0,canvasWidth,canvasHeight);
//рисуем пакумана

drawPacMan(120, 120, 75, "yellow", 45, 0)
drawPacMan(300, 120, 25, "green", 25, 135)
drawPacMan(500, 420, 55, "red", 30, 270)
function drawPacMan(posX, posY, size, color, mouth, direction)
{
    canvasContext.fillStyle= color;
    canvasContext.strokeStyle= "yellow";
    canvasContext.lineWidth= 3;
    canvasContext.beginPath();
    canvasContext.arc(posX, posY, size, ((direction / 180 - 0.5) + (mouth / 180)) * Math.PI,((direction / 180 - 0.5) + (2 - mouth / 180)) * Math.PI);
    canvasContext.lineTo(posX, posY);
    canvasContext.arc(posX, posY, size, ((direction / 180 - 0.5) + (mouth / 180)) * Math.PI,((direction / 180 - 0.5) + (2 - mouth / 180)) * Math.PI);
    canvasContext.lineTo(posX, posY);
    canvasContext.closePath();
    canvasContext.fill();
    canvasContext.stroke();
}