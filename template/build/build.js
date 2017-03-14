const browserify = require("browserify");
const bundler = browserify('./js/scripts.js');

const fs = require('fs');
const path = require('path');
let builtFile = fs.createWriteStream(path.join(process.cwd(), 'dist/build.min.js'));;

bundler.transform({
    global: true,
    ignore: [
      '*.moon',
      '*.css'
    ]
  }, 'uglifyify')
  .plugin('moonify/plugins/extract-css.js')
  .bundle()
  .pipe(builtFile)

bundler.on('bundle', function(bs) {
  bs.on('end', function() {
    require("./bundle-css.js");
  });
});
