import mongoose from 'mongoose';
export default mongoose.model(
    "User",
    new mongoose.Schema({
      username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        minlength: 8, // Enforce minimum password length
      },
      token:{
        type: String,
        required: false,
      },
      role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
        required: true,
      },
      // ... other user fields
    })
  );
  