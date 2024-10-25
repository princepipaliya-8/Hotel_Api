import express from "express";
import { staffMemberGet, staffMemberPost } from "../controller/staffMember.js";

const staffMember = express.Router();

staffMember.get("/", staffMemberGet)
staffMember.post("/", staffMemberPost)

export default staffMember