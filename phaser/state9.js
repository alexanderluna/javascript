demo.state9 = function() {};
demo.state9.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = '#D98880';
    console.log("State 9");
    addStateEventListeners();
  },
  update: function() {}
}
