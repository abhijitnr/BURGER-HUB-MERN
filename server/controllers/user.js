import { asyncError } from "../middlewares/errorMiddleware.js";
import User from "../models/User.js";

/* GET my profile */
export const myProfile = (req, res, next) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

/* Logout user */
export const logout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);

    res.clearCookie("connect.sid");
    res.status(200).json({
      message: "Logged Out",
    });
  });
};

/* GET all users by ADMIN */
export const getAdminUsers = asyncError(async (req, res, next) => {
  const users = await User.find({});

  res.status(200).json({
    success: true,
    users,
  });
});
