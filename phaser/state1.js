demo.state1 = function() {};
demo.state1.prototype = {
  preload: function() {
    game.load.tilemap('field', 'assets/field2.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('grassTiles', 'assets/grassTiles.png');
    game.load.image('rockTiles', 'assets/rockTiles.png');
  },
  create: function() {
    game.stage.backgroundColor = '#4c76e1';
    addStateEventListeners();

    var map = game.add.tilemap('field');
    map.addTilesetImage('grassTiles');
    map.addTilesetImage('rockTiles');

    var grass = map.createLayer('grass');
    var rocks = map.createLayer('rocks');
  },
  update: function() {

  }
}
