import mongoose from "mongoose";
const { Schema } = mongoose;


const cssQuestionSchema = new Schema({
  // question: String, // quistion: {type: String, required: true}
  _id: {type: Object, required:true},
  quistion: { type: String, required: true },
  answers: { type: [String], required: true },
  correct: { type: Number, required: true }
})

export default mongoose.model('cssQuestions', cssQuestionSchema);
