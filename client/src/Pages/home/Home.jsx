// Todo:
// try to handle multiple updater with useReducer hook

import { useState, useEffect } from 'react';
import axios from 'axios';
import './home-style.css';

export default function Home() {
  //Todo: for next version we may need to divid state into two parts 
  //Todo: one for {ready and data} state as they only needed when app loaded
  //Todo: second {current and answer} for constantly being in changes as user interact
  const [questions, setQuestions] = useState({
    ready: false,
    data: null,
    current: -1,
    answer: {
      pickedAnswer: -1,
      result: ""
    }
  });
  const [finished, setFinished] = useState(false);

  // because I don't allways know question id to handle next event
  // so I'm depending on array index
  // assigning a variable with let inside useEffect hook gets unexpected value
  // multiple updater inside useEffect hook gets unexpected state update
  const fetchData = async () => {
    await axios.get('/api/css-questions')
      .then(resp => setQuestions((currentState) => ({
        ...currentState,
        ready: true,
        data: resp.data,
        current: 0
      })))
      .catch(err => {
        console.log(err);
        setQuestions((currentState) => ({
          ...currentState,
          ready: true,
          data: []
        }));
      })
  }

  useEffect(() => {
    // setQuestions(getAllData()); 
    // console.log(questions); 
    // setReady(true); 
    fetchData();

  }, []);

  const handleNext = () => {
    let size = questions.data.length - 1; // length of array
    questions.current < size ?
      setQuestions((currentState) => ({
        ...currentState,
        current: currentState.current + 1,
        answer: {
          pickedAnswer: -1,
          result: ""
        }
      })) :
      setFinished(true);
  }

  const checkAnswer = (selectedAnswer) => {
    if (questions.answer.pickedAnswer === -1) {
      questions.data[questions.current].correct === selectedAnswer ?
        setQuestions((currentState) => ({
          ...currentState,
          answer: {
            pickedAnswer: selectedAnswer,
            result: "correct"
          }
        })) :
        setQuestions((currentState) => ({
          ...currentState,
          answer: {
            pickedAnswer: selectedAnswer,
            result: "incorrect"
          }
        }))
    }
  }
  // console.log(questions.ready);
  // console.log(questions.data);
  // console.log(finished);
  // console.log(ans)
  return (
    <>
      {
        !questions.ready ? <div>Loading Questions...</div>
          : questions.data.length === 0 ? <div>No questions available now!</div>
            : <main>
              <article>
                <h3>Question {questions.current + 1}/8</h3>
                <p>{questions.data[questions.current].question}</p>
              </article>
              <section>
                {
                  questions.data[questions.current].answers.map((answer, ind) =>
                    <div
                      className={ind === questions.answer.pickedAnswer ? questions.answer.result : ""}
                      key={ind}
                      onClick={() => checkAnswer(ind)}>
                      {/* use counterReset to set list order A, B, C, D */}
                      {answer}
                    </div>
                  )
                }
              </section>
              <div
                className={
                  questions.answer.pickedAnswer === -1 ?
                    'nextBtnContainer hideNextBtn' : 'nextBtnContainer'}>
                <button
                  className='next-btn'
                  onClick={() => handleNext()}
                >Next Question</button>
              </div>
            </main>
      }
    </>
  )
}