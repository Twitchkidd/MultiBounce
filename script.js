var xS = [], yS = [], dXS = [], dYS = [];

function randomBetween(low, high) {
	return Math.ceil(Math.random()*((high-low)-1)+low);
}

const num = randomBetween(5,25);

(function spawnLocations() {
	for (i=num; i>0; i--) {
		let xOut = randomBetween(0, (window.innerWidth - 40));
		let yOut = randomBetween(0, (window.innerHeight - 40));
		xS.push(xOut);
		yS.push(yOut);
	}
}());

(function initialDirections() {
	for (i=num; i>0; i--) {
		let dXOut = randomBetween(-10, 10);	
		let dYOut = randomBetween(-10, 10);
		dXS.push(dXOut);
		dYS.push(dYOut);
	}
}());

(function populateWindow() {
	for (i=num; i>0; i--) {
		let ball = document.createElement('div');
		ball.className = "ball";
		ball.id = `${i}`;
		ball.style.left = `${xS[i]}px`;
		ball.style.top = `${yS[i]}px`;
		document.appendChild(ball);
	}
}());

function animateBalls() {
	for (i=num; i>0; i--) {
		let ball = document.getElementById(i);
		let leftValue = parseInt(ball.style.left, 10);
		if ((leftValue >= (window.innerWidth - 40)) || (leftValue <= 0)) {
			dXS[i] = -dXS[i];
		}
		ball.style.left = `${leftValue + dXS[i]}px`;
		let topValue = parseInt(ball.style.top, 10);
		if ((topValue >= (window.innerHeight - 40)) || (topValue <= 0)) {
			dYS[i] = -dYS[i];
		}
		ball.style.top = `${topValue + dYS[i]}px`;
	}
	requestAnimationFrame(animateBalls);
}
requestAnimationFrame(animateBalls);