import React, { useState } from 'react';
import './App.css';

function App() {
  var [score, setScore] = useState(0);
  const [question, newQuestion] = useState('Click Any Button!');
  const [answer, newAnswer] = useState();
  var correct;
  // var choices = ['A', 'B', 'C']
  var choices = {
    choiceA: null,
    choiceB: null,
    choiceC: null
  }
  var operators = [0, 1, 2, 3]; // +,-,*,/


  // randomly generate numbers and choose operator
  // no more preset questions
  // no more regex for parsing for integers
  // no more scanning and storing operators
  // values of numbers have to be different

  // Unable to change value of object with index
  var idx = Math.floor(Math.random() * Math.floor(3));
  console.log('indexCorrect: ' + indexCorrect);
  // insert correct answer to index of structure
  choices[idx] = correct;
  // OTHER POSSIBLE DATA TYPES:
  // ARRAY FILLED WITH 'A'..., STORE NUMBER, SWITCH (STR) 
  // ARRAY OF ARRAYS, GRAB ARRAY THAT CONTAINS 'A', AND STICK CHOICE IN, GRAB LENGTH-1 AS ANSWER



  const QA = [
    {
      question: '5+5', a: '2', b: '14', c: '10',
    },
    {
      question: '15+5', a: '20', b: '4', c: '19',

    }
  ];
  // how to turn str into int, operate, turn in to string
  const numRegEx = /\d*/g;
  var q = QA[1].question; // accesses question in dataset
  console.log('q: ' + q);
  console.log('regex: ' + numRegEx);
  var found = q.match(numRegEx); // returns array of numbers from `question`
  console.log(found); // logs full array
  var first = found[0]; // first number in question is idx0 in matched arr
  console.log(first);
  var second = found[2]; // first number in question is idx2 in matched arr
  console.log(second);
  // find operator and return in array
  var opRegEx = /[\+\-\*\/]/;
  var operator = q.match(opRegEx);
  // access operator from array
  console.log('operator: ' + operator);

  // const ans = first.valueOf() + operator.valueOf() + second.valueOf();
  // console.log(ans);
  switch (operator) {
    case '+':
      first = parseInt(first);
      second = parseInt(second);
      correct = first + second;
      console.log("correct: " + correct);
      break;
    case '-':
      first = parseInt(first);
      second = parseInt(second);
      correct = first - second;
      console.log("correct: " + correct);
      break;
    case '*':
      first = parseInt(first);
      second = parseInt(second);
      correct = first * second;
      console.log("correct: " + correct);
      break;
    case '/':
      first = parseInt(first);
      second = parseInt(second);
      correct = first / second;
      console.log("correct: " + correct);
      break;
  }


  // if (operator == '+') {
  // first = parseInt(first);
  // second = parseInt(second);
  // correct = first + second;
  // console.log("correct: " + correct);
  // }
  // else if (operator == '-') {
  //   first = parseInt(first);
  //   second = parseInt(second);
  //   correct = first - second;
  //   console.log("correct: " + correct);
  // }
  // else if (operator == '*') {
  //   first = parseInt(first);
  //   second = parseInt(second);
  //   correct = first * second;
  //   console.log("correct: " + correct);
  // }
  // else if (operator == '/') {
  //   first = parseInt(first);
  //   second = parseInt(second);
  //   correct = first / second;
  //   console.log("correct: " + correct);
  // }


  // how to remove preset answer choices
  // correct answer is solved
  // take correct answer and manipulate it
  // store manipulated in variable
  // compare correct with variables
  // randomize which has correct answer
  // choose random number between 0 and 2
  // store correct in selected idx
  /*
  var answerA;
  var answerB;
  var answerC;
  var arr = [answerA, answerB, answerC];
  // randomly generate index to store correct answer
  var indexCorrect = Math.floor(Math.random() * Math.floor(3));
  console.log('indexCorrect: ' + indexCorrect);
  // insert correct answer to index of structure
  arr[indexCorrect] = correct;
  // randomize again
  var indexSecond = Math.floor(Math.random() * Math.floor(3));
  // if number is not the same as indexCorrect
  while (indexSecond !== indexCorrect) {
    // divide correct by 2 and store in new index
    arr[indexSecond] = (correct * 2);
  }
  // if number is not the same as indexCorrect or secondIndex
  // multiply correct by 2 and store in new index


  console.log('arr: ' + arr);
  console.log('arr[indexCorrect]: ' + arr[indexCorrect]);
  console.log('correct: ' + correct);
  console.log('arr[indexSecond]: ' + arr[indexSecond]);
*/

  // array of objects
  // objects has keys for Q, 3 As, correct A

  // game logic => if submitted A === correct A, next Q
  // if submitted A !== correct A, don't re-render

  // state => score


  // onClick = {(e) => {
  //   e.preventDefault();
  //   // how to acces value of input
  //   switch (correct) {
  //     // case would be whatever button is clicked
  //     case choice[e]:
  //       // if correct add 10 points
  //       setScore(score + 10);
  //     // if clicked button is not correct answer
  //     case !choice[e]:
  //       // incorrect answer gets -1 point
  //       setScore(score - 1)
  //   }


  return (
    <div className="App">

      <div>Score: {score}</div>
      <div>Question: {q} </div>

      <input type="submit" value={correct} onClick={(e) => {
        e.preventDefault();
        if (correct == QA[1].a) {
          setScore(score + 10);
        } else if (correct != QA[1].a) {
          setScore(score - 1)
        };
      }} />
      <input type="submit" value={correct * 1.5 - 5} onClick={(e) => {
        e.preventDefault();
        if (correct == QA[1].b) {
          setScore(score + 10);
        } else if (correct != QA[1].b) {
          setScore(score - 1)
        };
      }} />
      <input type="submit" value={correct / 2 - 1} onClick={(e) => {
        e.preventDefault();
        // how to acces value of input
        if (correct == QA[1].c) {
          setScore(score + 10);
        } else if (correct != QA[1].c) {
          setScore(score - 1)
        };
      }} />




    </div>
  );
}

export default App;

