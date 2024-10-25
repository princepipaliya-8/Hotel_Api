import express from "express"

import { ingredientsGet, ingredientsPost } from "../controller/ingredients.js"
const ingredients = express.Router()

ingredients.get("/", ingredientsGet)
ingredients.post("/", ingredientsPost)

export default ingredients