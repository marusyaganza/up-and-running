const express = require("express");
const path = require("path");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const passport = require("passport");
var session = require("express-session");
const { Strategy } = require("passport-google-oauth20");
const { ROUTES } = require("./routes");

const FE_URL = process.env.FE_URL;

const staticPath = path.join(__dirname, "..", "..", "client", "dist");

const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const SESSION_KEY = process.env.SESSION_KEY;

function verifyCallback(accessToken, refreshToken, profile, done) {
  done(null, profile);
}

const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());
app.use(cors({ origin: FE_URL }));

app.use(
  session({
    secret: SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    // TODO uncomment it in production or when using https
    // cookie: { secure: false },
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Strategy(
    {
      callbackURL: "/auth/google/callback",
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    },
    verifyCallback
  )
);

// Save the session to the cookie
passport.serializeUser((user, done) => {
  done(null, {
    id: user.id,
    displayName: user.displayName,
    picture: user._json.picture,
  });
});

// Read the data from the cookie
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

app.use("/", express.static(staticPath));

//handle data routes
const routes = Object.keys(ROUTES);
routes.forEach((route) => {
  app.use(ROUTES[route].url, ROUTES[route].router);
});

// handle FE routes
app.get("/*", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

module.exports = app;
