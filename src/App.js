import React, { useState } from 'react';
import './App.css';

function App() {
  console.log('START');
  var [score, setScore] = useState(0);
  let [question, newQuestion] = useState('Click Any Button!');
  const [choices, newChoices] = useState();
  const operators = [0, 1, 2, 3]; // +,-,*,/
  var correct;
  var optionA = 'A';
  var optionB = 'B';
  var optionC = 'C';
  var options = [optionA, optionB, optionC];
  let int1;
  let int2;
  let operator;
  let operatorIdx;
  let incorrectInt;
  let incorrectOperator;
  let incorrectEquation;
  let incorrectAnswer;
  let optionIdx;
  let randomOption;
  const checkAnswer = (event) => {
    event.preventDefault();
    if (correct) {
      setScore(score + 10);
      console.log('point total: ' + score);
      console.log('END');
    } else if (!correct) {
      setScore(score - 1)
      console.log('WRONG ANSWER: ' + correct);
      console.log('END');
    }
  };




  // randomly generate numbers and choose operator
  // no more preset questions
  // no more regex for parsing for integers
  // no more scanning and storing operators
  // values of numbers have to be different
  // https://repl.it/@DevG94/PastelDiligentPrinter


  // generate random int1
  int1 = Math.floor(Math.random() * Math.floor(20));
  // generate random int1
  int2 = Math.floor(Math.random() * Math.floor(20));
  // generate random operator
  operatorIdx = Math.floor(Math.random() * Math.floor(3));
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

  // STORE CORRECT OPTION IN OPTION A

  optionA = correct;

  // create incorrect answer
  // find random number between 1 and 3
  // randomize operators
  // manipulate correct with randomize operator and random number

  // CREATE RANDOM NUMBER AND STORE IT IN OPTION B

  incorrectInt = Math.floor(Math.random() * Math.ceil(5));
  console.log('incorrectInt: ' + incorrectInt);
  incorrectOperator = Math.floor(Math.random() * Math.floor(3));
  incorrectOperator = operators[incorrectOperator];

  switch (incorrectOperator) {
    case 0:
      incorrectAnswer = correct + incorrectInt;
      console.log('incorrectEquation: ' + `${correct} + ${incorrectInt}`);
      console.log('incorrectAnswer: ' + incorrectAnswer);
      break;
    case 1:
      incorrectAnswer = correct - incorrectInt;
      console.log('incorrectEquation: ' + `${correct} - ${incorrectInt}`);
      console.log('incorrectAnswer: ' + incorrectAnswer);
      break;
    case 2:
      if (incorrectInt === 1 || incorrectInt === 0 || correct === 1 || correct === 0) {
        incorrectAnswer = correct + 6;
        console.log("INCORRECT MULTIPLICATION");
      }
      else {
        incorrectAnswer = correct * incorrectInt;
        console.log('incorrectEquation: ' + `${correct} * ${incorrectInt}`);
      }
      console.log('incorrectAnswer: ' + incorrectAnswer);
      break;
    case 3:
      if (incorrectInt === 1 || incorrectInt === 0 || correct === 1 || correct === 0) {
        incorrectAnswer = correct - 6;
        console.log("INCORRECT DIVISION");
      } else {
        incorrectAnswer = correct / incorrectInt;
        console.log('incorrectEquation: ' + `${correct} / ${incorrectInt}`);
      }
      console.log('incorrectAnswer: ' + incorrectAnswer);
      break;
  };

  // stores answer choices in to buttons
  optionB = incorrectAnswer;



  // CREATE RANDOM NUMBER AND STORE IT IN OPTION C
  incorrectInt = Math.floor(Math.random() * Math.ceil(5));
  console.log('incorrectInt: ' + incorrectInt);
  incorrectOperator = Math.floor(Math.random() * Math.floor(3));
  incorrectOperator = operators[incorrectOperator];

  switch (incorrectOperator) {
    case 0:
      incorrectAnswer = correct + incorrectInt;
      console.log('incorrectEquation: ' + `${correct} + ${incorrectInt}`);
      console.log('incorrectAnswer: ' + incorrectAnswer);
      break;
    case 1:
      incorrectAnswer = correct - incorrectInt;
      console.log('incorrectEquation: ' + `${correct} - ${incorrectInt}`);
      console.log('incorrectAnswer: ' + incorrectAnswer);
      break;
    case 2:
      if (incorrectInt === 1 || incorrectInt === 0 || correct === 1 || correct === 0) {
        incorrectAnswer = correct + 6;
        console.log("INCORRECT MULTIPLICATION");
      }
      else {
        incorrectAnswer = correct * incorrectInt;
        console.log('incorrectEquation: ' + `${correct} * ${incorrectInt}`);
      }
      console.log('incorrectAnswer: ' + incorrectAnswer);
      break;
    case 3:
      if (incorrectInt === 1 || incorrectInt === 0 || correct === 1 || correct === 0) {
        incorrectAnswer = correct - 6;
        console.log("INCORRECT DIVISION");
      } else {
        incorrectAnswer = correct / incorrectInt;
        console.log('incorrectEquation: ' + `${correct} / ${incorrectInt}`);
      }
      console.log('incorrectAnswer: ' + incorrectAnswer);
      break;
  };

  optionC = incorrectAnswer;




  // RANDOMLY STORE ANSWER CHOICES IN OPTIONS????
  // RANDOM INDEX, STORE FIRST CORRECT
  // SWTICH, CASE OPTIONA !== CORRECT, RUN THIS FUNCTION THAT RANDOMIZES ANSWER CHOICES
  // CASE OPTIONB !== CORRECT, RUN THIS FUNCTION THAT RANDOMIZES ANSWER CHOICES
  // CASE OPTIONC !== CORRECT, RUN THIS FUNCTION THAT RANDOMIZES ANSWER CHOICES
  const randomizeOptions = () => {
    optionIdx = Math.floor(Math.random() * Math.floor(2));
    randomOption = options[optionIdx];
    console.log(randomOption);
    randomOption = incorrectAnswer;
    if (optionA == String || optionA !== correct) {
      optionA = randomOption;
      console.log("optionA: " + optionA);
    }

  }




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

