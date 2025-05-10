import express from "express";
import { placeOrder, getUserOrders,getAllOrders  } from "../controllers/orderController.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/user-orders", authUser, getUserOrders);
orderRouter.get("/all", getAllOrders);
export default orderRouter;
