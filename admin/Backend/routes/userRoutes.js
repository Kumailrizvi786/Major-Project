import express from "express";
import {getAllUsers, createUser} from '../controllers/userController.js'

const router = express.Router();

router.get('/getAll', getAllUsers);
router.post('/create', createUser);

export default router;