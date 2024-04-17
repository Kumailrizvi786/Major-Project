import Exercise from '../models/ExerciseModel.js';
import Content from '../models/ContentModel.js';
import MCQ from '../models/MCQModel.js';

export const getExerciseByName = async (req, res) => {
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

// export const updateExcerciseByName = async (req, res) => {
//   return null;
// };

export const updateExerciseByName = async (req, res) => {
  try {
    const { name, description, difficulty, contents } = req.body; // Update data

    // Find the exercise by name
    const exercise = await Exercise.findOne({ name });

    if (!exercise) {
      return res.status(404).json({ message: 'Exercise not found' });
    }

    // Update exercise properties (if provided)
    if (description) exercise.description = description;
    if (difficulty) exercise.difficulty = difficulty;

    // Update content and MCQs (if provided)
    if (contents) {
      const updatedContentIds = []; // Track updated content IDs

      for (const contentData of contents) {
        const { contentId, ...contentUpdates } = contentData; // Destructure content data

        // Check if contentId is provided for update
        if (!contentId) {
          return res.status(400).json({ message: 'Missing content ID for update' });
        }

        // Find the content to update
        const contentToUpdate = await Content.findById(contentId);

        if (!contentToUpdate) {
          return res.status(404).json({ message: 'Content not found for update' });
        }

        // Update content properties (if provided)
        if (contentUpdates.contentType) contentToUpdate.contentType = contentUpdates.contentType;
        if (contentUpdates.text) contentToUpdate.text = contentUpdates.text;
        if (contentUpdates.imageUrl) contentToUpdate.imageUrl = contentUpdates.imageUrl;
        if (contentUpdates.description) contentToUpdate.description = contentUpdates.description;

        // Update MCQs within the content (if provided in contentUpdates)
        if (contentUpdates.mcqs) {
          const updatedMCQIds = []; // Track updated MCQ IDs

          for (const mcqData of contentUpdates.mcqs) {
            const { mcqId, ...mcqUpdates } = mcqData; // Destructure MCQ data

            // Check if mcqId is provided for update
            if (!mcqId) {
              return res.status(400).json({ message: 'Missing MCQ ID for update within content' });
            }

            // Find the MCQ to update
            const mcqToUpdate = await MCQ.findById(mcqId);

            if (!mcqToUpdate) {
              return res.status(404).json({ message: 'MCQ not found for update within content' });
            }

            // Update MCQ properties (if provided)
            if (mcqUpdates.question) mcqToUpdate.question = mcqUpdates.question;
            if (mcqUpdates.options) mcqToUpdate.options = mcqUpdates.options;
            if (mcqUpdates.correctAnswer) mcqToUpdate.correctAnswer = mcqUpdates.correctAnswer;

            // Save the updated MCQ
            const updatedMCQ = await mcqToUpdate.save();
            updatedMCQIds.push(updatedMCQ._id);
          }

          // Update the content's mcqs array with updated MCQ IDs (if any)
          if (updatedMCQIds.length > 0) {
            contentToUpdate.mcqs = updatedMCQIds;
          }
        }

        // Save the updated content
        const updatedContent = await contentToUpdate.save();
        updatedContentIds.push(updatedContent._id);
      }

      // Update the exercise's content references with the updated IDs
      exercise.content = updatedContentIds;
    }

    // Save the updated exercise and populate content and MCQs
    const updatedExercise = await exercise.save();

    // Send the updated exercise in the response
    res.status(200).json(updatedExercise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const deleteExerciseByName = async (req, res) => {
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
