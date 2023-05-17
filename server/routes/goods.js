import { Router } from "express";
import { getGoods } from "../controllers/goods.js";

const router = new Router();

//Get Goods http://localhost:3005
router.get("/", getGoods);

export default router;