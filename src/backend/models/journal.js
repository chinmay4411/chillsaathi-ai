import mongoose from "mongoose";

const journalSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  entry: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Journal", journalSchema);
