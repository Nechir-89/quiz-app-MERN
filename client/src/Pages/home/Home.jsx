// Todo:
// try to handle multiple updater with useReducer hook

import { useState, useEffect } from 'react';
import axios from 'axios';
import './home-style.css';

export default function Home() {
  const [questions, setQuestions] = useState({
    ready: false,
    data: null
  });
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [ans, setAns] = useState({ value: "", selectedAnswer: -1 });

  // because I don't allways know question id to handle next event
  // so I'm depending on array index

  // assigning a variable with let inside useEffect hook gets unexpected value

  // multiple updater inside useEffect hook gets unexpected state update

  const fetchData = async () => {
    await axios.get('/api/css-questions')
      .then(resp => setQuestions({ ready: true, data: resp.data }))
      .catch(err => {
        console.log(err);
        setQuestions({ ready: true, data: [] });
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
    size > index ? setIndex(prev => prev + 1) : setFinished(true);
  }

  const checkAnswer = (ind) => {

    questions.data[index].correct === ind ?
      setAns({ value: "correct", selectedAnswer: ind }) : setAns({ value: "incorrect", selectedAnswer: ind });
  }
  // console.log(questions.ready);
  // console.log(questions.data);
  // console.log(finished);
  console.log(ans)
  return (
    <>
      {
        !questions.ready ? <div>Loading Questions...</div>
          : questions.data.length === 0 ? <div>No questions available now!</div>
            : <main>
              <article>
                <h3>Question {index + 1}/8</h3>
                <p>{questions.data[index].question}</p>
              </article>
              <section>
                {
                  questions.data[index].answers.map((answer, ind) =>
                    <div
                      className={ind === ans.selectedAnswer ? ans.value : ""}
                      key={ind}
                      onClick={() => checkAnswer(ind)}>
                      {/* use counterReset to set list order A, B, C, D */}
                      {answer}
                    </div>
                  )
                }
              </section>
              <button
                className='next-btn'
                onClick={() => handleNext()}
              >Next Question</button>
            </main>
      }
    </>
  )
}