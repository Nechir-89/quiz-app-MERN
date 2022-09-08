import { getAllData } from '../../data/quiz';
import { useState, useEffect } from 'react';

export default function Home() {
  const [questions, setQuestions] = useState({
    ready: false,
    data: null
  });
  const [index, setIndex] = useState(0);

  // because I don't allways know question id to handle next event
  // so I'm depending on array index

  // assigning a variable with let inside useEffect hook gets unexpected value

  // multiple updater inside useEffect hook gets unexpected state update

  useEffect(() => {
    // setQuestions(getAllData()); 
    // console.log(questions); 
    // setReady(true); 

    setQuestions({ ready: true, data: getAllData() });

  }, []);

  const handleNext = () => {

  }
  console.log(questions.ready)
  console.log(questions.data);
  return (
    <>
      {
        !questions.ready ? <div>Loading Questions...</div>
          : questions.data.length === 0 ? <div>No questions available!</div>
            : <main>
              <article>
                <h3>Question {questions.data[index].id}/8</h3>
                <p>{questions.data[index].question}</p>
              </article>
              <section>
                {
                  questions.data[index].answers.map((answer, ind) =>
                    <div className='answer' key={ind}>
                      {/* use counterReset to set list order A, B, C, D */}
                      <p>{answer}</p>
                    </div>
                  )
                }
              </section>
              <button
                className='next-btn'
                onClick={() => handleNext()}
              >Next</button>
            </main>
      }
    </>
  )
}