import {logoutUser} from '../controllers/loginController.js';
import express from 'express';

const router = express.Router();

router.get('/', logoutUser);

export default router;