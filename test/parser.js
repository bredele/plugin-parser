var parse = require('plugin-parser');
var assert = require('assert');

describe("parse(str)", function() {
  it('should support "method"', function(){
    var result = parse('method');
  });

  it('should support args', function(){
    var result = parse('method:arg');
  });

  it('should support multiple args', function(){
    var result = parse('method:arg1,arg2');
  });

  it('should support white spaces', function(){
    var result = parse(' method : arg1, arg2');
  });

  it('should support multiple methods', function(){
    var result = parse('method:arg1; method2');
  });

  //special with default method
  it('should support just args', function(){
    var result = parse('arg1,arg2');
  });

});
