import express from "express";
import {createResult, getResultById, getResultByUserEmail} from "../controllers/resultController.js";

const router = express.Router();

router.post('/create', createResult);
router.get('/getById/:id', getResultById);
router.get('/getByUser/:email', getResultByUserEmail);


export default router;