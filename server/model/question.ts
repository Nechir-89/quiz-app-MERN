import mongoose from "mongoose";
const { Schema } = mongoose;


const questionSchema = new Schema({
  question: String, // quistion: {type: String, required: true}
  answers: [String],
  correct: Number
})

export default mongoose.model('question', questionSchema);
