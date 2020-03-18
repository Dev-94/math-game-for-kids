import React from 'react';
import './App.css';

function App() {

  // when answer is correct 10 points are added
  // displayed on score board

  // question appears
  // answers appear
  // answers appear in each button

  // array of objects
  // objects has keys for Q, 3 As, correct A

  // game logic => if submitted A === correct A, next Q
  // if submitted A !== correct A, don't re-render

  return (
    <div className="App">

      <div>Score: </div>
      <div>Question: </div>

      <input type="submit" value="A" />
      <input type="submit" value="B" />
      <input type="submit" value="C" />




    </div>
  );
}

export default App;
