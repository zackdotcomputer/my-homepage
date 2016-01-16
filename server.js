/**
 * Zack's Amazingly Compact and Komplete Server (ZACKS) *
 * Created by Zack Sheppard (zacksheppard.com) on 12/22/2014.
 * Echoes out the contents of /static/ blindly. As an added bonus,
 * it will compile the contents of /static/less/*.less to /static/css/
 * when you start it up.
 */

var connect = require('connect');
var serveStatic = require('serve-static');

// Get the port from Heroku, or use 5000 for development
var port = (process.env.PORT || 5000);

var staticDir = __dirname + '/static';

/** BEGIN LESS processing */
console.log("Processing LESS files...");

var fs = require('fs');
var less = require('less');

var lessFiles = fs.readdirSync(staticDir + '/less');
try {
  fs.mkdirSync(staticDir + '/css');
} catch(e) {
  if ( e.code != 'EEXIST' ) throw e;
}

for (var i = 0; i < lessFiles.length; i++) {
  var path = lessFiles[i];

  // /static/less/foo.less -> /static/css/foo.less.css
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
/** END LESS processing */

// Set up the server
console.log("Starting server...");
connect().use(serveStatic(staticDir)).listen(port);
console.log("Node app is now running at http://localhost:" + port);
