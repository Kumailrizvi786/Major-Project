import express from "express";
import {getExcerciseByName, getAllExercise} from "../controllers/exerciseController.js";

const router = express.Router();

router.get('/getAll', getAllExercise);
router.get('/getByName', getExcerciseByName);

export default router;