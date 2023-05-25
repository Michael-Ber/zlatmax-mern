import { Router } from "express";
import { getGoods } from "../controllers/goods.js";
import { checkAuth } from "../utils/checkAuth.js";
import { addItem, removeItem, addItemToFavorites, removeItemFromFavorites } from "../controllers/goods.js";

const router = new Router();

//Get Goods http://localhost:3005
router.get("/", getGoods);

//POST GOOD TO USER CART http://localhost:3005/cort
router.post("/cort", checkAuth, addItem)

//REMOVE ITEM FROM CART
router.put("/cort", checkAuth, removeItem)

//PUT ITEM TO FAVORITES
router.post("/favorites", checkAuth, addItemToFavorites);

//REMOVE ITEM FROM FAVORITES
router.put("/favorites", checkAuth, removeItemFromFavorites);

export default router;