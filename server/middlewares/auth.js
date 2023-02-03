import ErrorHandler from "../utils/ErrorHandler.js";

/* Check user logged in or not*/
export const isAuthenticated = (req, res, next) => {
  const token = req.cookies["connect.sid"];

  if (!token) {
    return next(new ErrorHandler("Not Logged In", 401));
  }
  next();
};
