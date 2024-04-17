import express from "express";
import {getExerciseByName, createExercise, updateExerciseByName, deleteExerciseById, getAllExercise} from "../controllers/exerciseController.js";

const router = express.Router();

router.get('/getAll', getAllExercise);
router.get('/getByName', getExerciseByName);
router.post('/create', createExercise);
router.put('/updateByName', updateExerciseByName);
router.delete('/deleteById/:id', deleteExerciseById);

export default router;