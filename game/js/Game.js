
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
console.log("hello")

while(true){
    
}

//tekenposities
let x = 100;
let y = 100;
let size = 10;
//kleur
ctx.fillStyle = "red";
function update(time){
    //beweging
    x++;
    //teken vierkant
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+size,y);
    ctx.lineTo(x+size,y+size);
    ctx.lineTo(x,y+size);
    ctx.lineTo(x,y);
    ctx.fill();
    window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);