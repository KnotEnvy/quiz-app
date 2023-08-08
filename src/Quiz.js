import React, { useState, useEffect } from 'react';
import axios from './axiosInstance';
import Question from './Question';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    axios.get(`/questions/${questionIndex}`).then(res => {
      setCurrentQuestion(res.data);
    });
  }, [questionIndex]);

  const handleAnswer = answer => {
    axios.post(`/answers/${questionIndex}`, { answer }).then(res => {
      if (res.data.isCorrect) {
        setScore(score + 1);
      }
      setQuestionIndex(questionIndex + 1);
    });
  };

  return currentQuestion ? (
    <div>
      <Question {...currentQuestion} onAnswer={handleAnswer} />
      <p>Score: {score}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default Quiz;
