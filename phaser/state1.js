demo.state1 = function() {};
var cursors, vel = 500;
demo.state1.prototype = {
  preload: function() {
    game.load.tilemap('field', 'assets/field2.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('grassTiles', 'assets/grassTiles.png');
    game.load.image('rockTiles', 'assets/rockTiles.png');
    game.load.spritesheet('player', 'assets/player.png');
  },
  create: function() {
    game.stage.backgroundColor = '#4c76e1';
    addStateEventListeners();

    var map = game.add.tilemap('field');
    map.addTilesetImage('grassTiles');
    map.addTilesetImage('rockTiles');

    var grass = map.createLayer('grass');
    var rocks = map.createLayer('rocks');

    player = game.add.sprite(200,200,'player');
    player.scale.setTo(0.2,0.2);
    game.physics.enable(player);

    cursors = game.input.keyboard.createCursorKeys();
  },
  update: function() {
    if (cursors.up.isDown) {

    }
  }
}
