const express = require("express");
const passport = require("passport");

const userRoutes = express.Router();

/* LOGIN WITH GOOGLE */
userRoutes.get(
  "/google/login",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

/* REDIRECT URL */
userRoutes.get(
  "/login",
  passport.authenticate("google", {
    scope: ["profile"],
    successRedirect: process.env.FRONTEND_URL,
  })
);

module.exports = userRoutes;
