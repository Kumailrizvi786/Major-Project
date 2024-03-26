import express from "express";
import {emailVerify, generateEmail} from "../controllers/emailController.js";

const router = express.Router();

router.get('/verifyEmail', emailVerify);
router.get('/generateEmail', generateEmail);

export default router;