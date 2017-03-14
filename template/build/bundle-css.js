const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');
const isDevelopment = process.env.NODE_ENV !== "production";

// Get all css files
const cssDir = path.join(process.cwd(), "css");
const cssFiles = fs.readdirSync(cssDir);
let css = "";

// Concat all files into one big css file
for(var i = 0; i < cssFiles.length; i++) {
  css += fs.readFileSync(path.join(cssDir, cssFiles[i]));
}

// Optimize CSS
const optimizedCSS = new CleanCSS({}).minify(css + css.toString());
fs.writeFileSync(builtCSSPath, optimizedCSS.styles);
