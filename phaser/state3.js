var high, low;
demo.state3 = function() {};
demo.state3.prototype = {
  preload: function() {
    game.load.image('button1', 'assets/button1.png');
    game.load.image('button2', 'assets/button2.png');
    game.load.image('button3', 'assets/button3.png');
    game.load.audio('high', 'assets/sound/high.wav');
    game.load.audio('low', 'assets/sound/low.wav');
  },
  create: function() {
    game.stage.backgroundColor = '#ff99ff';
    addStateEventListeners();

    high = game.add.audio('high');
    low = game.add.audio('low');

    var b1 = game.add.button(100,100,'button1', function() {
      changeState(null, 1);
    });

    var b2 = game.add.button(100, 400, 'button2', function(){
      changeState(null, 2);
    });

    var b3 = game.add.button(100, 700, 'button3', function() {
      changeState(null, 3);
    });

    b1.scale.setTo(0.5);
    b2.scale.setTo(0.5);
    b3.scale.setTo(0.5);

    b1.onInputDown.add(this.tint, b1);
    b2.onInputDown.add(this.tint, b2);
    b3.onInputDown.add(this.tint, b3);

    b1.onInputUp.add(this.unTint, b1);
    b2.onInputUp.add(this.unTint, b2);
    b3.onInputUp.add(this.unTint, b3);

  },
  update: function() {

  },
  tint: function() {
    this.tint = 0xbbbbbb;
    low.play();
  },
  unTint: function() {
    this.tint = 0xFFFFFF;
    high.play();
  }
}
