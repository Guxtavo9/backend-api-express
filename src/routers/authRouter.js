import express, { Router } from "express";
import listAll from "../controllers/user/listAll.js";
import getById from "../controllers/user/getById.js";
import create from "../controllers/user/create.js";
import update from "../controllers/user/update.js";
import removeUser from "../controllers/user/removeUser.js";
import login from "../controllers/auth/login.js";
import logout from "../controllers/auth/logout.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/logout", auth, logout);

export default router;
