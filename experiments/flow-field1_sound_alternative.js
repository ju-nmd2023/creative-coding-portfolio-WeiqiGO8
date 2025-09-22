// The following code was inspired by the FLow field example 01 from lecture "CC Complexity", by Bassima and Garritt.

let angles = [];

function setup() {
	createCanvas(innerWidth, innerHeight);
	for (let x = 0; x < maxCols; x++) {
		angles[x] = [];
		for (let y = 0; y < maxRows; y++) {
			angles[x][y] = 0;
		}
	}
}

const fieldSize = 50;
const fieldSizeHalf = fieldSize / 2;
const maxCols = Math.ceil(innerWidth / fieldSize);
const maxRows = Math.ceil(innerHeight / fieldSize);
const divider = 2;

// The following 1 line of code is taken from ChatGPT 2025-09-15: https://chatgpt.com/share/68c7b01b-d568-800d-a579-17715eb7d691
const rotationSpeed = 0.1;

function arrowFlowField() {
	for (let x = 0; x < maxCols; x++) {
		for (let y = 0; y < maxRows; y++) {
			const padding = 10;
			const value = noise(x / divider, y / divider) * Math.PI * 2;
			push();
			translate(x * fieldSize + fieldSizeHalf, y * fieldSize + fieldSizeHalf);
			// The following 1 line of code is taken from ChatGPT 2025-09-15: https://chatgpt.com/share/68c7b01b-d568-800d-a579-17715eb7d691
			rotate(value - frameCount * rotationSpeed);
			if (mouseX < 50) {
				rotate(angles[x][y]);
			}
			if (mouseX > 50) {
				rotate(angles[x][y]);
			}
			if (mouseY < 50) {
				rotate(angles[x][y]);
			}
			if (mouseY > 50) {
				rotate(angles[x][y]);
			}

			strokeWeight(2);
			// Drawing an arrow
			fill(random(200), random(180), random(200));
			line(-fieldSizeHalf + padding, 50, fieldSizeHalf - padding, 0);
			triangle(
				fieldSizeHalf / padding,
				0,
				fieldSizeHalf - padding * 2,
				padding,
				fieldSizeHalf + padding * 6,
				-padding
			);
			pop();
		}
	}
}

function mouseMoved() {
	for (let x = 0; x < maxCols; x++) {
		for (let y = 0; y < maxRows; y++) {
			const cx = x * fieldSize + fieldSizeHalf;
			const cy = y * fieldSize + fieldSizeHalf;
			angles[x][y] = atan2(mouseY - cy, mouseX - cx);
		}
	}
}

function draw() {
	background(255, 255, 255);
	// drawFlowField();
	arrowFlowField();
	// mouseMoved();

	// noLoop();
}
