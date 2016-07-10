var http = require('http')
var bl = require('bl')

var url = process.argv[2]

http.get(url, function(response) {
    response.pipe(bl(function(err, data){
      var output = data.toString()
      console.log(output.length)
      console.log(output);
    }))
    response.on('error', console.error)
}).on('error', console.error)
