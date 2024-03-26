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
      required: true
    },
    description: {
      type: String
    },
    difficulty: {
      type: difficultySchema,
      required: true
    }
  }));
