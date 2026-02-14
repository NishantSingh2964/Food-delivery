import express from "express"
import { placeOrder, verifyOrder, userOrders, listOrders, updateStatus } from "../controllers/orderController.js"
import authmiddleware from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authmiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authmiddleware, userOrders)
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);


export default orderRouter;