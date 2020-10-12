import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { PingPong } from './routes';
import { morganOption } from './config/winston';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan('combined', morganOption)); // http logging

// routes
app.use('/', PingPong);

export { app };
