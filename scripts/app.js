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

const numberOfBlocks = 10;
let blocks = [];
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

for (let index = 0; index < numberOfBlocks; index++) {
	let w = Math.random() * 30 + 10;
	let h = Math.random() * 30 + 10;
	let x = Math.random() * (canvas.width - w);
	let y = Math.random() * (canvas.height - h);
	let colorIndex = Math.floor(Math.random() * colors.length);

	// add random direction to xDir and yDir
	// and make the random numbers range from -3 to -1 or 1 to 3
	let block = new Block(x, y);
	block.width = w;
	block.height = h;
	block.color = colors[colorIndex];
	blocks.push(block);
}

const animate = function () {
	ctx?.clearRect(0, 0, canvas.width, canvas.height);

	blocks.forEach((b) => {
		b.draw();
	});

	requestAnimationFrame(animate);
};

requestAnimationFrame(animate);
