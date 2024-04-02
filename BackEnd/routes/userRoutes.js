import express from "express";
import { registerUser, logoutUser, loginUser , getAllDetails, updateUser, forgotPassword} from '../controllers/userController.js';
import { checkAuth } from "../middlewares/checkAuth.js";

const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/getAllDetails',checkAuth, getAllDetails);
router.put('/update', updateUser);
// router.get('/logout', logoutUser);
router.post('/forgotPassword', forgotPassword)

export default router;