import express from "express";
import { registerUser, logoutUser, loginUser , getDetails} from '../controllers/userController.js';
import { checkAuth } from "../middlewares/checkAuth.js";

const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout',checkAuth, logoutUser);
router.get('/getDetails',checkAuth, getDetails);

export default router;