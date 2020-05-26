const http = require('http');
const url = require('url');

var server = http.createServer(function(req, res){
  var req_url = url.parse(req.url, true);
  if(req.method == 'GET'){
    res.writeHead(200, {'Content-Type': 'application/json'});

    if(req_url.pathname == "/api/parsetime"){
      var date  = new Date(req_url.query.toString())
      return JSON.stringify({hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()})
    } else if (req_url.pathname == "api/unixtime"){
      return JSON.stringify({unixtime: new Date().getTime()})
    }
  }
})
server.listen(process.argv[2]);
