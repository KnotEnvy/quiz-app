import React, { useState } from 'react';

function Question({ question, choices, onAnswer }) {
  const [answered, setAnswered] = useState(false);

  const handleClick = (choice) => {
    setAnswered(true);
    setTimeout(() => onAnswer(choice), 1000);  // Delay calling onAnswer until after the animation finishes
  };

  return (
    <div className='question-container'>
      <p className={`question-text question-box ${answered ? '' : 'swoopIn'}`}>{question}</p>
      {choices.map((choice, index) => (
        <button className={`choice-button ${answered ? 'fallOff' : ''}`} key={index} onClick={() => handleClick(choice)}>
          {choice}
        </button>
      ))}
    </div>
  );
}

export default Question;
