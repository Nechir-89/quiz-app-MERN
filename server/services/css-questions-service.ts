import cssQuestions from "../model/cssquestions.model";
// import { question } from '../types/cssTypes';

const getCssQuestions = async () => {
  try {
    const data = await cssQuestions.find().exec();
    // const questions = data.map((item: question) => item);
    return data;
  } catch (error) {
    console.log(error);
    return []
  }
}


export { getCssQuestions };
