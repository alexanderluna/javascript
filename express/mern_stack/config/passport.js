import { Strategy, ExtractJwt } from 'passport-jwt';
import mongoose from 'mongoose';
import User from '../models/User';
import key from './keys';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: key.secretKey
};

export default passport => {
  passport.use(new Strategy(options, (payload, done) => {
    User.findById(payload.id)
      .then(user => {
        if (user) return done(null, user);
        return done(null, false);
      })
      .catch(err => console.log(err));
  }));
};