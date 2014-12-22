// Very simple server just echoes out static files:

var connect = require('connect');
var serveStatic = require('serve-static');

// Get the port from Heroku, or use 8080 for development
var port = (process.env.PORT || 8080)

// Set up the server
connect().use(serveStatic(__dirname + '/static')).listen(port);
console.log("Node app is now running at http://localhost:" + port);
