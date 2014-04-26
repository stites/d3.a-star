var w = window.innerWidth,
    h = window.innerHeight,
    side = 40,
    n = ~~(w / side),
    m = ~~(h / side);

var rand = function(n){ return Math.random() * n; };

var map = d3.select('body')
            .append('svg')
            .attr({
              width: w,
              height: h,
              color: '#88888'
            });

var unit = map.selectAll('span')
              .data(d3.range(n*m))
              .enter().append('svg:rect')
                .attr({
                  x: function(d, i){return d * 40},
                  y: function(d, i){return d * 40},
                  width:  side,
                  height: side,
                  class: 'unit',
                });
