var fs = require('fs');
var path = require('path');
var CleanCSS = require('clean-css');

// Get all css files
var cssDir = path.join(process.cwd(), "css");
var cssFiles = fs.readdirSync(cssDir);
var css = "";

// Concat all files into one big css file
for(var i = 0; i < cssFiles.length; i++) {
  css += fs.readFileSync(path.join(cssDir, cssFiles[i]));
}

// Get any previous CSS and make it part of the build
var builtCSSPath = path.join('dist', 'build.css');
var previousCSS = "";
if(fs.existsSync(builtCSSPath)) {
  previousCSS = fs.readFileSync(builtCSSPath);
}

// Optimize CSS
var optimizedCSS = new CleanCSS({

}).minify(css + previousCSS.toString());

fs.writeFileSync(builtCSSPath, optimizedCSS.styles);
