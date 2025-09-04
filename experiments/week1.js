function setup() {
	createCanvas(innerWidth, innerHeight);
	background(0, 0, 0);
	frameRate(30);
}

const originalY = 300;
const divider = 20;
// noiseSeed(0);

let counter = 0;

// TOP X AXIS LINE
function topLine() {
	beginShape();
	for (let x = 0; x < width; x++) {
		// const y = originalY + Math.random() * 100;
		const y = -100 + originalY + noise(x / divider, counter) * 100;
		vertex(x, y);
	}
	endShape();
}

// MIDDLE X AXIS LINE
function middleLine() {
	beginShape();
	for (let x = 0; x < width; x++) {
		// const y = originalY + Math.random() * 100;
		const y = originalY + noise(x / divider, counter) * 100;
		vertex(x, y);
	}
	endShape();
}

// BOTTOM X AXIS LINE
function bottomLine() {
	beginShape();
	for (let x = 0; x < width; x++) {
		// const y = originalY + Math.random() * 100;
		const y = 100 + originalY + noise(x / divider, counter) * 100;
		vertex(x, y);
		endShape();
	}
}

function draw() {
	// clear();
	background(255, 255, 255);
	stroke(25, random(20, 255), 100);

	topLine();
	middleLine();
	bottomLine();

	// Y AXIS LINE

	counter += 0.1;
	noFill();
	// noLoop();
}
