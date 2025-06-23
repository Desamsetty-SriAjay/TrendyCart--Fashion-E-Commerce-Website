import express from "express";
import { placeOrder, getUserOrders,getAllOrders,deleteOrder  } from "../controllers/orderController.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/user-orders", authUser, getUserOrders);
orderRouter.get("/all", getAllOrders);
orderRouter.post("/delete", authUser, deleteOrder);
export default orderRouter;
