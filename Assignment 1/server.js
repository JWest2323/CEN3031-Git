var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server, err;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);

  if(parsedUrl.path == "/listings"){
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(listingData);
    response.end();
  } else {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Bad gateway error");
    response.end();
  }
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  listingData = data;
  // a server is created, but not started
  server = http.createServer(requestHandler);

  server.listen(port, function() {
  });


  /*
    This callback function should save the data in the listingData variable,
    then start the server.
   */

});
