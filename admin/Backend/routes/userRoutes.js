import express from "express";
import {getAllUsers, createUser, updateUser, deleteUser} from '../controllers/userController.js'

const router = express.Router();

router.post('/create', createUser);
router.get('/getAll', getAllUsers);
router.put('/update', updateUser);
router.delete('/delete', deleteUser);

export default router;