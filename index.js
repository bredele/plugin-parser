
/**
 * Plugin constructor.
 * @api public
 */

module.exports = function(str) {
  var expr = str.split(':');

  if(expr[1]){
	  var params = expr[1].split(',');
	  params.splice(0,0,node);
  }
  return {
    method: expr[0],
    params: params
  };
};