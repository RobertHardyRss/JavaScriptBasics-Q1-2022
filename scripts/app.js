//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

class Block {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.color = "red";
		this.width = 100;
		this.height = 100;
		this.xDir = 1;
		this.yDir = 1;
	}

	draw() {
		if (this.x < 0 || this.x + this.width > canvas.width) {
			this.xDir = this.xDir * -1;
		}

		if (this.y < 0 || this.y + this.height > canvas.height) {
			this.yDir = this.yDir * -1;
		}

		// @ts-ignore
		ctx.fillStyle = this.color;
		ctx?.fillRect(this.x, this.y, this.width, this.height);
		this.x = this.x + this.xDir;
		this.y = this.y + this.yDir;
	}
}

let block1 = new Block(0, 0);
let block2 = new Block(400, 100);

block2.color = "blue";

const animate = function () {
	ctx?.clearRect(0, 0, canvas.width, canvas.height);

	block1.draw();
	block2.draw();

	requestAnimationFrame(animate);
};

requestAnimationFrame(animate);
