var _s = require('underscore.string');
var ejs = require('ejs');
var parse = ejs.parse;
ejs.parse = function(str, options) {
  str = str.replace(/^\s+|\s+$|\n/gm,"");
  return parse.apply(this, [str, options]);
};
