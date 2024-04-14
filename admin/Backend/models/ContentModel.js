import mongoose from 'mongoose';

export default mongoose.model('Content', new mongoose.Schema({
    contentType: {
      type: String,
      enum: ['text', 'textOnImage'],
      required: true
    },
    text: {
      type: String,
      required: function() { return this.contentType === 'text'; }
    },
    imageUrl: {
      type: String,
      required: function() { return this.contentType === 'textOnImage'; }
    },
    description: {
      type: String
    },
    mcqs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MCQ' }],
  }));

//We can use populate function to populate the mcqs array with the content model
// Example usage in your route handler
// const contentWithMCQs = await Content.findById(contentId).populate('mcqs');
  