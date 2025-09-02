function setup() {
	createCanvas(innerWidth, innerHeight);
	background(255, 255, 255);
}

const originalX = 300;
const originalY = 300;
const divider = 20;
noiseSeed(0);

function draw() {
	beginShape();
	// X axis line
	for (let x = 0; x < width; x++) {
		// const Y = originalY + Math.random() * 100;
		const y = originalY + noise(x / divider) * 100;
		vertex(x, y);
	}

	endShape();

	noLoop();
}
