var supertest = require('supertest');
var app = require('../app');

describe('plain text response', function(){

  it('returns a plain text response', function(done){
    supertest(app)
      .get('/')
      .set('User Agent', 'my cool browser')
      .set('Accept', 'text/plain')
      .expect('Content-Type', /text\/plain/)
      .expect(200)
      .end(done)
  });

  it('returns your User Agent', function(done){

  })

})
