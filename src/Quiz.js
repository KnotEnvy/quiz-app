import React, { useState, useEffect } from 'react';
import axios from './axiosInstance';
import Question from './Question';
import StartScreen from './StartScreen'; // Import the StartScreen component


function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [hasStarted, setHasStarted] = useState(false); // Add a new state variable to track if the game has started


  useEffect(() => {
    axios.get(`/questions/${questionIndex}`).then(res => {
      setCurrentQuestion(res.data);
    });
  }, [questionIndex]);

  useEffect(() => {
    if (hasStarted) {
      axios.get(`/questions/${questionIndex}`).then(res => {
        setCurrentQuestion(res.data);
      });
    }
  }, [questionIndex, hasStarted]);

  if (!hasStarted) {
    return <StartScreen onStart={() => setHasStarted(true)} />;
  }

  const handleAnswer = answer => {
    axios.post(`/answers/${questionIndex}`, { answer }).then(res => {
      if (res.data.isCorrect) {
        setScore(score + 1);
      }
      if (questionIndex === 2) { // assuming there are 10 questions
        setIsFinished(true);
        return;
      }
      setQuestionIndex(questionIndex + 1);
    });
  };

  return !isFinished ? (
    currentQuestion ? (
      <div>
        <Question {...currentQuestion} onAnswer={handleAnswer} />
        <p className='score'>Score: {score}</p>
      </div>
    ) : (
      <p>Loading...</p>
    )
  ) : (
    <div className="end-screen">
      <h1>Congratulations, you are a Genius!</h1>
      <p>Your final score is: {score} out of 10</p>
    </div>
  );
}

export default Quiz;
