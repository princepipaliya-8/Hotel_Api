import express from "express"
import { ingredientItemsGet, ingredientItemsPost } from "../controller/ingredientItems.js"
const ingredientItems = express.Router()

ingredientItems.get("/", ingredientItemsGet)
ingredientItems.post("/", ingredientItemsPost)

export default ingredientItems