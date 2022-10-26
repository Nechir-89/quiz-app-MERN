import { RequestHandler } from "express"
import { Question } from "../types/cssTypes"
import { getCssQuestions } from "../services/css-questions-service";
import mongoose from "mongoose";

const getAllQuetions: RequestHandler<
  never,
  Question[] | { err: string }, //response
  never,
  never
> = async (req, res) => {
  try {
    const cssQuestions = await getCssQuestions();
    // console.log(cssQuestions)
    // res.status(200).send(cssQuestions);
    // TODO: add types for data to be retrieved 
    // TODO: change file name any where that needs to indicate css

    res.send(cssQuestions);
  } catch (error: any) {
    res.status(500).send({ err: error.message });
  }
}

export { getAllQuetions }
