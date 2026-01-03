import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { createBid } from "../controllers/bidControl.js";

const router = express.Router();

router.post("/", verifyToken, createBid);

export default router;
