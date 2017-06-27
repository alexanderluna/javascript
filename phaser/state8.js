demo.state8 = function() {};
demo.state8.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = '#873600';
    console.log("State 8");
    addStateEventListeners();
  },
  update: function() {}
}
