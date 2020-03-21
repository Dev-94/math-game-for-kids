import React, { useState } from 'react';
import './App.css';

function App() {
  var [score, setScore] = useState(0);
  let [question, newQuestion] = useState('Click Any Button!');
  const [choices, newChoices] = useState();
  const operators = [0, 1, 2, 3]; // +,-,*,/
  var correct;
  const optionA = 'A';
  const optionB = 'B';
  const optionC = 'C';
  const options = [optionA, optionB, optionC]
  let int1;
  let int2;
  let operator;
  let operatorIdx;
  const checkAnswer = (e) => {
    e.preventDefault();
    if (correct) {
      setScore(score + 10);
      console.log('correct answer: ' + score);
    } else if (!correct) {
      setScore(score - 1)
      console.log('wrong answer: ' + score);
    }
  };




  // randomly generate numbers and choose operator
  // no more preset questions
  // no more regex for parsing for integers
  // no more scanning and storing operators
  // values of numbers have to be different
  // https://repl.it/@DevG94/PastelDiligentPrinter


  // generate random int1
  int1 = Math.floor(Math.random() * Math.floor(20))
  console.log('int1: ' + int1);
  // generate random int1
  int2 = Math.floor(Math.random() * Math.floor(20))
  console.log('int2: ' + int2);
  // generate random operator
  operatorIdx = Math.floor(Math.random() * Math.floor(3))
  operator = operators[operatorIdx];
  console.log('operator: ' + operators[operatorIdx]);



  // read random operator
  switch (operator) {
    case 0:
      int1 = parseInt(int1);
      int2 = parseInt(int2);
      correct = int1 + int2;
      question = `${int1} + ${int2}`
      console.log("addition");
      console.log("correct: " + correct);
      break;
    case 1:
      int1 = parseInt(int1);
      int2 = parseInt(int2);
      correct = int1 - int2;
      question = `${int1} - ${int2}`

      console.log("substraction");
      console.log("correct: " + correct);
      break;
    case 2:
      int1 = parseInt(int1);
      int2 = parseInt(int2);
      correct = int1 * int2;
      question = `${int1} * ${int2}`

      console.log("multiplication");
      console.log("correct: " + correct);
      break;
    case 3:
      int1 = parseInt(int1);
      int2 = parseInt(int2);
      correct = int1 / int2;
      question = `${int1} / ${int2}`

      console.log("division");
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

