import { PingPongController } from '../controllers/ping-pong-controller';
import { Router } from 'express';

const PingPong = Router();
const controller = new PingPongController();

PingPong.get('/ping', controller.ping);
PingPong.get('/pong', controller.pong);

export { PingPong };
