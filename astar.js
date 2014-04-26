
/* VARIABLES */
var w = window.innerWidth,
    h = window.innerHeight,
    unitLen = 20,
    border = 1,
    side = unitLen - border,
    n = ~~(w / side),
    m = ~~(h / side);

var c = colors = {
  empty: '#fff',
  wall: '#4682B4',
  border: '#bbb',
}

/* UTIL FUNCTIONS */
var rand = function(n){ return Math.random() * n; };
var getUnits = function(n,m){
  var units = [];
  for (var i = 0; i < n; i++){
    for (var j = 0; j < m; j++){
      units.push({ x:i, y:j })
    }
  }
  return units;
}

var map = d3.select('body')
            .append('div')
            .attr({
              // width: w,
              // height: h,
              // fill: c.border,
              class: 'map',
            });


var unit = map.selectAll('span')
              .data(getUnits(n,m))
              .enter().append('div')
                // .attr({
                //   x: function(d){return d.x * unitLen},
                //   y: function(d){return d.y * unitLen},
                //   width:  side,
                //   height: side,
                //   fill: c.empty,
                //   class: 'unit',
                // })
                .style({
                   top: function(d){return d.x * unitLen},
                   left: function(d){return d.y * unitLen},
                   // stroke: 'black',
                   width: side + 'px', 
                   height: side + 'px' 
                });
