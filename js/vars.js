/* VARIABLES */
var w           = window.innerWidth,
    h           = window.innerHeight,
    unitLen     = 20,
    border      = 2,
    side        = unitLen - border,
    wallPercent = 1000000,
    duration    = 500,
    globalG     = 1,
    n           = ~~(w / side),
    m           = ~~(h / side);

var mouse = { x: w, y: h };
var c = colors = {
  empty:  '#FFF',
  wall:   '#4682B4',
  border: '#bbb',
  red:    '#0FF',
  active: '#FF703F',
};
