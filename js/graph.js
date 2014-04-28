/* CREATE THE GRAPH */

var generateMap = function(n,m){
  var cols = [];
  for (var i = 0; i < n; i++){
    var rows = [];
    for (var j = 0; j < m; j++){
      rows.push({
        x: i,
        y: j,
        wall: wallFlag(wallPercent),
        gScore: globalG,
        path: false,
      })
    }
    cols.push(rows);
  }
  return cols;
}
