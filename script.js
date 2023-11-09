const canvas = document.getElementById("fractal-canvas");
const ctx = canvas.getContext("2d");

let minRe = -2;
let maxRe = 2;
let minIm = -2;
let maxIm = 2;
const maxIterations = 100;
const zoomFactor = 1.5;

function drawMandelbrot() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
            const re = map(x, 0, canvas.width, minRe, maxRe);
            const im = map(y, 0, canvas.height, minIm, maxIm);

            let zRe = re;
            let zIm = im;
            let n = 0;

            while (n < maxIterations) {
                const zReSq = zRe * zRe;
                const zImSq = zIm * zIm;

                if (zReSq + zImSq > 4) {
                    break;
                }

                const newRe = zReSq - zImSq + re;
                const newIm = 2 * zRe * zIm + im;

                zRe = newRe;
                zIm = newIm;
                n++;
            }

            const brightness = map(n, 0, maxIterations, 0, 1);
            const colorValue = Math.floor(brightness * 255);
            const color = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;

            ctx.fillStyle = color;
            ctx.fillRect(x, y, 1, 1);
        }
    }
}


function zoomIn() {
    const newWidth = (maxRe - minRe) / zoomFactor;
    const newHeight = (maxIm - minIm) / zoomFactor;
    const centerRe = (maxRe + minRe) / 2;
    const centerIm = (maxIm + minIm) / 2;

    minRe = centerRe - newWidth / 2;
    maxRe = centerRe + newWidth / 2;
    minIm = centerIm - newHeight / 2;
    maxIm = centerIm + newHeight / 2;

    drawMandelbrot();
}

function zoomOut() {
    const newWidth = (maxRe - minRe) * zoomFactor;
    const newHeight = (maxIm - minIm) * zoomFactor;
    const centerRe = (maxRe + minRe) / 2;
    const centerIm = (maxIm + minIm) / 2;

    minRe = centerRe - newWidth / 2;
    maxRe = centerRe + newWidth / 2;
    minIm = centerIm - newHeight / 2;
    maxIm = centerIm + newHeight / 2;

    drawMandelbrot();
}

function map(value, start1, stop1, start2, stop2) {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}
function scrollLeft() {
    const shiftAmount = (maxRe - minRe) * scrollFactor;
    minRe -= shiftAmount;
    maxRe -= shiftAmount;
    drawMandelbrot();
}

function scrollRight() {
    const shiftAmount = (maxRe - minRe) * scrollFactor;
    minRe += shiftAmount;
    maxRe += shiftAmount;
    drawMandelbrot();
}

function scrollUp() {
    const shiftAmount = (maxIm - minIm) * scrollFactor;
    minIm -= shiftAmount;
    maxIm -= shiftAmount;
    drawMandelbrot();
}

function scrollDown() {
    const shiftAmount = (maxIm - minIm) * scrollFactor;
    minIm += shiftAmount;
    maxIm += shiftAmount;
    drawMandelbrot();
}