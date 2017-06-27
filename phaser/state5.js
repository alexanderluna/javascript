demo.state5 = function() {};
demo.state5.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = '#F4D03F';
    console.log("State 5");
    addStateEventListeners();
  },
  update: function() {}
}
