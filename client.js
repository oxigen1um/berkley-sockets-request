const http = require('http');

const req = http.request({
  hostname: '78.42.154.143',
  port: 7777
});

console.log("request has been sent to 78.42.154.143:7777");
