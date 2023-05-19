import { Router } from "express";
import { getGoods } from "../controllers/goods.js";
import { checkAuth } from "../utils/checkAuth.js";
import { addItem } from "../controllers/goods.js";

const router = new Router();

//Get Goods http://localhost:3005
router.get("/", getGoods);

//POST GOOD TO USER CORT http://localhost:3005/cort
router.post("/cort", checkAuth, addItem)

export default router;