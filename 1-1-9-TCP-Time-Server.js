var net       = require('net');
var thePort   = process.argv[2];

var date      = new Date();
var fYear     = date.getFullYear()  
var gMonthTemp = date.getMonth()+1
var gMonth    = "0" + gMonthTemp // starts at 0  
var gDate     = date.getDate()      // returns the day of month  
var gHour     = date.getHours()  
var gMinutes  = date.getMinutes() 


var server = net.createServer(function(socket) { 
   let m = fYear + "-" + gMonth + "-" + gDate + " " + gHour + ":" + gMinutes;
	socket.write(`${m}\n`);
	socket.end()
});
server.listen(thePort, function() { 
   console.log('server is listening');
});





/*
var net = require('net');
var thePort = process.argv[2];
var server = net.createServer(function(connection) { 
   console.log('client connected');
   
   connection.on('end', function() {
      //console.log('client disconnected');
   });
   connection.write('Hello World!\r\n');
   connection.pipe(connection);
});
server.listen(thePort, function() { 
   console.log('server is listening');
});
*/