
/* VARIABLES */
var w = window.innerWidth,
    h = window.innerHeight,
    side = 20,
    n = ~~(w / side),
    m = ~~(h / side);

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
            .append('svg')
            .attr({
              width: w,
              height: h,
              class: 'map',
            });


var unit = map.selectAll('span')
              .data(getUnits(n,m))
              .enter().append('svg:rect')
                .attr({
                  x: function(d, i){return d.x * side},
                  y: function(d, i){return d.y * side},
                  width:  side,
                  height: side,
                  class: 'unit',
                });
