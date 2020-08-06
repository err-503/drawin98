let canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
let cellSize = 10;
let on = 0;

function drawCanvas(){
    let w = document.getElementById("width").value;
    let h = document.getElementById("height").value;
    // if (w > window.innerWidth){
    //     alert("Width is too big for your screen")
    //     w = Math.floor(window.innerWidth / cellSize) * cellSize;
    // }
    // if (h > window.innerHeight){
    //     alert("Height is too big for your screen")
    //     h = Math.floor(window.innerHeight / cellSize) * cellSize;
    // }
    if(w < 100 || h < 100){
        alert("The minimum grid size is 100x100");
    } else {
        document.getElementById("canvas").height = h;
        document.getElementById("canvas").width = w;
        ctx.lineWidth = 2;
        for(x = 0; x <= w; x += cellSize){
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
        }
        for(x = 0; x <= h; x += cellSize){
            ctx.moveTo(0, x);
            ctx.lineTo(w, x);
        }
        ctx.stroke();
        document.getElementById("drawbox").style.display = "block";
        canvas.addEventListener("click", drawPix);
        canvas.addEventListener("mousedown", enableDraw);
        return cellSize;
    }
}
function drawPix(event){
    let brushSize = document.getElementById("brsh").value;
    ctx.fillStyle = document.getElementById("color").value;
    ctx.fillRect(Math.floor(event.offsetX / cellSize) * cellSize, Math.floor(event.offsetY / cellSize) * cellSize, cellSize * brushSize, cellSize * brushSize);
}

function enableDraw(){
    canvas.addEventListener("mousemove", drawPix);
    document.addEventListener("mouseup", disableDraw);
}

function disableDraw(){
    canvas.removeEventListener("mousemove", drawPix);
}

function start(){
    if(on == 0){
        document.getElementById("sm").style.display = "block";
        on = 1;
    }
    else {
        document.getElementById("sm").style.display = "none";
        on = 0;
    }
}