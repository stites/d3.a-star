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

    astarMap = new A(map, 0);
  });

  describe('the initialization of A*', function(){

    it('should return an object with an openList and closedList arrays', function(){
      expect(astarMap).to.be.an('object');
      expect(astarMap).to.have.property('closedList').to.be.an('array');
      expect(astarMap).to.have.property('openList').to.be.an('array');
      expect(astarMap).to.have.property('path').to.be.an('array');
      expect(astarMap).to.have.property('gScore').to.be.a('number');
      expect(astarMap).to.have.property('gScore').to.be.a('number');
    });

    it('should have a run, Fscore functions', function(){
      expect(astarMap).to.have.property('run').to.be.a('function');
      expect(astarMap).to.have.property('heuristic').to.be.a('function');
      expect(astarMap).to.have.property('manhattan').to.be.a('function');
      expect(astarMap).to.have.property('Fscore').to.be.a('function');
    });
  });

  describe('the heuristic function', function(){

    it('should return a number', function(){
      expect(astarMap.heuristic(source, target)).to.be.a('number');
    });

    it('should default to the manhattan heuristic', function(){
      sinon.spy(astarMap, 'manhattan');
      astarMap.heuristic(source, target);
      expect(astarMap.manhattan.calledOnce).to.equal(true);
    })

    describe('the manhattan heuristic', function(){

      it('should calculate manhattan differences of x and y distance', function(){
        source.x = 0;
        source.y = 0;
        target.x = 0;
        target.y = 1;
        var manhattan = astarMap.heuristic(source, target)
        expect(manhattan).to.equal(1)
        target.x = 6;
        target.y = 6;
        manhattan = astarMap.heuristic(source, target)
        expect(manhattan).to.equal(12)
        target.x = 3;
        target.y = 7;
        manhattan = astarMap.heuristic(source, target)
        expect(manhattan).to.equal(10)
      })

    });

  });

  describe('the Fscore', function () {
    it('should run the heuristic', function () {
      sinon.spy(astarMap, 'heuristic');
      astarMap.Fscore(source, target);
      expect(astarMap.heuristic.calledOnce).to.equal(true);
    });
  });


  describe('run', function(){
    it('should return an array', function(){
      path = astarMap.run(source, target);
      expect(path).to.be.an('array');
    });

    it('should add the source node to an open list and path', function(){
      path = astarMap.run(source, target);

      expect(astarMap.openList).to.contain(source);
      expect(path).to.contain(source);
    });

    it('should add the source node to an open list and path', function(){
      path = astarMap.run(source, target);

      expect(astarMap.openList).to.contain(source);
      expect(path).to.contain(source);
    });
  });
})
