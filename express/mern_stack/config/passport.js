import { Strategy, ExtractJwt } from 'passport-jwt';
import User from '../models/User';
import key from './keys';

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: key.secretKey
};

export default passport => {
    passport.use(new Strategy(options, async (payload, done) => {
        try {
            const user = await User.findById(payload.id);
            if (user) return done(null, user);
            return done(null, false);
        } catch (err) {
            console.log(err);
        }
    }));
};