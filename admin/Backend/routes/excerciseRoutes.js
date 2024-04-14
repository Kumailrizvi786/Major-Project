import express from "express";
import {getExcerciseByName, createExcercise, updateExcerciseByName, deleteExcerciseByName} from "../controllers/excerciseController.js";

const router = express.Router();

router.get('/getByName', getExcerciseByName);
router.post('/create', createExcercise);
router.put('/updateByName', updateExcerciseByName);
router.delete('/deletByName', deleteExcerciseByName);

export default router;