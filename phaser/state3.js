demo.state3 = function() {};
demo.state3.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = '#ff99ff';
    console.log("State 3");
    addStateEventListeners();
  },
  update: function() {}
}
