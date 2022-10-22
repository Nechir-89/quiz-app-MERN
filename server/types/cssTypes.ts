import { Document, Schema } from "mongoose";

export interface Question extends Document {
  _id: Schema.Types.ObjectId,
  question: string;
  answers: string[];
  correct: number;
}
