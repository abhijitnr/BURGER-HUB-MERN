import express from "express";
import passport from "passport";
import { logout, myProfile } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const userRoutes = express.Router();

/* LOGIN WITH GOOGLE */
userRoutes.get(
  "/google/login",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

/* REDIRECT in Login after Google Login */
userRoutes.get(
  "/login",
  passport.authenticate("google", {
    scope: ["profile"],
    successRedirect: process.env.FRONTEND_URL,
  }),
  (req, res, next) => {
    res.send("Logged In successfully");
  }
);

/* GET Profile */
userRoutes.get("/me", isAuthenticated, myProfile);

/* Logout */
userRoutes.get("/logout", logout);

export default userRoutes;
