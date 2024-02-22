export default mongoose.model(
    "Role",
    new mongoose.Schema({
      name: {
        type: String,
        required: true,
        unique: true,
      },
      permissions: {
        type: [String],
        default: [],
      },
    })
  );
  