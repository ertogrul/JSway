var http      = require('http');
var fs        = require('fs');
var thePort   = process.argv[2];
var file      = process.argv[3];

var server = http.createServer(function(req,res) { 
   var readStream = fs.createReadStream(file);
   readStream.on('open', function () {
      readStream.pipe(res);
   });
});
server.listen(thePort, function() { 
   console.log('server is listening');
});

//#### official #####

var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })
  fs.createReadStream(process.argv[3]).pipe(res)
})
server.listen(Number(process.argv[2]))