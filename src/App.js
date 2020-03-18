import React, { useState } from 'react';
import './App.css';

function App() {
  var [score, setScore] = useState(10);
  const [question, newQuestion] = useState('Click Any Button!');
  const [answer, newAnswer] = useState();

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
  var operator
  // access operator from array
  console.log('operator: ' + operator)

  // first + operator + second



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
      <div>Question: {question} </div>

      <input type="submit" value="A" onClick={(e) => {
        e.preventDefault();
        setScore(score * 2);
      }} />
      <input type="submit" value="B" onClick={(e) => {
        e.preventDefault();
        setScore(score--);
      }} />
      <input type="submit" value="C" onClick={(e) => {
        e.preventDefault();
        setScore(score = 14);
      }} />




    </div>
  );
}

export default App;
