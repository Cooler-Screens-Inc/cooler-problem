import path from 'path';

import express, { Response, Request, NextFunction } from 'express';
import compression from 'compression';
import cors from 'cors';

import { Logger, loggingMiddleware } from './logging';
import { useControllers } from './controllers';

const appName = 'cooler-problem';
const port = process.env.PORT || 4000;

async function main() {
  try {
    const app = express();

    app.use(loggingMiddleware);
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(compression());

    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Authorization, Origin, X-Requested-With, Content-Type, Accept'
      );
      next();
    });

    useControllers(app);

    app.use((req, res, next) => {
      if (path.extname(req.path).length) {
        const err = new Error('Not Found');
        next(err);
      } else {
        next();
      }
    });

    app.use(errorLogger);
    app.listen(port, () => Logger.info(`${appName} Listening on port ${port}`));
    
  } catch (e) {
    if (e instanceof Error) {
      Logger.error(e.stack);
    } else {
      Logger.error(`${e}`);
    }
  }
}

function errorLogger(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);
  next();
}

main();
