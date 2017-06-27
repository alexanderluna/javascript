demo.state1 = function() {};
demo.state1.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = '#4c76e1';
    console.log("State 1");
    addStateEventListeners();
  },
  update: function() {}
}
