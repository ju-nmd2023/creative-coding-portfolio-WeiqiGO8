// The following code was inspired by the FLow field example 01 from lecture "CC Complexity", by Bassima and Garritt.

function setup() {
	createCanvas(innerWidth, innerHeight);
	noiseSeed(100);
}

const fieldSize = 50;
const fieldSizeHalf = fieldSize / 2;
const maxCols = Math.ceil(innerWidth / fieldSize);
const maxRows = Math.ceil(innerHeight / fieldSize);
const divider = 2;

function arrowFlowField() {
	for (let x = 0; x < maxCols; x++) {
		for (let y = 0; y < maxRows; y++) {
			const padding = 10;
			const value = noise(x / divider, y / divider) * Math.PI * 2;
			push();
			translate(x * fieldSize + fieldSizeHalf, y * fieldSize + fieldSizeHalf);
			rotate(value);
			strokeWeight(4);
			// Drawing an arrow
			fill(random(255), random(255), random(255));
			line(-fieldSizeHalf + padding, 0, fieldSizeHalf - padding, 0);
			triangle(
				fieldSizeHalf - padding,
				0,
				fieldSizeHalf - padding * 2,
				padding,
				fieldSizeHalf - padding * 2,
				-padding
			);
			pop();
		}
	}
}

function draw() {
	background(255, 255, 255);
	arrowFlowField();

	// noLoop();
}
