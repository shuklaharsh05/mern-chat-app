import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getMessage, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessage);

// router.post("/signup", signup);

// router.post("/logout",logout)
export default router