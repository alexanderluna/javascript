var capitalize  = require('../capitalize');
var chai        = require('chai');
var expect      = chai.expect;

describe('capitalize', function(){
  it('capitalizes the first letter', function(){
    expect(capitalize('express')).to.equal('Express');
  });
  it('makes the rest of the string lowercase', function(){
    expect(capitalize('cats')).to.equal('Cats');
  });
  it('leaves empty string alone', function(){
    expect(capitalize('')).to.equal('');
  });
  it('leaves strings with no words alone', function(){
    expect(capitalize(' ')).to.equal(' ');
    expect(capitalize('123')).to.equal('123');
  });
  it('capitalizes multipled word strings', function(){
    expect(capitalize('hello world')).to.equal('Hello world');
  });
  it('leaves capitalized words alone', function(){
    expect(capitalize('Hello')).to.equal('Hello');
  });
  it('capitalizes string objects without changin their value', function(){
    var str = new String('what time is it?');
    expect(capitalize(str)).to.equal('What time is it?');
    expect(str.valueOf()).to.equal('what time is it?');
  })
});
