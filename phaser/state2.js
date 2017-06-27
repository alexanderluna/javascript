demo.state2 = function() {};
demo.state2.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = '#42f483';
    console.log("State 2");
    addStateEventListeners();
  },
  update: function() {}
}
