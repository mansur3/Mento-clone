require("dotenv").config();
const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const {v4: uuidV4} = require('uuid');

const User = require("../models/user.model");

const {newToken} = require("../controllers/auth.controller")
require("dotenv").config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:2345/auth/google/callback",
    userProfileURL: "https://**www**.googleapis.com/oauth2/v3/userinfo",
    passReqToCallback: true
  },
  async function(request, accessToken, refreshToken, profile, done) {
    const email = profile?._json?.email
      
    let user;
    try { 
      user = await User.findOne({email}).lean().exec();

      if(!user) {
        user = await User.create({
          name: profile._json.name,
          picture: profile._json.picture,
          email: email,
          password: uuidV4()
        })
      }

      const token = newToken(user);
      return done(null, {user, token})

    } catch(err) {
      console.log("err", err)
    }
  }
));

module.exports = passport