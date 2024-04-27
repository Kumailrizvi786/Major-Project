import express from "express";
import { registerUser,loginUser , getAllDetails, updateUser, forgotPassword} from '../controllers/userController.js';
import { checkAuth } from "../middlewares/checkAuth.js";

const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/getAllDetails', getAllDetails);
router.put('/update', updateUser);
// router.get('/logout', logoutUser);
router.post('/forgotPassword', forgotPassword)

export default router;