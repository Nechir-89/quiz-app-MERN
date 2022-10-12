import cssQuestions from "../model/cssquestions";


const getCssQuestions = async () => {
  try {
    return await cssQuestions.find().exec();
  } catch (error) {
    console.log(error);
    return []
  }
}


export { getCssQuestions };
