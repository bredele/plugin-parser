var trim = require('trim');

/**
 * Plugin constructor.
 * @api public
 */

module.exports = function(str) {
	//str = str.replace(/ /g,'');
	var phrases = str ? str.split(';') : ['main'];
  var results = [];
  for(var i = 0, l = phrases.length; i < l; i++) {
    var expr = phrases[i].split(':');

    var params = [];
    var name = expr[0];

    if(expr[1]) {
      var args = expr[1].split(',');
      for(var j = 0, h = args.length; j < h; j++) {
        params.push(trim(args[j]));
      }
    } else {
      name = 'main'; //doesn't do anything
    }

    results.push({
      method: trim(expr[0]),
      params: params
    });
  }
  return results;
 };