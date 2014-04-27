
/* VARIABLES */
var w           = window.innerWidth,
    h           = window.innerHeight,
    unitLen     = 20,
    border      = 2,
    side        = unitLen - border,
    wallPercent = 4,
    duration    = 500,
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

/* UTIL FUNCTIONS */
var rand = function(n){ return Math.random() * n; };
var wallFlag = function(wallPercent){ return ~~rand(wallPercent) === 0; };
var generateMap = function(n,m){
  var cols = [];
  for (var i = 0; i < n; i++){
    var rows = [];
    for (var j = 0; j < m; j++){
      rows.push({
        x: i,
        y: j,
        wall: wallFlag(wallPercent),
        path: false,
      })
    }
    cols.push(rows);
  }
  return cols;
}

/* MAKE MAP */
var map = d3.select('body')
            .append('svg')
            .attr({
              width: w,
              height: h,
              class: 'map',
            });

/* MAKE BACKDROP */
map.selectAll('span')
  .data([0])
  .enter()
    .append('svg:rect')
    .attr({
      fill: c.border,
      width: w,
      height: h,
    })

/* CREATE BOARD */
var mapData = generateMap(n,m);

var units = map.selectAll('span')
              .data( _(mapData).reduce(function(memo, row){
                  return memo.concat(row);
                }, []) )
              .enter()
                .append('svg:rect')
                .attr({
                  x: function(d){return d.x * unitLen},
                  y: function(d){return d.y * unitLen},
                  width:  side,
                  height: side,
                  fill: function(d){
                    return d.wall ? c.wall : c.empty;
                  },
                  class: 'unit',
                });

/* CLICK EVENTS */
units.on('mouseenter', function(d, i){
  var color = d.wall ? c.wall : c.active;
    d3.select(this).attr('fill', color);
});

units.on('mouseleave', function(d, i){
  var color = d.wall ? c.wall : c.empty;
  setTimeout(function(){
    d3.select(this).attr('fill', color);
  }.bind(this), duration);
});

units.on('click', function(d, i){
  var color = d.wall ? c.wall : c.red;
    d3.select(this).attr('fill', color);
});

/* A-STAR SORT */
var source = mapData[0][0],
    target = mapData[n-1][m-1];

var openList = [];
var closedList = [];

function astar (node, target, graph) {
  // base case
  if ( (node.x === target.x) && (node.y === target.y) ) {
    return ;// done
  } else {
    if (node.x - 1 > 0) {
      // check to see if it's a wall
    }
    if (node.x + 1 > n) {
    }
    if (node.y - 1 > 0) {
    }
    if (node.y + 1 > m) {
    }
  }
  return
}

astar(source, target, mapData);
