// The following code is inspired by Lecture 2, live coding with Bassima and from CodeExamples-Garrit code example noise_03.js.

function setup() {
	createCanvas(innerWidth, innerHeight);
	background(0, 0, 0);
	stroke(0, 0, 0);
	noiseSeed(0);
	frameRate(30);
}

const originalY = 300;
const divider = 20;

let counter = 0;

// TOP X AXIS LINE
function topLine() {
	beginShape();
	stroke(random(10, 255), 10, 50);
	for (let x = 0; x < width; x++) {
		// const y = originalY + Math.random() * 100;
		const y = -100 + originalY + noise(x / divider + 300, counter) * 20;
		vertex(x, y);
	}
	endShape();
}

// MIDDLE X AXIS LINE
function middleLine() {
	beginShape();
	stroke(30, random(10, 255), 100);
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
	stroke(25, 50, random(10, 255));
	for (let x = 0; x < width; x++) {
		// const y = originalY + Math.random() * 100;
		const y = 100 + originalY + noise((x / divider) * 8, counter) * 30;
		vertex(x, y);
		endShape();
	}
}

// BOTTOM X AXIS LINE
function absoluteBottomLine() {
	beginShape();
	stroke(random(10, 255), 50, 25);
	for (let x = 0; x < width; x++) {
		// const y = originalY + Math.random() * 100;
		const y = 200 + originalY + noise((x / divider) * 40, counter) * 200;
		vertex(x, y);
		endShape();
	}
}

function draw() {
	clear();
	background(0, 0, 0);

	topLine();
	middleLine();
	bottomLine();
	absoluteBottomLine();

	// Y AXIS LINE

	counter += 0.1;
	noFill();
	// noLoop();
}
