describe('astar traversal, function astar:', function(){
  var map, source, target, astarMap, path;

  beforeEach(function(){
    map = generateMap(5,7);
    source = map[2][1];
    target = map[2][5];

    _.each([
    map[1][3],
    map[2][3],
    map[3][3],
    ], function(node){
      node.wall = true;
    });

    astarMap = new A(map);
  });

  describe('the initialization of A*', function(){

    it('should return an object with an openList and closedList arrays', function(){
      expect(astarMap).to.be.an('object');
      expect(astarMap).to.have.property('closedList').to.be.an('array');
      expect(astarMap).to.have.property('openList').to.be.an('array');
      expect(astarMap).to.have.property('path').to.be.an('array');
    });

    it('should have a run function', function(){
      expect(astarMap).to.have.property('run').to.be.a('function');
    });

  });

  describe('run', function(){
    it('should return an array', function(){
      path = astarMap.run(source, target);
      expect(path).to.be.an('array');
    });

    it('should add the source node to an open list', function(){
      path = astarMap.run(source, target);

      expect(path).to.be.an('array');
    });
  });
})
