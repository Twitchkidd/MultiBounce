function randomBetween(low, high) {
	return Math.ceil(Math.random()*((high-low)-1)+low);
}
const num = randomBetween(5,25);
var xS = [], yS = [], dXS = [], dYS = [];

/*function populateLocationVelocity() {
	let xS = [], yS = [], dXS = [], dYS = [];
}*/ // Lol I should do client work nao ...

// I wonder if it would be useful to assign degrees to balls, looking forward to collisions ...

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

// Yo check this shit out:
// https://stackoverflow.com/questions/38709923/why-is-requestanimationframe-better-than-setinterval-or-settimeout















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
var worker = new Worker('move.js');
worker.postMessage();

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

/*
onmessage = function(e) {
	var resultLeft = `${parseInt(e.data[0], 10) + e.data[1]}px`;
	var resultTop = `${parseInt(e.data[2], 10) + e.data[3]}px`;
	postMessage([resultLeft, resultTop]);
}
*/