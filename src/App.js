import React, { useState } from 'react';
import './App.css';

function App() {

  var [score, setScore] = useState(10)

  // when answer is correct 10 points are added
  // displayed on score board

  // question appears
  // answers appear
  // answers appear in each button

  // array of objects
  // objects has keys for Q, 3 As, correct A

  // game logic => if submitted A === correct A, next Q
  // if submitted A !== correct A, don't re-render

  // state => score

  return (
    <div className="App">

      <div>Score: {score}</div>
      <div>Question: </div>

      <input type="submit" value="A" onClick={() => setScore(score * 2)} />
      <input type="submit" value="B" onClick={() => setScore(score--)} />
      <input type="submit" value="C" onClick={() => setScore(score = 'C')} />




    </div>
  );
}

export default App;
