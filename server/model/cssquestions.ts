import mongoose from "mongoose";
const { Schema } = mongoose;


const questionSchema = new Schema({
  // question: String, // quistion: {type: String, required: true}
  quistion: { type: String, required: true },
  answers: { type: [String], required: true },
  correct: { type: Number, required: true }
})

export default mongoose.model('cssQuestions', questionSchema);
