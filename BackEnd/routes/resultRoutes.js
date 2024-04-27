import express from "express";
import {createResult, getResultById, getResultByUser} from "../controllers/resultController.js";

const router = express.Router();

router.post('/create', createResult);
router.get('/getById', getResultById);
router.get('/getByUser', getResultByUser);


export default router;