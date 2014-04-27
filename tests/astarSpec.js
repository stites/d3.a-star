describe('astar traversal, function astar:', function(){
  var map, source, target;

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
  });

  it('should be a function', function(){
    expect(astar).to.be.a('function');
  });
})
