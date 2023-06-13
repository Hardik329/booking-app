import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";
import User from "../models/User.js";
import { createError } from "../utils/error.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req,res,next)=>{
    res.send("Hello user, you are logged in!")
})
router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
    res.send("Hello user, you are logged in. You can delete your account")
})
router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
    res.send("Hello admin")
})


//CREATE
router.post("/", createUser);

//UPDATE
router.put("/:id",verifyUser, updateUser);

//DELETE
router.delete("/:id",verifyUser, deleteUser);

// GET
router.get("/:id",verifyUser, getUser);

// GET ALL
router.get("/", verifyAdmin,getAllUsers);

export default router;
