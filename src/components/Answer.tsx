import React from "react";

interface AnswerProps {
  answer: string;
  handleAnswerClick: (answer: string) => void;
  selectedAnswer: string | null;
}

const Answer: React.FC<AnswerProps> = ({
  answer,
  handleAnswerClick,
  selectedAnswer,
}) => {
  return (
    <button
      className={`answer ${selectedAnswer === answer ? "selected" : ""}`}
      onClick={() => handleAnswerClick(answer)}
      disabled={!!selectedAnswer}
    >
      {answer}
    </button>
  );
};

export default Answer;
