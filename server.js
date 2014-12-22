// Very simple server just echoes out static files:

var connect = require('connect');
var serveStatic = require('serve-static');

// Get the port from Heroku, or use 8080 for development
var port = (process.env.PORT || 8080);

var staticDir = __dirname + '/static';

// Process the LESS files
console.log("Processing LESS files...");

var fs = require('fs');
var less = require('less');

var lessFiles = fs.readdirSync(staticDir + '/less');

for (var i = 0; i < lessFiles.length; i++) {
  var path = lessFiles[i];

  var inputPath = staticDir + '/less/' + path;
  var outputPath = staticDir + '/css/' + path + '.css';

  // If the path ends in '.less' we'll process it
  if (path.indexOf('.less', path.length - '.less'.length) !== -1) {
    console.log('\t* ' + path);

    var contents = fs.readFileSync(inputPath, { 'encoding': 'utf8' });
    less.render(contents, {
      filename: path,
      compress: true
    }, function (e, output) {
      if (e) {
        console.error(e);
      } else {
        fs.writeFile(outputPath, output.css, {}, function (err) {
          if (err) {
            console.error('Error writing ' + outputPath);
            console.error(err);
          }
        });
      }
    });
  }
}

console.log("LESS warmup COMPLETE");

// Set up the server
console.log("Starting server...");
connect().use(serveStatic(staticDir)).listen(port);
console.log("Node app is now running at http://localhost:" + port);
