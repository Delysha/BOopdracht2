let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.strokeStyle = "black";




let x = 100;								//beginposities
let y = 100;
let size = 10;
let previousT = 0; 					//timestamp uit vorige frame
let deltaT = 0;	
let acc = 0.001;
let speed = 0;
let maxSpeed = 0.2;					//tijdsduur van frame
function update(time){      
    if(previousT != 0){
        deltaT = time - previousT;	//bereken tijdsduur van frame
    }
    if(speed < maxSpeed)speed += inputVector.y * acc; 	//verInput -1 remmen, 1 gas, 0 niets
    if(speed < 0)speed = 0;					//nooit achteruit
    if(speed > 0 && inputVector.y == 0) speed-=0.001;	//langzaam snelheid verminderen
    x+= speed * deltaT;				//compenseer frame drops!
    drawShip(x,y,size,"green");
    previousT = time;
    window.requestAnimationFrame(update);
    

}
window.requestAnimationFrame(update);



function drawShip(x, y, size, color) {				//Vierkantje tekenen
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + size, y);
    ctx.lineTo(x + size, y + size);
    ctx.lineTo(x, y + size);
    ctx.lineTo(x, y);
    ctx.fill();
}



let inputVector = {x:0,y:0};
//onpress
document.addEventListener("keydown", (event)=>{
    if(event.key == "w"){
        inputVector.y = 1;
    }
    else if(event.key == "s"){
        inputVector.y = -1;
    }
    else if(event.key == "a"){
        inputVector.x = -1;
    }
    else if(event.key == "d"){
        inputVector.x = 1;
    }
});

document.addEventListener("keyup", (event)=>{
    if(event.key == "w" || event.key =="s"){
        inputVector.y = 0;
    }
    else if(event.key == "a" || event.key == "d"){
        inputVector.x = 0;
    }
});
