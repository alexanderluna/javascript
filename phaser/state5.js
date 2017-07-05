var accel = 400, platform, platformGroup;
demo.state5 = function() {};
demo.state5.prototype = {
  preload: function() {
    game.load.image('platform', 'assets/bar.png');
  },
  create: function() {
    game.stage.backgroundColor = '#F4D03F';
    addStateEventListeners();
    game.world.setBounds(0, 0, 1500, 1000);

    player = game.add.sprite(centerX, 500, 'player');
    platform = game.add.sprite(0,700,'platform');
    platformGroup = game.add.group();
    platformGroup.create(650, 400, 'platform');
    platformGroup.create(1300, 400, 'platform');

    game.physics.enable([player, platform, platformGroup]);

    player.body.gravity.y = 500;
    player.body.bounce.y = 0.3;
    player.body.drag.x = 400;
    player.body.collideWorldBounds = true;

    platform.body.immovable = true;
    platformGroup.setAll('body.immovable', true);
  },
  update: function() {
    game.physics.arcade.collide(player, [platform, platformGroup]);
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      player.body.acceleration.x = -accel;
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      player.body.acceleration.x = accel;
    } else {
      player.body.acceleration.x = 0;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      player.body.velocity.y = -300;
    }
  }
}
