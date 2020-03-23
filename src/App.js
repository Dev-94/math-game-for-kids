import React, { useState } from 'react';
import './App.css';

function App() {
  console.log('START');
  let [score, setScore] = useState(0);
  let setOptions;
  let question;
  const operators = [0, 1, 2, 3]; // +,-,*,/
  let correct;
  let int1;
  let int2;
  let operator;
  let operatorIdx;
  let incorrectInt;
  let incorrectOperator;
  let incorrectOne;
  let incorrectTwo;
  const randomize = (max, min) => Math.floor(Math.random() * Math.ceil(max) + min);
  const checkAnswer = (event) => {
    event.preventDefault();
    if (event.target.value == correct) {
      setScore(score + 10);
      console.log('point total: ' + score);
      console.log('END');
    } else if (event.target.value != correct) {
      setScore(score - 1);
      console.log('WRONG ANSWER: ' + correct);
      console.log('END');
    }
  };
  /*
  // create winning logic
  // maybe timer for 5 minute
  // maybe first to a number of points
  // counts how many questions are posed to get there
  */



  // https://repl.it/@DevG94/PastelDiligentPrinter


  // generate random int1
  int1 = randomize(20, 1);
  // generate random int1
  int2 = randomize(12, 1);
  // generate random operator
  operatorIdx = randomize(3, 0);
  operator = operators[operatorIdx];
  // read random operator
  switch (operator) {
    case 0:
      int1 = parseInt(int1);
      int2 = parseInt(int2);
      correct = int1 + int2;
      question = `${int1} + ${int2}`;
      console.log(question);
      console.log("correct answer: " + correct);
      break;
    case 1:
      int1 = parseInt(int1);
      int2 = parseInt(int2);
      correct = int1 - int2;
      question = `${int1} - ${int2}`;
      console.log(question);
      console.log("correct answer: " + correct);
      break;
    case 2:
      int1 = parseInt(int1);
      int2 = parseInt(int2);
      correct = int1 * int2;
      question = `${int1} * ${int2}`;
      console.log(question);
      console.log("correct answer: " + correct);
      break;
    case 3:
      int1 = parseInt(int1);
      int2 = parseInt(int2);
      correct = int1 / int2;
      question = `${int1} / ${int2}`;
      console.log(question);
      console.log("correct answer: " + correct);
      break;
  }




  // Creates incorrect answers

  incorrectInt = randomize(5, 1);
  console.log('incorrectInt: ' + incorrectInt);
  incorrectOperator = randomize(3, 0);
  incorrectOperator = operators[incorrectOperator];

  switch (incorrectOperator) {
    case 0:
      incorrectOne = correct + incorrectInt;
      console.log('incorrectEquation: ' + `${correct} + ${incorrectInt}`);
      console.log('incorrectOne: ' + incorrectOne);
      break;
    case 1:
      incorrectOne = correct - incorrectInt;
      console.log('incorrectEquation: ' + `${correct} - ${incorrectInt}`);
      console.log('incorrectOne: ' + incorrectOne);
      break;
    case 2:
      if (incorrectInt === 1 || incorrectInt === 0 || correct === 1 || correct === 0) {
        incorrectOne = correct + 6;
        console.log("INCORRECT MULTIPLICATION");
      }
      else {
        incorrectOne = correct * incorrectInt;
        console.log('incorrectEquation: ' + `${correct} * ${incorrectInt}`);
      }
      console.log('incorrectOne: ' + incorrectOne);
      break;
    case 3:
      if (incorrectInt === 1 || incorrectInt === 0 || correct === 1 || correct === 0) {
        incorrectOne = correct - 6;
        console.log("INCORRECT DIVISION");
      } else {
        incorrectOne = correct / incorrectInt;
        console.log('incorrectEquation: ' + `${correct} / ${incorrectInt}`);
      }
      console.log('incorrectOne: ' + incorrectOne);
      break;
  };


  // Creates incorrect answers
  incorrectInt = randomize(5, 1);
  console.log('incorrectInt: ' + incorrectInt);
  incorrectOperator = randomize(3, 0);
  incorrectOperator = operators[incorrectOperator];

  switch (incorrectOperator) {
    case 0:
      incorrectTwo = correct + incorrectInt;
      console.log('incorrectEquation: ' + `${correct} + ${incorrectInt}`);
      console.log('incorrectTwo: ' + incorrectTwo);
      break;
    case 1:
      incorrectTwo = correct - incorrectInt;
      console.log('incorrectEquation: ' + `${correct} - ${incorrectInt}`);
      console.log('incorrectTwo: ' + incorrectTwo);
      break;
    case 2:
      // if (incorrectInt === 1 || incorrectInt === 0 || correct === 1 || correct === 0) {
      //   incorrectTwo = correct + 6;
      //   console.log("INCORRECT MULTIPLICATION");
      // }
      // else {
      incorrectTwo = correct * incorrectInt;
      console.log('incorrectEquation: ' + `${correct} * ${incorrectInt}`);
      // }
      console.log('incorrectTwo: ' + incorrectTwo);
      break;
    case 3:
      // if (incorrectInt === 1 || incorrectInt === 0 || correct === 1 || correct === 0) {
      //   incorrectTwo = correct - 6;
      //   console.log("INCORRECT DIVISION");
      // } else {
      incorrectTwo = correct / incorrectInt;
      console.log('incorrectEquation: ' + `${correct} / ${incorrectInt}`);
      // }
      console.log('incorrectTwo: ' + incorrectTwo);
      break;
  };

  if (incorrectOne == correct || incorrectOne == incorrectTwo) {
    incorrectOne = correct + incorrectInt + 1;

  }
  if (incorrectTwo == incorrectOne || incorrectTwo == correct) {
    incorrectTwo = correct + incorrectInt + 1;
  }




  // stores answer choices in to buttons in a random (sorted values) order
  setOptions = [correct, incorrectOne, incorrectTwo].sort();


  return (
    <div className="App">

      <div>Score: {score}</div>
      <div>Question: {question} </div>

      <input type="submit" value={setOptions[0]} onClick={checkAnswer} />
      <input type="submit" value={setOptions[1]} onClick={checkAnswer} />
      <input type="submit" value={setOptions[2]} onClick={checkAnswer} />
    </div>
  );
}

export default App;

