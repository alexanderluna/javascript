const request = require('supertest');
const app = require('../app');

test('Should signup a new user', async () => {
  await request(app);
});
