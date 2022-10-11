import { RequestHandler } from "express"
import { question } from "../types"
import cssQuestions from "../model/question";

const getAllQuetions: RequestHandler<
  never,
  question[] | { err: string },
  never,
  never
> = async (req, res) => {
  try {
    const allQuestions = await cssQuestions.find().exec();
    console.log(allQuestions)
    res.status(200);
    // res.send(getAllData());
  } catch (error: any) {
    res.status(500).send({ err: error.message });
  }
}

export { getAllQuetions }
