import React from 'react';
import githubQR from './assets/github.png'; // Import your GitHub QR code
import discordQR from './assets/discord.png'; // Import your Discord QR code

function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <h1 className="title">Full Stack Quiz Game</h1>
      <p className="subtitle">Test your full stack knowledge!</p>
      <h2>Welcome to the Journey of Code</h2>
      <p className="subtitle">Join me, <span className="highlight-text">Jay Snyder</span> aka <span className="highlight-text">Guru</span>, on my 4 month coding journey, from zero to coding hero!</p>
      <div className="animation-container">
        {/* Add your animation here */}
      <div>
      <button className="start-button" onClick={onStart}>Embark</button>
    </div>
      </div>
      <button className="start-button" onClick={onStart}>Start Quiz</button>
      <div className="links-container">
        <h3>Connect with me:</h3>
        <img src={githubQR} alt="GitHub QR code" className="qr-code" />
        <img src={discordQR} alt="Discord QR code" className="qr-code" />
      </div>
    </div>
  );
}

export default StartScreen;
