var xS = [], yS = [], dXS = [], dYS = [];

function randomBetween(low, high) {
	return Math.ceil(Math.random()*((high-low)-1)+low);
}

const num = randomBetween(25, 100);

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
		ball.style.left = `${xS[i-1]}px`;
		ball.style.top = `${yS[i-1]}px`;
		document.body.appendChild(ball);
	}
}());

function animateBalls() {
	for (i=num; i>0; i--) {
		let ball = document.getElementById(i);
		let leftValue = parseInt(ball.style.left, 10);
		if ((leftValue >= (window.innerWidth - 40)) || (leftValue <= 0)) {
			dXS[i-1] = -dXS[i-1];
		}
		ball.style.left = `${leftValue + dXS[i-1]}px`;
		let topValue = parseInt(ball.style.top, 10);
		if ((topValue >= (window.innerHeight - 40)) || (topValue <= 0)) {
			dYS[i-1] = -dYS[i-1];
		}
		ball.style.top = `${topValue + dYS[i-1]}px`;
	}
	requestAnimationFrame(animateBalls);
}
requestAnimationFrame(animateBalls);

// ---------------------------------------------------------------------
// OLD CODE, FEW ISSUES LEFT, ALSO FOR THE LOLZ
// ACTUALLY randomBetween IS NEW CODE, I'M STILL NOT GOOD AT GIT
/*
function randomBetween(low, high) {
	return Math.ceil(Math.random()*((high-low)-1)+low);
}
const num = randomBetween(5,25);
var xS = [], yS = [], dXS = [], dYS = [];
*/
/*
// Populate space and speed arrays based on "num"
for (i = num; i > 0; i--) {
    // Add a random number within the window width and height to the arrays
    // "xS" and "yS", the x'es and y'es, so that a 40px ball will always
    // spawn inside the browser window
	let xOut = Math.floor(Math.random() * window.innerWidth);
	if (xOut > (window.innerWidth - 40)) {
		let xMinus = window.innerWidth - xOut;
		xOut = xOut - xMinus;
	}
	xS.push(xOut);
	let yOut = Math.floor(Math.random() * window.innerHeight);
	if (yOut > (window.innerHeight - 40)) {
		let yMinus = window.innerHeight - yOut;
		yOut = yOut - yMinus;
	}
	yS.push(yOut);
    // Add a random positive or negative number between -16 and -5, and
    // 5 and 16 to "dXS" and "dYS" for 'delta'x'es amd 'delta'y'es
	let xDir = Math.random();
	let yDir = Math.random();
	if (xDir >= .5) {
		dXS.push(Math.ceil((Math.random()*4)+4));
	} else {
		dXS.push((Math.ceil((Math.random()*4)+4)) * -1);
	}
	if (yDir >= .5) {
		dYS.push(Math.ceil((Math.random()*4)+4));
	} else {
		dYS.push((Math.ceil((Math.random()*4)+4)) * -1);
	}
	console.log(i);
}

// Create `${num}` <div class="ball"></div>s, with id="${from 1 to num}` and
// add them to the <body>
for (i = num; i > 0; i--) {
	let el = document.createElement('div');
	el.id = `${i}`;
	el.className = 'ball';
	el.style.left = `${xS[num - i]}px`;
	el.style.top = `${yS[num - i]}px`;
	document.body.appendChild(el);
}
*/
/*
// Move each element five times per second, along a bouncy path.
setInterval(function() {
    for (i = num; i > 0; i--) {
        elBall = document.getElementById(`${i}`);
        elBall.style.left = `${parseInt(elBall.style.left, 10) + dXS[num - i]}px`;
        if (parseInt(elBall.style.left, 10) >= (window.innerWidth - 40)) {
            dXS[num - i] = dXS[num - i] * -1;
            elBall.style.left = `${window.innerWidth - 40}px`;
        }
        if (parseInt(elBall.style.left, 10) <= 0) {
            dXS[num - i] = dXS[num - i] * -1;
            elBall.style.left = "0px";
        }
        elBall.style.top = `${parseInt(elBall.style.top, 10) + dYS[num - i]}px`;
        if (parseInt(elBall.style.top, 10) >= (window.innerHeight - 40)) {
            dYS[num - i] = dYS[num - i] * -1;
            elBall.style.top = `${window.innerHeight - 40}px`;
        }
        if (parseInt(elBall.style.top, 10) <= 0) {
            dYS[num - i] = dYS[num - i] * -1;
            elBall.style.top = "0px";
        }
    }
}, 16.667);
*/
/*
var b1 = document.getElementById("1");
var worker = new Worker("move.js");
worker.onmessage = function(e) {
	b1.style.left = e.data[0];
	b1.style.top = e.data[1];
};
setInterval(function() {
	worker.postMessage([b1.style.left, dXS[0], b1.style.top, dYS[0]]);
}, 1000);
*/

/*

setTimeout(function() {
for (i=num;i>0;i--) {
    let b = document.getElementById(`${i}`);
    let dX = dXS[(num-i)];
    let dY = dYS[(num-i)];
    setInterval(function() {
        b.style.left = `${parseInt(b.style.left, 10) + dX}px`;
        b.style.top = `${parseInt(b.style.left, 10) + dY}px`;
    }, 200);
}}
, 3000);
*/