import { Router } from "express";
import { checkAuth } from "../utils/checkAuth.js";
import {addItem } from "../controllers/cort.js";

const router = new Router();

//http://localhost:3005/cort

router.post("/cort", checkAuth, addItem)