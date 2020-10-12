import { createLogger, format, transports } from 'winston';

const options = {
  handleExceptions: true,
  json: true,
  colorize: true,
};

const logFormat =
  process.env.NODE_ENV == 'production'
    ? format.json()
    : format.combine(format.colorize(), format.simple());

const logger = createLogger({
  transports: [new transports.Console(options)],
  format: logFormat,
  exitOnError: false,
  silent: process.env.NODE_ENV === 'test',
});

const morganOption = {
  stream: {
    write: function (message: string): void {
      logger.info(message);
    },
  },
};

export { logger, morganOption };
