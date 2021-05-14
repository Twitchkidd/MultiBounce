// ? rndBw: randomBetween (low, high)
const rndBw = (l, h) => Math.ceil(Math.random() * (h - l - 1) + l);

// ? rndCoord: randomCoordinate (dimension)
const rndCoord = dim =>
	dim === 'X'
		? rndBw(0, window.innerWidth - (SIZE + 1))
		: rndBw(0, window.innerHeight - (SIZE + 1));

// ? pop: populate (positions)
const pop = ps =>
	ps.forEach((p, i) => {
		const b = document.createElement('div');
		b.id = `${i + 1}`;
		b.style.left = `${p[0]}px`;
		b.style.top = `${p[1]}px`;
		document.body.appendChild(b);
	});

const SIZE = 40;
const BALLS = rndBw(8, 16);

const ps = Array(BALLS)
	.fill()
	.map(b => [rndCoord('X'), rndCoord('Y')]);

const vs = Array(BALLS)
	.fill()
	.map(b => [rndBw(-10, 10), rndBw(-10, 10)]);

pop(ps);

// ? mvAll: moveAll ()
const mvAll = () => {
	for (i = 0; i < BALLS; i++) {
		const b = document.getElementById(`${i + 1}`);
		const left = parseInt(b.style.left, 10);
		if (left > window.innerWidth - (SIZE + vs[i][0]) || left <= 0) {
			vs[i][0] = -vs[i][0];
		}
		b.style.left = `${left + vs[i][0]}px`;
		const top = parseInt(b.style.top, 10);
		if (top > window.innerHeight - (SIZE + vs[i][1]) || top <= 0) {
			vs[i][1] = -vs[i][1];
		}
		b.style.top = `${top + vs[i][1]}px`;
	}
	requestAnimationFrame(mvAll);
};
requestAnimationFrame(mvAll);
