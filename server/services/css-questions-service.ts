import cssQuestions from "../model/cssquestions";
// import { question } from '../types/cssTypes';

const getCssQuestions = async () => {
  try {
    const data = await cssQuestions.find((err, question) => {
      console.log(question)
    });
    // const questions = data.map((item: question) => item);
    return data;
  } catch (error) {
    console.log(error);
    return []
  }
}


export { getCssQuestions };
