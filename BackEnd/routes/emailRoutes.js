import express from "express";
import {emailVerify, generateEmail} from "../controllers/emailController.js";

const router = express.Router();

router.get('/generateEmail', generateEmail);
router.post('/verifyEmail', emailVerify);

export default router;