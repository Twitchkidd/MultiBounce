// initialize arrays for position and velocity
var xS = [],
	yS = [],
	dXS = [],
	dYS = [];

function randomBetween(low, high) {
	return Math.ceil(Math.random() * (high - low - 1) + low);
}

// initialize number of balls
const num = randomBetween(25, 100);

// populate position arrays
(function spawnLocations() {
	for (i = num; i > 0; i--) {
		let xOut = randomBetween(0, window.innerWidth - 40);
		let yOut = randomBetween(0, window.innerHeight - 40);
		xS.push(xOut);
		yS.push(yOut);
	}
})();

// populate velocity arrays
(function initialDirections() {
	for (i = num; i > 0; i--) {
		let dXOut = randomBetween(-10, 10);
		let dYOut = randomBetween(-10, 10);
		dXS.push(dXOut);
		dYS.push(dYOut);
	}
})();

// DOM population
(function populateWindow() {
	for (i = num; i > 0; i--) {
		let ball = document.createElement('div');
		ball.className = 'ball';
		ball.id = `${i}`;
		ball.style.left = `${xS[i - 1]}px`;
		ball.style.top = `${yS[i - 1]}px`;
		document.body.appendChild(ball);
	}
})();

// calculate move,
function animateBalls() {
	for (i = num; i > 0; i--) {
		let ball = document.getElementById(i);
		let leftValue = parseInt(ball.style.left, 10);
		if (leftValue >= window.innerWidth - 40 || leftValue <= 0) {
			dXS[i - 1] = -dXS[i - 1];
		}
		ball.style.left = `${leftValue + dXS[i - 1]}px`;
		let topValue = parseInt(ball.style.top, 10);
		if (topValue >= window.innerHeight - 40 || topValue <= 0) {
			dYS[i - 1] = -dYS[i - 1];
		}
		ball.style.top = `${topValue + dYS[i - 1]}px`;
	}
	requestAnimationFrame(animateBalls);
}
requestAnimationFrame(animateBalls);

/*
 * I feel like describing the initial conditions more succinctly will be one,
 * then abstract out things a little, and it might work to calculate ... I mean
 * there has to be some amount of work you can offset, like calc the next BALL
 * number of positions for ball 1 in one frame, then BALL number of positions
 * for ball 2 in the next or something, and def smush the vectors, and then
 * open a branch maybe for canvas?
 */
