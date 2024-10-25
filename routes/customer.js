import express from "express";
import { customerGet, customerPost } from '../controller/customer.js';

const customer = express.Router();

// customer
customer.get("/customer", customerGet)
customer.post("/customer", customerPost)


export default customer
