import { Router } from "express";
import { checkAuth } from "../utils/checkAuth.js";
import { sendMail } from "../controllers/mailer.js";

const router = new Router();

router.post("/", checkAuth, sendMail);

export default router;