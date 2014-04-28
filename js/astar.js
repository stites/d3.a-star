/* A-STAR SORT IN PSEUDOCLASSICAL STYLE */

function A (graph) {
  this.graph = graph;
  this.openList = [];
  this.closedList = [];
  this.path = [];
}

A.prototype.heuristic = function (source, target, heuristic) {
  heuristic = heuristic || this.manhattan;
  return heuristic(source, target);
};

A.prototype.manhattan = function (source, target) {
  return Math.abs(target.x - source.x) + Math.abs(target.y - source.y);
};

A.prototype.Fscore = function (source, target) {
  return source.gScore + this.heuristic(source, target);
};

A.prototype.run = function (source, target) {
  this.openList.push(source);
  var _cl = _(this.closedList);
  var _ol = _(this.openList);
  var inOpenList;
  var current;
  var currentF;
  var F;
  var tempG;
  var lowestF = Infinity;
  var currentIdx;
  while (this.openList.length > 0) {

    for(var i = 0; i < this.openList.length; i++){
      currentF = this.Fscore(this.openList[i], target);
      if (currentF < lowestF){
        lowestF = currentF;
        currentIdx = i;
      }
    }
    current = this.openList.splice(currentIdx, 1)[0];
    this.path.push(current);
    this.closedList.push(current);

    if ((current.x === target.x) && (current.y === target.y)){
      return this.reconstructPath(this.path, target);
    }

    neighbours = this.getNeighbours(current);

    for(i = 0; i < neighbours.length; i++){
      var n = neighbours[i];
      if (_cl.contains(n)){
        continue;
      }
      tempG = this.Fscore(current, n);
      inOpenList = _ol.contains(n);
      inOpenList = _cl.contains(n);

      if (!inOpenList || tempG < n.gScore ){
        n.gScore = tempG;
        n.fScore = this.heuristic(n, target);
        if (!inOpenList) {
          this.openList.push(n);
        }
      }

    }
  }
  return [];
}

A.prototype.getNeighbours = function(node){
  var neighbours = [];
  var x, y;
  var graph = this.graph;
  var _cl = _(this.closedList);

  function addNeighbour(nx, ny){
    var newNode = graph[ny][nx];
    console.log('neighbour: (%d, %d)', nx, ny)
    if (!graph[ny][nx].wall && _cl.contains(newNode)) {
      newNode.parent = node;
      neighbours.push(newNode);
    }
  }

  if(node.x + 1 < graph[0].length){
    addNeighbour(node.x + 1, node.y);
  }
  if(node.x - 1 > 0){
    addNeighbour(node.x - 1, node.y);
  }
  if(node.y + 1 < graph.length){
    addNeighbour(node.x, node.y + 1);
  }
  if(node.y - 1 > 0){
    addNeighbour(node.x, node.y - 1);
  }
  return neighbours;
}

A.prototype.reconstructPath = function(path, node) {
  var inPath = _(path).reduce(function(memo, item){
    console.log(item.x, node.x, '&&', item.y, node.y)
    return memo || ((item.x === node.x) && (item.y === node.y));
  }, false);

  if (inPath){
    p = this.reconstructPath(path, node.parent);
    console.log('path: (%d, %d)', p.x, p.y);
    return [node].concat(p);
  } else {
    return [node];
  }
}

// temp variables
// source = mapData[0][0],
// target = mapData[4-1][4-1];
// var x = generateMap(4,4)
// var a = new A(x)
// a.run(source, target)
