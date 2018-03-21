const http = require('http')
const fs = require('fs')
const url = process.argv[2];

//console.log(url)
http.get(url, function (response) {
        response.setEncoding('utf8')
        response.on('data', function (data) {
            console.log(data);
        })
    }
)

/*    
http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)
*/

/*
The http.get() method is a shortcut for simple GET requests, use it to  
simplify your solution. The first argument to http.get() can be the URL  
you want to GET; provide a callback as the second argument.  
 
Unlike other callback functions, this one has the signature:  
 
   function callback (response) { .... }  
 
Where the response object is a Node Stream object. You can treat Node  
Streams as objects that emit events. The three events that are of most  
interest are: "data", "error" and "end". You listen to an event like so:  
 
   response.on("data", function (data) { ...... })  
 
The "data" event is emitted when a chunk of data is available and can be  
processed. The size of the chunk depends upon the underlying data source. 
*/




















/*
_http_client.js:86
      throw new errors.Error('ERR_INVALID_DOMAIN_NAME');


const http = require('http')
const fs = require('fs')
const url = 'www.ecosia.org'

console.log(url)

http.get(url, function callback (response) {
        response.setEncoding('utf8')
        response.on('data', function (data) {
            console.log(data);
        })
    }
)*/
