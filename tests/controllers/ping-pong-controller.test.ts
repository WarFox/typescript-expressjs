import { expect } from 'chai';
import { describe, it } from 'mocha';
import { instance, mock, verify, when } from 'ts-mockito';

import { OK } from 'http-status-codes';
import { Request, Response } from 'express';

import { PingPongController } from '../../src/controllers/ping-pong-controller';

describe('PingPongController', () => {
  // Setup mocks
  const mockReq = mock<Request>();
  const mockRes = mock<Response>();
  when(mockRes.status(OK)).thenReturn({ json: () => 'result' });
  const req = instance(mockReq);
  const res = instance(mockRes);

  const controller = new PingPongController();

  it('ping', () => {
    expect(controller.ping(req, res)).to.equal('result');
    verify(mockRes.status(OK)).called();
  });

  it('pong', () => {
    expect(controller.pong(req, res)).to.equal('result');
    verify(mockRes.status(OK)).called();
  });
});
