import express from "express";
import { menuGet, menuPost } from "../controller/menu.js";
const menu = express.Router();


menu.get("/", menuGet)
menu.post("/", menuPost)

export default menu