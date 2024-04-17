import express from "express";
import {getExerciseByName, createExercise, updateExerciseByName, deleteExerciseByName, getAllExercise} from "../controllers/exerciseController.js";

const router = express.Router();

router.get('/getAll', getAllExercise);
router.get('/getByName', getExerciseByName);
router.post('/create', createExercise);
router.put('/updateByName', updateExerciseByName);
router.delete('/deleteByName', deleteExerciseByName);

export default router;