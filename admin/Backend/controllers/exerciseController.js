import Exercise from '../models/ExerciseModel.js';
import Content from '../models/ContentModel.js';
import MCQ from '../models/MCQModel.js';

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

export const createExercise = async (req, res) => {
  try {
    const { name, description, difficulty, contents } = req.body;

    // Create a new exercise
    const newExercise = new Exercise({
      name,
      description,
      difficulty,
    });

    // Create content and MCQs for the exercise
    const exerciseContents = [];
    for (const contentData of contents) {
      const { contentType, text, imageUrl, description, mcqs } = contentData;

      // Create a new content
      const newContent = new Content({
        contentType,
        text,
        imageUrl,
        description,
      });

      // Create MCQs for the content
      const contentMCQs = [];
      for (const mcqData of mcqs) {
        const { question, options, correctAnswer } = mcqData;

        // Create a new MCQ
        const newMCQ = new MCQ({
          question,
          options,
          correctAnswer,
        });

        const savedMCQ = await newMCQ.save();
        contentMCQs.push(savedMCQ); // Include the entire MCQ object
      }

      // Set the MCQs for the content (using spread operator for clarity)
      newContent.mcqs = [...contentMCQs];

      // Save the content and push its ID to exerciseContents
      const savedContent = await newContent.save();
      exerciseContents.push(savedContent._id);
    }

    // Set the contents for the exercise
    newExercise.content = exerciseContents;

    // Save the exercise and populate MCQs within content
    // const savedExercise = await newExercise.save().populate('content.mcqs');

    const savedExercise = await newExercise.save();
    const populatedExercise = await Exercise.findById(savedExercise._id).populate('content');
    const contentWithMCQs = await Content.findById(populatedExercise.content._id).populate('mcqs')
    populatedExercise.content = contentWithMCQs


    // Check if population worked as expected
    if (!populatedExercise.content) {
      throw new Error('Content population failed in exercise creation');
    }

    // Extract full MCQ details from populated content
    // const populatedExerciseWithFullMCQs = savedExercise.toObject();
    const populatedExerciseWithFullMCQs = populatedExercise
    
    if (populatedExerciseWithFullMCQs.content) { // Check if content exists
      populatedExerciseWithFullMCQs.content.mcqs = populatedExerciseWithFullMCQs.content.mcqs.map(
        mcq => mcq._id
      ); // Replace MCQs with their IDs
    }

    res.status(200).json(populatedExerciseWithFullMCQs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error: ' + error.message }); // Include error message
  }
};

export const updateExcerciseByName = async (req, res) => {
  return null;
};

export const deleteExcerciseByName = async (req, res) => {
  return null;
};



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
