const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');
const isProduction = process.env.NODE_ENV === "production";
const builtCSSPath = path.join('dist', 'build.min.css');

// Get all css files
const cssDir = path.join(process.cwd(), "css");
const cssFiles = fs.readdirSync(cssDir);
let css = "";

// Concat all files into one big css file
for(var i = 0; i < cssFiles.length; i++) {
  css += fs.readFileSync(path.join(cssDir, cssFiles[i]));
}

// If in Production, be sure to Include CSS from Components
if(isProduction) {
  css += fs.readFileSync(builtCSSPath)
}

// Optimize CSS
const optimizedCSS = new CleanCSS({}).minify(css);
fs.writeFileSync(builtCSSPath, optimizedCSS.styles);
