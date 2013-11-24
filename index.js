var trim = require('trim');
var map = require('mapify');

/**
 * Plugin constructor.
 * @api public
 */

module.exports = function(str) {
  var expr = str.split(':');
  if(expr[1]){
    var params = map(trim)(expr[1].split(','));
  }
  return [{
    method: trim(expr[0]),
    params: params || []
  }];
};