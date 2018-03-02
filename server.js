const http = require('http');

const server = new http.Server();

server.on('request', function(req, res) {
  res.end("Hallo, guten abend!");
});

server.listen({
  host: '31.173.85.139',
  port: 8000
});
