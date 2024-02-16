import express, { Router } from "express";
import listAll from "../controllers/product/listAll.js";
import getById from "../controllers/product/getById.js";
import create from "../controllers/product/create.js";
import update from "../controllers/product/update.js";
import removeProduct from "../controllers/product/removeProduct.js";

const router = express.Router();

router.get("/", listAll);

router.get("/:id", getById);

router.post("/", create);

router.put("/:id", update);

router.delete("/:id", removeProduct);

export default router;
