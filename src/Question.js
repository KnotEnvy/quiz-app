import React from 'react';

function Question({ question, choices, onAnswer }) {
  return (
    <div>
      <p>{question}</p>
      {choices.map((choice, index) => (
        <button key={index} onClick={() => onAnswer(choice)}>
          {choice}
        </button>
      ))}
    </div>
  );
}

export default Question;
