import express from "express";
import { tableGet, tablePost } from "../controller/table.js";

const table = express.Router();

table.get('/', tableGet)
table.post('/', tablePost)

export default table