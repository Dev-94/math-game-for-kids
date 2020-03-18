import React, { useState } from 'react';
import './App.css';

function App() {
  var [score, setScore] = useState(0);
  const [question, newQuestion] = useState('Click Any Button!');
  const [answer, newAnswer] = useState();
  var correct;

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

  if (operator == '+') {
    first = parseInt(first);
    second = parseInt(second);
    correct = first + second;
    console.log("correct: " + correct);
  }
  else if (operator == '-') {
    first = parseInt(first);
    second = parseInt(second);
    correct = first - second;
    console.log("correct: " + correct);
  }
  else if (operator == '*') {
    first = parseInt(first);
    second = parseInt(second);
    correct = first * second;
    console.log("correct: " + correct);
  }
  else if (operator == '/') {
    first = parseInt(first);
    second = parseInt(second);
    correct = first / second;
    console.log("correct: " + correct);
  }


  // how to remove preset answer choices
  // correct answer is solved
  // take correct answer and manipulate it
  // store manipulated in variable
  // compare correct with variables
  // randomize which has correct answer
  // choose random number between 0 and 2
  // store correct in selected idx
  var answerA;
  var answerB;
  var answerC;
  var arr = [answerA, answerB, answerC];
  var indexCorrect = Math.floor(Math.random() * Math.floor(3));
  console.log('indexCorrect: ' + indexCorrect);
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


  // array of objects
  // objects has keys for Q, 3 As, correct A

  // game logic => if submitted A === correct A, next Q
  // if submitted A !== correct A, don't re-render

  // state => score



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

