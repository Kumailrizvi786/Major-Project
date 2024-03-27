import mongoose from 'mongoose';
// const db = mongoose.connection;
export default mongoose.model(
    "Role",
    new mongoose.Schema({
      name: {
        type: String,
        required: false,
        // unique: true,
        // enum: ["user", "admin"],
        default: "user",
      },
    })
  );

  // enter default data into the roles collection
  // db.roles.insertMany([
  //   {
  //     name: "user",
  //   },
  //   {
  //     name: "admin",
  //   },
  // ]);