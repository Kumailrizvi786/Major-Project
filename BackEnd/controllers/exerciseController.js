import Exercise from '../models/ExerciseModel.js';
import Content from '../models/ContentModel.js';
import MCQ from '../models/MCQModel.js';
import mongoose from 'mongoose';

export const getAllExercise = async (req, res) => {
    try {
        // Fetch all exercises, populate 'content' and then populate 'mcqs' within content
        const exercises = await Exercise.find().populate({
            path: 'content',
            populate: {
                path: 'mcqs'
            }
        });

        // Send the fetched exercises in the response
        res.status(200).json(exercises);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const getExcerciseByName = async (req, res) => {
    try {
        const { name } = req.params; // Assuming the exercise name comes from request body

        // Fetch the exercise by name, populate 'content' and then populate 'mcqs' within content
        const exercise = await Exercise.findOne({ name }).populate({
            path: 'content',
            populate: {
                path: 'mcqs'
            }
        });

        if (!exercise) {
            return res.status(404).json({ message: 'Exercise not found' });
        }

        // Send the fetched exercise in the response
        res.status(200).json(exercise);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getExerciseById = async (req, res) => {
    try {
      const { id } = req.params; // Assuming the exercise id comes from request params
  
      // Fetch the exercise by name, populate 'content' and then populate 'mcqs' within content
      const exercise = await Exercise.findById(id).populate({
        path: 'content',
        populate: {
          path: 'mcqs'
        }
      });
  
      if (!exercise) {
        return res.status(404).json({ message: 'Exercise not found' });
      }
  
      // Send the fetched exercise in the response
      res.status(200).json(exercise);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

export const getExercisesByAge = async (req, res) => {
    try {
        const { age } = req.params; //Max age will be considered

        // Find exercises where difficulty.maxAge is equal to age
        const exercises = await Exercise.find({ 'difficulty.maxAge': age })
            .populate({
                path: 'content',
                populate: {
                    path: 'mcqs'
                }
            });

        if (!exercises.length) {
            return res.status(404).json({ message: 'No exercises found for this age' });
        }

        // Send the fetched exercises in the response
        res.status(200).json(exercises);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
  