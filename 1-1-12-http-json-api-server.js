var url = require('url')
var http = require('http')

function isoToHourMinSec(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  }
}

function isoToUnix(date) {
  return {
    unixtime: date.getTime()
  }
}

var routes = {
  '/api/parsetime': isoToHourMinSec,
  '/api/unixtime': isoToUnix,
}

var server = http.createServer(function(req, res) { 
  var urlObj = url.parse(req.url, true)
  console.log("A" + urlObj);
  var route = routes[urlObj.pathname]

  if(!route || !urlObj.query || !urlObj.query.iso){
    res.writeHead(404, {'Content-Type': 'application/json'})
    return res.end('{error:"no such route"}')
  }

  var date = new Date(urlObj.query.iso)
  var result = route(date)

  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end(JSON.stringify(result))
})

server.listen(process.argv[2])





/*
var http = require('http');
var url = require('url');

// create routes do pass
var routes = {
  "/api/parsetime": function(parsedUrl) {
    d = new Date(parsedUrl.query.iso);
    return {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    };
  },
  "/api/unixtime": function(parsedUrl) {
    return {unixtime: (new Date(parsedUrl.query.iso)).getTime()};
  }
};

// create the server to receive the url
server = http.createServer(function(request, response) {
  // verify the parsed url
  // and define the route
  parsedUrl = url.parse(request.url, true);
  resource = routes[parsedUrl.pathname];
  // if the url is correct
  if (resource) {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(resource(parsedUrl)));
  }
  else {
    response.writeHead(404);
    response.end();
  }
});
server.listen(process.argv[2]);

*/


