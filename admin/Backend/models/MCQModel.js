import mongoose from 'mongoose';
export default mongoose.model('MCQ', new mongoose.Schema({
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: String, required: true },
  }));