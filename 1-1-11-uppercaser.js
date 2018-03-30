var http      = require('http');
var thePort   = process.argv[2];
var map       = require('through2-map')

var server = http.createServer(function(req,res) { 
	
	if (req.method != 'POST') {
    	res.end();
    	return console.log('Ignoring %s request. I am POST only', req.method)
  	}

	req.pipe(map(toUpper)).pipe(res);

	/*
	inStream.pipe(map(function (chunk) {  
       return chunk.toString().split('').toUpperCase().join('')  
     })).pipe(outStream)  
   */
});

function toUpper (chunk) {
  return chunk.toString().toUpperCase();
}

server.listen(thePort, function() { 
   console.log('server is listening');
});


//#### official #####