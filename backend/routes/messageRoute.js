import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { createMessage } from "../controllers/Messages/createMessage/createMessage.js";

const router = express.Router();

//create message
router.post("/message", authMiddleware, createMessage);

export default router;
