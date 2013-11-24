
/**
 * Plugin constructor.
 * @api public
 */

module.exports = function(str) {
  var phrases = str.replace(/ /g,'').split(',');
  var results = [];
  for(var i = 0, l = phrases.length; i < l; i++){
    var phrase = phrases[i];
    var expr = phrase.split(':');
    if(expr[1]){
      var params = expr[1].split(',');
    }
    results.push({
      method: trim(expr[0]),
      params: params || []
    });
  }
  return results;
 };