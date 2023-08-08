import React from 'react';

function Question({ question, choices, onAnswer }) {
  return (
    <div className='question-container'>
      <p className='question-text'>{question}</p>
      {choices.map((choice, index) => (
        <button className='choice-button' key={index} onClick={() => onAnswer(choice)}>
          {choice}
        </button>
      ))}
    </div>
  );
}

export default Question;
