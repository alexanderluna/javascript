var mustache = require('mustache');
var result = mustache.render("Hi, {{first}} {{last}}", {
  first: "Alexander",
  last: "Luna"
});

console.log(result);
