console.log("Make sure its linked");

const x = 1;
const y = 2;


// double = is a little more broad triple = is very exact
if (x === y) {
    console.log("SUCCESS")
}
else {
    console.log("EPIC FAIL")
}


const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

function random(number) {
    return Math.floor (Math.random () * number);
}

console.log(random(2));

function random2(number) {
    return(Math.random () * number);
}



function draw() {
    //console.log("TEST");

    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (let i = 0; i<100; i++) {
        ctx.beginPath();
        let red = random(255);
        let green = random(255);
        let blue = random(255);
        let alpha = random2(1);
        let color = "rgba("+red+","+green+","+blue+","+alpha+")"
        console.log(color);
        ctx.fillStyle = color;
        ctx.arc(
            random(canvas.width),
            random(canvas.height),
            random(100),
            0,
            2 * Math.PI,
        );
        ctx.fill();
    }

}

btn.addEventListener("click", draw);
