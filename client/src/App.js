import './App.css';
import { Outlet } from 'react-router-dom';
import { getData, getQuestion } from './data/quiz';
import { useState } from 'react';
function App() {
  const [questionId, setQuestionId] = useState(2);
  const currentQuestion = getQuestion(questionId);
  return (
    <>
      <header className="App">
        {/* app Header */}
      </header>
      <main>
        <article>
          <h3>Question {questionId}/8</h3>
          <p>{currentQuestion.question}</p>
        </article>
        <section>
          {
            currentQuestion.answers.map((answer) =>
              <div className='answer'>
                {/* use counterReset to set list order A, B, C, D */}
                <p>{answer}</p>
              </div>
            )
          }
        </section>
        <button className='next-btn'>Next</button>
        <Outlet />
      </main>
      <footer>
        {/* app footer */}
      </footer>
    </>
  );
}

export default App;
