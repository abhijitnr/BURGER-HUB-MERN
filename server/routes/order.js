import express from "express";
import { placeOrder } from "../controllers/order.js";
import { isAuthenticated } from "../middlewares/auth.js";

const orderRoutes = express.Router();

/* CREATE ORDER */
orderRoutes.post("/create", isAuthenticated, placeOrder);

export default orderRoutes;
