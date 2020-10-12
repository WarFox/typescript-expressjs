import chai from 'chai';
import request from 'supertest';

import { app } from '../src/app';
import { describe, it } from 'mocha';

describe('PingPong API test', () => {
  it('GET /ping', async () => {
    const result = await request(app).get('/ping');
    chai.expect(result.body).to.eql({ message: 'pong' });
    chai.expect(result.statusCode).to.equal(200);
  });

  it('GET /pong', async () => {
    const result = await request(app).get('/pong');
    return request(app)
      .get('/pong')
      .then((res) => {
        chai.expect(result.statusCode).to.equal(200);
        chai.expect(res.body).to.eql({ message: 'ping' });
      });
  });
});
