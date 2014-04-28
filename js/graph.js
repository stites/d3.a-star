/* CREATE THE GRAPH */

function generateMap (n,m){
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
function addNeighbour(nx, ny){
  var newNode = graph[ny][nx];
  console.log('neighbour: (%d, %d)', nx, ny)
  if (!graph[ny][nx].wall && _cl.contains(newNode)) {
    newNode.parent = node;
    neighbours.push(newNode);
  }
}

function getEdges (node, n, m) {
  var neighbours = [];

  if(node.x + 1 < m){
    neighbours.push(node.x + 1, node.y);
  }
  if(node.x - 1 > 0){
    neighbours.push(node.x - 1, node.y);
  }
  if(node.y + 1 < n){
    neighbours.push(node.x, node.y + 1);
  }
  if(node.y - 1 > 0){
    neighbours.push(node.x, node.y - 1);
  }
  return neighbours;
}
