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