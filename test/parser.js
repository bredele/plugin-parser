var parse = require('plugin-parser');
var assert = require('assert');

function equal(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

describe("parse(str)", function() {
  it('should support "method"', function(){
    var result = parse('method');
    assert(equal(result, [{
      method: "method",
      params: []
    }]));
  });

  it('should support args', function(){
    var result = parse('method:arg');
    assert(equal(result, [{
      method: 'method',
      params: ['arg']
    }]));
  });

  it('should support multiple args', function(){
    var result = parse('method:arg1,arg2');
    assert(equal(result, [{
      method: 'method',
      params: ['arg1', 'arg2']
    }]));
  });

  it('should support white spaces', function(){
    var result = parse(' method : arg1, arg2');
    assert(equal(result, [{
      method: 'method',
      params: ['arg1', 'arg2']
    }]));
  });

  //special with default method
  it('should support just args', function(){
    var result = parse('arg1,arg2');
    assert(equal(result, [{
      method: 'default',
      params: ['arg']
    }]));
  });


  it('should support multiple methods', function(){
    var result = parse('method:arg1; method2');
    assert(equal(result, [{
      method: 'method',
      params: ['arg1']
    }, {
      method: 'method2',
      params : []
    }]));
  });

});
