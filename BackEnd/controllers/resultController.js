import Result from '../models/ResultModel.js';
import User from '../models/UserModel.js';
import Exercise from '../models/ExerciseModel.js';



export const createResult = async (req, res) => {
    try {
      const { userId, exerciseId, score, wpm } = req.body;
  
      // Validate user and exercise existence (optional)
      const user = await User.findById(userId);
      const exercise = await Exercise.findById(exerciseId);
  
      if (!user || !exercise) {
        return res.status(400).json({ message: 'Invalid user or exercise' });
      }
  
      // Create a new result document
      const newResult = new Result({
        user: user._id,
        exercise: exercise._id,
        score,
        wpm: wpm || null, // Set wpm to null if not provided
      });
  
      // Save the result and send response
      const savedResult = await newResult.save();
      res.status(200).json(savedResult); // Send created result back to frontend
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  


export const getResultById = async (req, res) => {
    return res.status(200).json({message: 'OK'});
} 



export const getResultByUser = async (req, res) => {
    return res.status(200).json({message: 'OK'});
}