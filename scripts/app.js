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

const width = 100;
const height = 50;

let xDir = 1;
let yDir = 1;

const animate = function () {
	ctx?.clearRect(0, 0, canvas.width, canvas.height);

	if (x < 0 || x + width > canvas.width) {
		xDir = xDir * -1;
	}

	if (y < 0 || y + height > canvas.height) {
		yDir = yDir * -1;
	}

	ctx?.fillRect(x, y, width, height);
	x = x + xDir;
	y = y + yDir;
	requestAnimationFrame(animate);
};

requestAnimationFrame(animate);
