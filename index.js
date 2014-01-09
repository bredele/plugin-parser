
/**
 * Plugin constructor.
 * @api public
 */

module.exports = function(str) {
	str = str.replace(/ /g,'');
	var phrases = str ? str.split(';') : ['main'];
  //var phrases = str.replace(/ /g,'').split(';') || ['main'];
  var results = [];
  for(var i = 0, l = phrases.length; i < l; i++) {
    var expr = phrases[i].split(':');

    var params = [];
    var name = expr[0];

    if(expr[1]) {
      params = expr[1].split(',');
    } else {
      name = 'main';
    }

    results.push({
      method: expr[0],
      params: params
    });
  }
  return results;
 };