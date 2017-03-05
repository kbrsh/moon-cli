var browserify = require("browserify");
var bundler = browserify('./js/scripts.js');

var fs = require('fs');
var path = require('path');
var builtFile = fs.createWriteStream(path.join(process.cwd(), 'dist/build.min.js'));;

bundler.transform({
  sourcemap: false,
  }, 'moonify')
  .transform('uglifyify')
  .plugin('moonify/plugins/extract-css.js')
  .bundle()
  .pipe(builtFile)

bundler.on('bundle', function(bs) {
  bs.on('end', function() {
    require("./bundle-css.js");
  });
});
