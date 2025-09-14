//global variables
let position;
let velocity;
let acceleration;

function setup() {
	createCanvas(innerWidth, innerHeight);
	position = createVector(100, 100);
	velocity = createVector(5, 8);
	background(255);

	// colorMode(HSB);
	// blenmode(BLEND);
}

function draw() {
	noStroke();

	push();
	fill(random(100), random(255), random(255));
	ellipse(position.x, position.y, random(30));
	ellipse(width - position.x, height - position.y, random(40));
	pop();

	push();
	fill(random(255), random(100), random(255));
	ellipse(position.x, height - position.y, random(30));
	ellipse(width - position.x, position.y, random(40));
	pop();

	if (position.x > width || position.x < 0) {
		velocity.x *= -1;
	}

	if (position.y > height || position.y < 0) {
		velocity.y *= -1;
	}

	const mouse = createVector(mouseX, mouseY);
	acceleration = p5.Vector.sub(mouse, position);
	acceleration.normalize();
	acceleration.mult(0.5);

	velocity.add(acceleration);
	velocity.limit(10);
	position.add(velocity);
}
