var demo = {};
demo.state0 = function(){};
demo.state0.prototype = {
  preload: function() {
    game.load.image('player', 'assets/player.png');
  },
  create: function(){
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.stage.backgroundColor = '#80FF80';
    console.log("State 0");
    addStateEventListeners();
    game.add.sprite(1500/2, 1000/2, 'player');
  },
  update: function(){}
};

function changeState(i, key) {
  game.state.start('state'+key)
}

function addKeyCallback(key,args){
  game.input.keyboard.addKey(key).onDown.add(changeState, null, null, args);
}

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
