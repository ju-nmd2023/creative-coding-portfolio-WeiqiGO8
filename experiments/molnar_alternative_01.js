// The following code is isnpired by lecture 3, live coding with Bassima and from CodeExamples-Garrit code example molnar.js.

function setup() {
	createCanvas(innerWidth, innerHeight);
	frameRate(10);
}

const size = 100;
const layers = 10;

function getRandomValue(pos, variance) {
	return pos + map(Math.random(), 0, 1, -variance, variance);
}

function drawLayers(x, y, size, layers) {
	const variance = size / 20;
	noFill();

	for (let i = 0; i < layers; i++) {
		if (Math.random() > 0.8) {
			continue;
		}

		const s = (size / layers) * i;
		const half = s / 2;

		beginShape();
		vertex(
			getRandomValue(x - half, variance),
			getRandomValue(y - half, variance)
		);
		vertex(
			getRandomValue(x + half, variance),
			getRandomValue(y - half, variance)
		);
		vertex(
			getRandomValue(x + half, variance),
			getRandomValue(y + half, variance)
		);
		vertex(
			getRandomValue(x - half, variance),
			getRandomValue(y + half, variance)
		);

		endShape(CLOSE);
	}
}

function draw() {
	// clear();
	stroke(0, 0, 0);
	background(255, 255, 255);

	for (let y = 0; y < 10; y++) {
		for (let x = 0; x < 10; x++) {
			stroke(random(255), random(255), random(255));
			drawLayers(size / 2 + x * size, size / 2 + y * size, size, layers);
		}
	}
	noLoop();
}
