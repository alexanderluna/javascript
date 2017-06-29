// declare global variables
var demo = {}, centerX = 1500/2, centerY = 1000/2, player, speed = 10 ;

// create state
demo.state0 = function(){};

// define state functions
demo.state0.prototype = {
  preload: function() {
    game.load.spritesheet('player','assets/player-spritesheet.png',127,208);
    game.load.image('tree', 'assets/background.png');
  },
  create: function(){
    // config scene
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.stage.backgroundColor = '#80FF80';
    game.world.setBounds(0,0,2000,2000);
    game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000);
    addStateEventListeners();

    // config spites
    var bgImg =  game.add.sprite(0, 0, 'tree');
    player = game.add.sprite(centerX, centerY, 'player');
    player.animations.add('walk', [0,1,2]);
    player.anchor.setTo(0.5,0.5);
    player.scale.setTo(0.7,0.7);
    game.physics.enable(player);
    player.body.collideWorldBounds = true;
    game.camera.follow(player);
  },
  update: function(){
    // responde to user input
    if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      player.scale.setTo(0.7,0.7);
      player.x += speed;
      //player.angle = 15;
      player.animations.play('walk', 14, true);
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
      player.scale.setTo(-0.7,0.7);
      player.x -= speed;
      //player.angle = -15;
      player.animations.play('walk', 14, true);
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      player.y -= speed;
      if (player.y < 855) {
        player.y = 855;
      }
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      player.y += speed;
    } else {
      player.animations.stop('walk');
      player.frame = 0;
      player.rotation = 0;
    }
  }
};

// define global functions //

// change state based on key pressed
function changeState(i, key) {
  console.log('state'+key);
  game.state.start('state'+key);
}

// key down event listener
function addKeyCallback(key,args){
  game.input.keyboard.addKey(key).onDown.add(changeState, null, null, args);
}

// call custom callback for key pressed
function addStateEventListeners(){
  addKeyCallback(Phaser.Keyboard.ZERO, 0);
  addKeyCallback(Phaser.Keyboard.ONE, 1);
  addKeyCallback(Phaser.Keyboard.TWO, 2);
  addKeyCallback(Phaser.Keyboard.THREE, 3);
  addKeyCallback(Phaser.Keyboard.FOUR, 4);
  addKeyCallback(Phaser.Keyboard.FIVE, 5);
  addKeyCallback(Phaser.Keyboard.SIX, 6);
  addKeyCallback(Phaser.Keyboard.SEVEN, 7);
  addKeyCallback(Phaser.Keyboard.EIGHT, 8);
  addKeyCallback(Phaser.Keyboard.NINE, 9);
}
