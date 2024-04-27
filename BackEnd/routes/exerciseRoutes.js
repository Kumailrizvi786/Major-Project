import express from "express";
import {getExcerciseByName, getAllExercise, getExerciseById, getExercisesByAge} from "../controllers/exerciseController.js";

const router = express.Router();

router.get('/getAll', getAllExercise);
router.get('/getByName/:name', getExcerciseByName);
router.get('/getById/:id', getExerciseById);
router.get('/getByAge/:age', getExercisesByAge);

export default router;