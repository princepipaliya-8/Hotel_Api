import express from "express"

import { ingredientTypeGet, ingredientTypePost } from "../controller/ingredientType.js"
const ingredientType = express.Router()

ingredientType.get("/", ingredientTypeGet)
ingredientType.post("/", ingredientTypePost)

export default ingredientType