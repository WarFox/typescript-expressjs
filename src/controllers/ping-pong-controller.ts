import { OK } from 'http-status-codes';
import { Request, Response } from 'express';

export class PingPongController {
  public ping(req: Request, res: Response): Response {
    return res.status(OK).json({
      message: 'pong',
    });
  }

  public pong(req: Request, res: Response): Response {
    return res.status(OK).json({
      message: 'ping',
    });
  }
}
