module.exports = {
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callBackUrl: process.env.GOOGLE_CALLBACK_URI,
  },
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripe: {
    publicKey: process.env.STRIPE_PUBLIC,
    secretKey: process.env.STRIPE_SECRET,
  },
};
