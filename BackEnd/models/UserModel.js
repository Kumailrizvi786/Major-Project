import mongoose from 'mongoose';
// export default mongoose.model(
//     "User",
//     new mongoose.Schema({
//       username: {
//         type: String,
//         required: true,
//         unique: true,
//       },
//       email: {
//         type: String,
//         required: true,
//         unique: true,
//       },
//       password: {
//         type: String,
//         required: true,
//         minlength: 8, // Enforce minimum password length
//       },
//       token:{
//         type: String,
//         required: false,
//       },
//       isEmailVerified:{
//         type:Boolean,
//         default: false
//       },
//       role: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Role",
//         required: true,
//       },
//       // ... other user fields
//     })
//   );



export default mongoose.model('User', new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      // unique: true
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
    password: {
      type: String,
      required: true
    },
    city: {
      type: String
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: false,
    },
    age: {
      type: Number,
      required: true,
    }
    // posts: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Post'
    // }],
  }
));
