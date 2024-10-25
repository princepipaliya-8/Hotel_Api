import express from "express";
import { orderMenuGet, orderMenuPost } from "../controller/orderMenu.js";
import order from "../model/order/order.js";

const orderMenu = express.Router();

orderMenu.get("/", orderMenuGet)
orderMenu.post("/", orderMenuPost)

export default orderMenu