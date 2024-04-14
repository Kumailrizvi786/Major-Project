import express from "express";
import {getExcerciseByName, createExercise, updateExcerciseByName, deleteExcerciseByName} from "../controllers/exerciseController.js";

const router = express.Router();

router.get('/getByName', getExcerciseByName);
router.post('/create', createExercise);
router.put('/updateByName', updateExcerciseByName);
router.delete('/deletByName', deleteExcerciseByName);

export default router;