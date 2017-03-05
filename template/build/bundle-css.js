var fs = require('fs');
var path = require('path');
var cssDir = path.join(process.cwd(), "css");
var cssFiles = fs.readdirSync(cssDir);
var css = "";

for(var i = 0; i < cssFiles.length; i++) {
  css += fs.readFileSync(path.join(cssDir, cssFiles[i]));
}

var builtCSSPath = path.join('dist', 'build.css');
var previousCSS = "";
if(fs.existsSync(builtCSSPath)) {
  previousCSS = fs.readFileSync(builtCSSPath);
}
fs.writeFileSync(builtCSSPath, previousCSS + css);
