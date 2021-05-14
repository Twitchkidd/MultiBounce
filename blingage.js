// ? rndBw: randomBetween (low, high)
const rndBw = (l, h) => Math.ceil(Math.random() * (high - low - 1) + low);

const SIZE = 40;
const BALLS = rndBw(3,9);

const ps = BALLS.map(b => [rndBw(0, window.innerWidth - (SIZE + 1)), rndBw(0, window.innerHeight - (SIZE + 1))]);

const vs = 