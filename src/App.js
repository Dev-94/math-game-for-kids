import React, { useState } from 'react';
import './App.css';

function App() {
  var [score, setScore] = useState(0);
  const [question, newQuestion] = useState('Click Any Button!');
  const [choices, newChoices] = useState();
  const operators = [0, 1, 2, 3]; // +,-,*,/
  var correct;
  const optionA = 'A';
  const optionB = 'B';
  const optionC = 'C';
  const options = [optionA, optionB, optionC]
  let int1;
  let int2;
  const randomIndex = () => Math.floor(Math.random() * Math.floor(3));
  const checkAnswer = (e) => {
    e.preventDefault();
    if (correct) {
      setScore(score + 10);
    } else if (!correct) {
      setScore(score - 1)
    }
  };





  // randomly generate numbers and choose operator
  // no more preset questions
  // no more regex for parsing for integers
  // no more scanning and storing operators
  // values of numbers have to be different




  // OTHER POSSIBLE DATA TYPES:
  // ARRAY FILLED WITH 'A'..., STORE NUMBER, SWITCH (STR) 
  // ARRAY OF ARRAYS, GRAB ARRAY THAT CONTAINS 'A', AND STICK CHOICE IN, GRAB LENGTH-1 AS ANSWER
  // https://repl.it/@DevG94/PastelDiligentPrinter



  switch (operators) {
    case 0:
      int1 = parseInt(int1);
      int2 = parseInt(int2);
      correct = int1 + int2;
      console.log("correct: " + correct);
      break;
    case 1:
      int1 = parseInt(int1);
      int2 = parseInt(int2);
      correct = int1 - int2;
      console.log("correct: " + correct);
      break;
    case 2:
      int1 = parseInt(int1);
      int2 = parseInt(int2);
      correct = int1 * int2;
      console.log("correct: " + correct);
      break;
    case 3:
      int1 = parseInt(int1);
      int2 = parseInt(int2);
      correct = int1 / int2;
      console.log("correct: " + correct);
      break;
  }




  // how to remove preset answer choices
  // correct answer is solved
  // take correct answer and manipulate it
  // store manipulated in variable
  // compare correct with variables
  // randomize which has correct answer
  // choose random number between 0 and 2
  // store correct in selected idx



  return (
    <div className="App">

      <div>Score: {score}</div>
      <div>Question: {question} </div>

      <input type="submit" value={optionA} onClick={checkAnswer} />
      <input type="submit" value={optionB} onClick={checkAnswer} />
      <input type="submit" value={optionC} onClick={checkAnswer} />
    </div>
  );
}

export default App;

