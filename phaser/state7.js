demo.state7 = function() {};
demo.state7.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = '#85C1E9';
    console.log("State 7");
    addStateEventListeners();
  },
  update: function() {}
}
