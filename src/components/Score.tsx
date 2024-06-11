import React from "react";

interface ScoreProps {
  score: number;
  onRestartQuiz: () => void;
}

const Score: React.FC<ScoreProps> = ({ score, onRestartQuiz }) => {
  return (
    <div className="score">
      <h2>Now, let's see how you did...</h2>
      <p>You scored: {score} out of 20!</p>
      <button onClick={onRestartQuiz}>Back to Start</button>
    </div>
  );
};

export default Score;
