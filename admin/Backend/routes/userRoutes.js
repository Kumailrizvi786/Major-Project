import express from "express";
import {getAllUsers, createUser, updateUser} from '../controllers/userController.js'

const router = express.Router();

router.get('/getAll', getAllUsers);
router.post('/create', createUser);
router.put('/update', updateUser);

export default router;