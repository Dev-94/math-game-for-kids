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
  // if (operator == -) { first.valueOf() -= second.valueOf()}
  // if (operator == *) { first.valueOf() *= second.valueOf()}
  // if (operator == /) { first.valueOf() /= second.valueOf()}

  // push corrext answer in to correct a data structure
  // name data structure and access it to check if submitted answer is correct



  // compare if same as answer choice

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


  // does not work
  // var newQ = Number.parseInt('15') + parseInt('5'); //20
  // console.log(newQ);

  return (
    <div className="App">

      <div>Score: {score}</div>
      <div>Question: {q} </div>

      <input type="submit" value={`${QA[1].a}`} onClick={(e) => {
        e.preventDefault();
        if (correct == QA[1].a) {
          setScore(score + 1);
        } else if (correct != QA[1].a) {
          setScore(score - 1)
        };
      }} />
      <input type="submit" value={`${QA[1].b}`} onClick={(e) => {
        e.preventDefault();
        if (correct == QA[1].b) {
          setScore(score + 10);
        } else if (correct != QA[1].b) {
          setScore(score - 1)
        };
      }} />
      <input type="submit" value={`${QA[1].c}`} onClick={(e) => {
        e.preventDefault();
        // how to acces value of input
        if (correct == QA[1].c) {
          setScore(score = 14);
        } else if (correct != QA[1].c) {
          setScore(score - 1)
        };
      }} />




    </div>
  );
}

export default App;
