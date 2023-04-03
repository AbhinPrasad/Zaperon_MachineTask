import express from "express"
import { userLogin } from "../controllers/authController.js";

const router = express.Router()

router.post("/",userLogin)

export default router;