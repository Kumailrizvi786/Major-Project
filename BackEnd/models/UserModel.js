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
        minlength: 6, // Enforce minimum password length
      },
      role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
        required: true,
      },
      // ... other user fields
    })
  );
  