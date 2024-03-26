import mongoose from 'mongoose';
export default mongoose.Schema("Content", new mongoose.Schema({
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
    }
  }));
  