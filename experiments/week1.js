function setup() {
	createCanvas(innerWidth, innerHeight);
	background(255, 255, 255);
	frameRate(10);
}

const originalX = 300;
const originalY = 300;
const divider = 20;
noiseSeed(0);

let counter = 0;

function draw() {
	clear();
	background(255, 255, 255);

	beginShape();
	// X axis line
	for (let x = 0; x < width; x++) {
		// const Y = originalY + Math.random() * 100;
		const y = originalY + noise(x / divider, counter) * 100;
		vertex(x, y);
	}
	endShape();

	counter += 0.1;
	noFill();
	noLoop();
}
