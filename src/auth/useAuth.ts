import passport from 'passport';
import express from 'express';
import { Strategy } from 'passport-http-bearer';
import { UnauthorizedError } from 'routing-controllers';
import * as jwt from 'jsonwebtoken';

const bearerStrategy = new Strategy((token, done) => {
  const payload = jwt.decode(token);
  if (typeof payload === 'string' || payload === null) {
    done(new UnauthorizedError('Token is not a valid JWT'));
    return;
  }

  // We have to cast to any because the callback takes any object and sticks it on the request
  // as authInfo, but the type is not set up that way.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  done(null, {}, payload as any);
});

export function useAuth(app: express.Application): void {
  app.use(passport.initialize());
  passport.use(bearerStrategy);
}
