import mongoose from 'mongoose';

const difficultySchema = new mongoose.Schema({
  minAge: {
    type: Number,
    required: true
  },
  maxAge: {
    type: Number,
    required: true
  },
  level: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    required: true
  }
});


export default mongoose.model('Exercise', new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String
    },
    difficulty: {
      type: difficultySchema,
      required: true
    },
    content: { // Reference to the Content model (One-to-One)
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Content',
      required: true // Optional: Set required if each exercise must have content
    }
  }));
