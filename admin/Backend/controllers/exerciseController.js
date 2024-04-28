import Exercise from '../models/ExerciseModel.js';
import Content from '../models/ContentModel.js';
import MCQ from '../models/MCQModel.js';
import mongoose from 'mongoose';

export const getExerciseById = async (req, res) => {
  try {
    const { id } = req.params; // Assuming the exercise name comes from request params

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


export const updateExerciseById = async (req, res) => {
  try {
    const { id, ...updateInfo } = req.body; // Destructure exercise ID and update data

    // Find the exercise by ID
    const exercise = await Exercise.findById(id).populate('content');

    if (!exercise) {
      return res.status(404).json({ message: 'Exercise not found' });
    }

    // Update exercise properties (if provided)
    Object.assign(exercise, updateInfo); // Concisely update exercise properties

    // Update content and MCQs (if provided)
    if (updateInfo.content) {
      const updatedContent = await updateContent(exercise.content, updateInfo.content);
      exercise.content = updatedContent._id; // Update exercise's content reference
    }

    // Save the updated exercise
    const updatedExercise = await exercise.save();

    // Send the updated exercise in the response
    res.status(200).json(updatedExercise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateContent = async (existingContent, contentUpdates) => {
  // Update content properties (if provided)
  Object.assign(existingContent, contentUpdates);

  // Update MCQs within the content (if provided)
  if (contentUpdates.mcqs) {
    existingContent.mcqs = await Promise.all(
      contentUpdates.mcqs.map(async (mcqData) => {
        return await updateMCQ(mcqData);
      })
    );
  }

  // Save the updated content
  return await existingContent.save();
};

const updateMCQ = async (mcqData) => {
  const { mcqId, ...mcqUpdates } = mcqData;

  // Find the MCQ to update (if ID provided)
  const mcqToUpdate = mcqId ? await MCQ.findByIdAndUpdate(mcqId, mcqUpdates, { new: true }) : null;

  return mcqToUpdate || new MCQ(mcqUpdates); // Create new MCQ if no ID provided
};




// export const updateExerciseByName = async (req, res) => {
//   try {
//     const { name, description, difficulty, contents } = req.body; // Update data

//     // Find the exercise by name
//     const exercise = await Exercise.findOne({ name });

//     if (!exercise) {
//       return res.status(404).json({ message: 'Exercise not found' });
//     }

//     // Update exercise properties (if provided)
//     if (description) exercise.description = description;
//     if (difficulty) exercise.difficulty = difficulty;

//     // Update content and MCQs (if provided)
//     if (contents) {
//       const updatedContentIds = []; // Track updated content IDs

//       for (const contentData of contents) {
//         const { contentId, ...contentUpdates } = contentData; // Destructure content data

//         // Check if contentId is provided for update
//         if (!contentId) {
//           return res.status(400).json({ message: 'Missing content ID for update' });
//         }

//         // Find the content to update
//         const contentToUpdate = await Content.findById(contentId);

//         if (!contentToUpdate) {
//           return res.status(404).json({ message: 'Content not found for update' });
//         }

//         // Update content properties (if provided)
//         if (contentUpdates.contentType) contentToUpdate.contentType = contentUpdates.contentType;
//         if (contentUpdates.text) contentToUpdate.text = contentUpdates.text;
//         if (contentUpdates.imageUrl) contentToUpdate.imageUrl = contentUpdates.imageUrl;
//         if (contentUpdates.description) contentToUpdate.description = contentUpdates.description;

//         // Update MCQs within the content (if provided in contentUpdates)
//         if (contentUpdates.mcqs) {
//           const updatedMCQIds = []; // Track updated MCQ IDs

//           for (const mcqData of contentUpdates.mcqs) {
//             const { mcqId, ...mcqUpdates } = mcqData; // Destructure MCQ data

//             // Check if mcqId is provided for update
//             if (!mcqId) {
//               return res.status(400).json({ message: 'Missing MCQ ID for update within content' });
//             }

//             // Find the MCQ to update
//             const mcqToUpdate = await MCQ.findById(mcqId);

//             if (!mcqToUpdate) {
//               return res.status(404).json({ message: 'MCQ not found for update within content' });
//             }

//             // Update MCQ properties (if provided)
//             if (mcqUpdates.question) mcqToUpdate.question = mcqUpdates.question;
//             if (mcqUpdates.options) mcqToUpdate.options = mcqUpdates.options;
//             if (mcqUpdates.correctAnswer) mcqToUpdate.correctAnswer = mcqUpdates.correctAnswer;

//             // Save the updated MCQ
//             const updatedMCQ = await mcqToUpdate.save();
//             updatedMCQIds.push(updatedMCQ._id);
//           }

//           // Update the content's mcqs array with updated MCQ IDs (if any)
//           if (updatedMCQIds.length > 0) {
//             contentToUpdate.mcqs = updatedMCQIds;
//           }
//         }

//         // Save the updated content
//         const updatedContent = await contentToUpdate.save();
//         updatedContentIds.push(updatedContent._id);
//       }

//       // Update the exercise's content references with the updated IDs
//       exercise.content = updatedContentIds;
//     }

//     // Save the updated exercise and populate content and MCQs
//     const updatedExercise = await exercise.save();

//     // Send the updated exercise in the response
//     res.status(200).json(updatedExercise);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

export const deleteExerciseById = async (req, res) => {
  try {
    const { id } = req.params; // Assuming the exercise ID comes from request params
    // console.log(id);
    // Check if a valid ID was provided
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid exercise ID' });
    }

    // Delete the exercise by ID (with populate to fetch content reference)
    const deletedExercise = await Exercise.findByIdAndDelete(id).populate('content');

    // console.log("deletedExercise "+ deletedExercise); 

    // deletedExercise {
    //   _id: new ObjectId('661ff81a77e6ef3c52f050ae'),     
    //   name: 'Test1',
    //   description: '1st Exercise',
    //   difficulty: {
    //     minAge: 6,
    //     maxAge: 8,
    //     level: 'Easy',
    //     _id: new ObjectId('661ff81a77e6ef3c52f050af')    
    //   },
    //   content: {
    //     _id: new ObjectId('661ff81a77e6ef3c52f050b0'),   
    //     contentType: 'text',
    //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar at massa eu pulvinar. Duis eget libero id tellus molestie mattis a quis eros. Integer a metus ligula. Donec cursus purus eget tempus suscipit. Pellentesque lobortis tellus a turpis hendrerit molestie. Aliquam feugiat dignissim urna et aliquam. Etiam hendrerit at.',
    //     imageUrl: null,
    //     description: '1st Description',
    //     mcqs: [
    //       new ObjectId('661ff81a77e6ef3c52f050b1'),      
    //       new ObjectId('661ff81a77e6ef3c52f050b3')       
    //     ],
    //     __v: 0
    //   },
    //   __v: 0
    // }



    // Check if exercise was found and deleted
    if (!deletedExercise) {
      return res.status(404).json({ message: 'Exercise not found' });
    }

    // If content exists, delete it and its associated MCQs
    if (deletedExercise.content) {
      const contentId = deletedExercise.content._id;
      // console.log("MCQ Ids => ", deletedExercise.content.mcqs)
      // const mcqIds = deletedExercise.content.mcqs.map(id => mongoose.Types.ObjectId(id));
      
      // Delete MCQs associated with the content
      await MCQ.deleteMany({ _id: { $in: deletedExercise.content.mcqs } });

      // Delete the content itself
      await Content.findByIdAndDelete(contentId);
    }

    // Send success message in the response
    res.status(200).json({ message: 'Exercise deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
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
