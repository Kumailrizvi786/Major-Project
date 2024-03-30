import express from "express";
import { registerUser, logoutUser, loginUser , getAllDetails} from '../controllers/userController.js';
import { checkAuth } from "../middlewares/checkAuth.js";

const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/getAllDetails',checkAuth, getAllDetails);
router.get('/logout',checkAuth, logoutUser);

export default router;