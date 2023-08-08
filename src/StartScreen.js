import React from 'react';

function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <h1 className="title">Full Stack Quiz Game</h1>
      <p className="subtitle">Test your full stack knowledge!</p>
      <div className="animation-container">
        {/* Add your animation here */}
      </div>
      <button className="start-button" onClick={onStart}>Start Quiz</button>
    </div>
  );
}

export default StartScreen;
