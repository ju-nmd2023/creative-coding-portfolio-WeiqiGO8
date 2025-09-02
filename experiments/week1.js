function setup() {
	createCanvas(innerWidth, innerHeight);
	background(255, 255, 255);
}

function draw() {
	const originalX = 300;
	const originalY = 300;
	const divider = 20;
	noiseSeed(20);

	beginShape();
	// X axis - width
	for (let x = 0; x < width; x++) {
		// const y = originalY + Math.random() * 100;
		const y = originalY + noise(x / divider) * 100;
		vertex(x, y);
	}

	// Y axis - height
	for (let heightY = 0; heightY < height; heightY++) {
		const x = originalX + noise(heightY / divider) * 100;
		vertex(x, heightY);
	}
	endShape();

	noLoop();
}
