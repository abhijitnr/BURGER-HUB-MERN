const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("passport");

const { connectPassport } = require("./utils/Provider");

const userRoutes = require("./routes/user");

const app = express();

module.exports = app;

// dotenv.config({
//   path: "./.env",
// });
dotenv.config();

/* using middlewares */
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

/* Using passport */
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

/* Passport Connect */
connectPassport();

/*  ALL ROUTES */

app.use("/api/v1/auth", userRoutes);
