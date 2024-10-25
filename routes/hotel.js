import express from "express";
import customer from "./customer.js";
const hotel = express.Router();


hotel.get("/", hotel)

export default hotel
