var fs = require('fs');
var options = { encoding: 'utf-8'};

fs.readFile('mys.txt', options, function(err, data){
  if(err) {
    console.log("There was a problem");
    return;
  }
  console.log(data.match(/x/gi).length + " letter X's");
});
