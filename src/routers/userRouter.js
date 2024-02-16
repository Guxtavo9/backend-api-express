import express, { Router } from "express";
import listAll from "../controllers/user/listAll.js";
import getById from "../controllers/user/getById.js";
import create from "../controllers/user/create.js";
import update from "../controllers/user/update.js";
import removeUser from "../controllers/user/removeUser.js";


const router = express.Router();

router.get("/", listAll);

router.get("/:id", getById);

router.post("/", create);

router.put("/:id", update);

router.delete("/:id", removeUser);

export default router;
