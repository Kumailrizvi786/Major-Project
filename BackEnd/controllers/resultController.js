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
  try {
    const { id } = req.params;

    // Find the result by ID and populate user and exercise details
    const result = await Result.findById(id)
      .populate('user')
      .populate('exercise');

    if (!result) {
      return res.status(404).json({ message: 'Result not found' });
    }

    // Send the fetched result in the response
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getResultByUserEmail = async (req, res) => {
  try {
    const { email } = req.params; // Assuming email is in request params

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find all results for the user
    const results = await Result.find({ user: user._id }).populate({
      path: 'exercise'
    });

    // Send the fetched results in the response
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
