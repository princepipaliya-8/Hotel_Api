import express from "express";
import { staffGet, staffPost } from "../controller/staff.js";
const staff = express.Router();

staff.get("/", staffGet)
staff.post("/", staffPost)

export default staff