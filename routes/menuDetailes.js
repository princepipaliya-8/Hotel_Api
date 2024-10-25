import express from "express";
import { menuDetailesGet, menuDetailesPost } from "../controller/menuDetailes.js";

const menuDetailes = express.Router();

menuDetailes.get("/", menuDetailesGet)
menuDetailes.post("/", menuDetailesPost)

export default menuDetailes