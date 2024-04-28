import express from "express";
import {getExerciseById, createExercise, updateExerciseById, deleteExerciseById, getAllExercise} from "../controllers/exerciseController.js";

const router = express.Router();

router.get('/getAll', getAllExercise);
router.get('/getById/:id', getExerciseById);
router.post('/create', createExercise);
router.put('/updateById', updateExerciseById);
router.delete('/deleteById/:id', deleteExerciseById);

export default router;