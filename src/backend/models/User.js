import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  age: { type: Number },
  gender: { type: String },
  location: { type: String },
  bio: { type: String },
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
