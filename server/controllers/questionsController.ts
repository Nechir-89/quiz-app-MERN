import { RequestHandler } from "express"
import { question } from "../types"
import cssQuestions from "../model/cssquestions";
import { getCssQuestions } from "../services/cssQuestionsService";

const getAllQuetions: RequestHandler<
  never,
  question[] | { err: string },
  never,
  never
> = async (req, res) => {
  try {
    const cssQuestions = await getCssQuestions();
    console.log(cssQuestions)
    res.status(200);
    // TODO: add types for data to be retrieved 
    // TODO: change file name any where that needs to indicate css

    // res.send(getAllData());
  } catch (error: any) {
    res.status(500).send({ err: error.message });
  }
}

export { getAllQuetions }
