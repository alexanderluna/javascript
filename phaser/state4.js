demo.state4 = function() {};
demo.state4.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = '#ff54bc';
    console.log("State 4");
    addStateEventListeners();
  },
  update: function() {}
}
