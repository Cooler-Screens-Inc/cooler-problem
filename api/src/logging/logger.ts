import winston from 'winston';

const defaultLogLevel =
  process.env.NODE_ENV === 'development' ? 'debug' : 'info';

const logLevel = process.env.LOG_LEVEL || defaultLogLevel;

const format = winston.format.combine(
  winston.format.timestamp(),
  winston.format.colorize({ level: true }),
  winston.format.printf(
    ({ timestamp, level, message }) => `${timestamp} [${level}] ${message}`
  )
);

const transports = [new winston.transports.Console()];
const colors = {
  http: 'brightMagenta',
  error: 'brightRed',
};
winston.addColors(colors);

const Logger = winston.createLogger({
  level: logLevel,
  format,
  transports,
});

export default Logger;
