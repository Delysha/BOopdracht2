
let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.strokeStyle = "black";

ctx.beginPath();
ctx.moveTo(70,20);
ctx.lineTo(-30,0);
ctx.lineTo(-30,40);
ctx.lineTo(70,20);
ctx.stroke();
ctx.fill();  
