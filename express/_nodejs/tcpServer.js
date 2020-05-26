const net = require('net');

const server = net.createServer(function(socket){
  var date = new Date();
  date = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}\n`;
  socket.end(date);
})
server.listen(process.argv[2]);
