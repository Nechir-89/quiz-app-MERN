import mongoose from "mongoose";
import { Question } from "../types/cssTypes.ts";
const { Schema } = mongoose;


const cssQuestionSchema = new Schema({
  // question: String, // quistion: {type: String, required: true}
  quistion: { type: String, required: true },
  answers: { type: [String], required: true },
  correct: { type: Number, required: true }
})

export default mongoose.model<Question>('cssquestion', cssQuestionSchema);
