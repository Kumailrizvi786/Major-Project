import express from "express";
import {getAllUsers, createUser, updateUser, deleteUser, getUserByEmail} from '../controllers/userController.js'

const router = express.Router();

router.post('/create', createUser);
router.get('/getAll', getAllUsers);
router.get('/get/:email', getUserByEmail);
router.put('/update', updateUser);
router.delete('/delete', deleteUser);

export default router;