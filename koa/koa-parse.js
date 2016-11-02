var koa = require('koa');
var parse = require('co-body');
var app = koa();

var port = process.argv[2];

app.use(function* (next){
  if(this.path !== '/') return yield next;

  var body = yield parse(this);
  return body.name.toUpperCase();
});

app.listen(port);
