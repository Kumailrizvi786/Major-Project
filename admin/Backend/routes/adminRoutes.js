import express from 'express';
import {login, update} from '../controllers/adminController.js';

const router = express.Router();

router.post('/login', login);
router.put('/update', update)
export default router;