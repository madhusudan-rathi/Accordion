import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
    const [questions, setQuestions] = useState(data);
  return (
      <React.Fragment>
        <main>
          <div className="container">
            <h3>Questions And Answers About Login</h3>
            <section className="info">
                {
                    questions.map((question) => {
                        return <SingleQuestion key={question.id} {...question} />
                    })
                }
            </section>
          </div>
        </main>
      </React.Fragment>
  );
}

export default App;
