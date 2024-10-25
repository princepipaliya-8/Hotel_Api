import express from "express"
import { orderGet, orderPost } from "../controller/order.js"

const order = express.Router()

order.get("/", orderGet)
order.post("/", orderPost)

export default order