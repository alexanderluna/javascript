demo.state6 = function() {};
demo.state6.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = '#2E4053';
    console.log("State 6");
    addStateEventListeners();
  },
  update: function() {}
}
