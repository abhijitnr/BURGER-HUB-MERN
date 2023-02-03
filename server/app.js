import express, { urlencoded } from "express";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectPassport } from "./utils/Provider.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

import userRoutes from "./routes/user.js";
import orderRoutes from "./routes/order.js";

const app = express();

export default app;

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

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(
  urlencoded({
    extended: true,
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
app.use("/api/v1/order", orderRoutes);

/* ERROR middleware */
app.use(errorMiddleware);
