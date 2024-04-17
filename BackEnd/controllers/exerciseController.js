import Exercise from '../models/ExerciseModel.js';

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
        const { name } = req.body; // Assuming the exercise name comes from request body

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