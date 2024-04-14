import mongoose from 'mongoose';

export default mongoose.model('User', new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    isEmailVerified: {
      type: Boolean,
      default: false
    },
    isMFAEnabled: {
      type: Boolean,
      default: false
    },
    password: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: false,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: false,
      default: "user",
    },
    age: {
      type: Number,
      required: false,
    }
    // posts: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Post'
    // }],
  }
));
