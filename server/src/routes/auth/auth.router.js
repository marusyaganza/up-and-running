const express = require("express");
const passport = require("passport");

const { httpLogout } = require("./auth.controller");

const authRouter = express.Router();

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/flights");
  }
);

authRouter.get("/failure", (req, res) => {
  res.json({ error: "Login failed" });
});

authRouter.get("/logout", httpLogout);

module.exports = authRouter;
