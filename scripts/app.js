//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

// @ts-ignore
ctx.fillStyle = "red";

let x = 0;
let y = 0;

const animate = function () {
	ctx?.clearRect(0, 0, canvas.width, canvas.height);

	ctx?.fillRect(x, y, 100, 50);
	x = x + 1;
	y = y + 1;
	requestAnimationFrame(animate);
};

requestAnimationFrame(animate);
