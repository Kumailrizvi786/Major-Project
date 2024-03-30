import mongoose from 'mongoose';

export default mongoose.model('Result', new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    exercise: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exercise',
      required: true
    },
    score: {
      type: Number,
      required: true
    },
    wpm: {
      type: Number,
      required: false,
    },
    // Add timestamps for results
    createdAt: {
      type: Date,
      default: Date.now
    }
  }));
