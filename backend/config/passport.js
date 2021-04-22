const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

/* PASSPORT */
passport.use(new GoogleStrategy({
  clientID: '310261372741-gu9pvrcp1av8hq5ogii3s96bljdhpapt',
  clientSecret: 'Yy5RaDhNMOZXcbA2QTe25vjE',
  callbackURL: 'http://localhost:8000/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  done(null, profile);
}));

// serialize user when saving to session
passport.serializeUser((user, serialize) => {
  serialize(null, user);
});

// deserialize user when reading from session
passport.deserializeUser((obj, deserialize) => {
  deserialize(null, obj);
});