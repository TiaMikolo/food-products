import express from "express";
import { createUser } from "../controllers/Users/createUser/createUser.js";
import { userLogin } from "../controllers/Users/userLogin/userLogin.js";
import { getAllUser } from "../controllers/Users/getAllUser/getAllUser.js";
import { updateUser } from "../controllers/Users/updateUser/updateUser.js";
import { deleteUser } from "../controllers/Users/deleteUser/deleteUser.js";

const router = express.Router();

//CREATE
router.post("/user", createUser);

//LOGIN
router.post("/user/login", userLogin);

//READ
router.get("/users", getAllUser);

//UPDATE
router.put("/user/:id", updateUser);

//DELETE
router.delete("/user/:id", deleteUser);

export default router;
