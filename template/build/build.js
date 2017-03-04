var browserify = require("browserify");
var bundler = browserify('./js/scripts.js');

var fs = require('fs');
var builtFile = fs.createWriteStream(process.cwd() + '/dist/build.min.js');

bundler.transform({
  sourcemap: false,
  }, 'moonify')
  .transform('uglifyify')
  .bundle()
  .pipe(builtFile)
