demo.state1 = function() {};
var cursors, vel = 500, rocks, grass;
demo.state1.prototype = {
  preload: function() {
    // load sprites and tiles
    game.load.tilemap('field', 'assets/field2.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('grassTiles', 'assets/grassTiles.png');
    game.load.image('rockTiles', 'assets/rockTiles.png');
    game.load.spritesheet('player', 'assets/player.png');
  },
  create: function() {
    // config scene
    game.stage.backgroundColor = '#4c76e1';
    addStateEventListeners();

    // config map
    var map = game.add.tilemap('field');
    grass = map.createLayer('grass');
    rocks = map.createLayer('rocks');
    map.addTilesetImage('grassTiles');
    map.addTilesetImage('rockTiles');
    map.setCollisionBetween(1,9,true,'rocks');

    // add player
    player = game.add.sprite(200,200,'player');
    player.scale.setTo(0.2,0.2);
    game.physics.enable(player);

    cursors = game.input.keyboard.createCursorKeys();
  },
  update: function() {
    game.physics.arcade.collide(player, rocks);

    // user velocity for collision
    if (cursors.up.isDown) {
      player.body.velocity.y = -vel;
    } else if (cursors.down.isDown) {
      player.body.velocity.y = vel;
    } else {
      player.body.velocity.y = 0;
    }

    if (cursors.left.isDown) {
      player.body.velocity.x = -vel;
    } else if (cursors.right.isDown) {
      player.body.velocity.x = vel;
    } else {
      player.body.velocity.x = 0;
    }
  }
}
