import Exercise from '../models/ExerciseModel.js';
import Content from '../models/ContentModel.js';
import MCQ from '../models/MCQModel.js';

export const getExcerciseByName = async (req, res) => {
    return null;
};

// export const createExcercise = async (req, res) => {
//     return null;
// };

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
  
          // Save the MCQ and push it to the contentMCQs array
          const savedMCQ = await newMCQ.save();
          contentMCQs.push(savedMCQ._id);
        }
  
        // Set the MCQs for the content
        newContent.mcqs = contentMCQs;
  
        // Save the content and push it to the exerciseContents array
        const savedContent = await newContent.save();
        exerciseContents.push(savedContent._id);
      }
  
      // Set the contents for the exercise
      newExercise.content = exerciseContents;
  
      // Save the exercise
      const savedExercise = await newExercise.save();
  
      res.status(201).json(savedExercise);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };

export const updateExcerciseByName = async (req, res) => {
    return null;
};

export const deleteExcerciseByName = async (req, res) => {
    return null;
};

export const getAllExercise = async (req, res) => {
  return null;
};