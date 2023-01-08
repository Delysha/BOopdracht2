let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
ctx.fillStyle = “red”;
ctx.strokeStyle = "black";

ctx.beginPath();
ctx.moveTo(50,0);
ctx.lineTo(-50,-20);
ctx.lineTo(-50,20);
ctx.lineTo(50,0);
ctx.stroke();
ctx.fill();  
