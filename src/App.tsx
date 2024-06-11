import { useState } from "react";
import Question from "./components/Question";
import Answer from "./components/Answer";
import Score from "./components/Score";
import "./App.css";

const App: React.FC = () => {
  const questions = [
    {
      question: "What is the capital of Italy?",
      answers: ["Paris", "Rome", "London", "Berlin"],
      correct: "Rome",
    },
    {
      question: "What planet is known as the Red Planet?",
      answers: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: "Mars",
    },
    {
      question: "Who painted the Mona Lisa?",
      answers: [
        "Vincent van Gogh",
        "Claude Monet",
        "Leonardo da Vinci",
        "Pablo Picasso",
      ],
      correct: "Leonardo da Vinci",
    },
    {
      question: "What is the largest ocean on Earth?",
      answers: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      correct: "Pacific Ocean",
    },
    {
      question: 'Who wrote "Harry Potter"?',
      answers: [
        "J.R.R. Tolkien",
        "Stephen King",
        "George R.R. Martin",
        "J.K. Rowling",
      ],
      correct: "J.K. Rowling",
    },
    {
      question: "What is the chemical symbol for water?",
      answers: ["CO2", "H2O", "O2", "N2"],
      correct: "H2O",
    },
    {
      question: "In which country is the Great Pyramid of Giza located?",
      answers: ["Mexico", "China", "India", "Egypt"],
      correct: "Egypt",
    },
    {
      question: "How many continents are there?",
      answers: ["6", "5", "8", "7"],
      correct: "7",
    },
    {
      question: "What is the hardest natural substance on Earth?",
      answers: ["Gold", "Iron", "Diamond", "Silver"],
      correct: "Diamond",
    },
    {
      question: 'Who is the author of "To Kill a Mockingbird"?',
      answers: [
        "Mark Twain",
        "F. Scott Fitzgerald",
        "Ernest Hemingway",
        "Harper Lee",
      ],
      correct: "Harper Lee",
    },
    {
      question: "What is the largest mammal in the world?",
      answers: ["Elephant", "Giraffe", "Great White Shark", "Blue Whale"],
      correct: "Blue Whale",
    },
    {
      question: "What is the smallest planet in our solar system?",
      answers: ["Venus", "Mars", "Mercury", "Pluto"],
      correct: "Mercury",
    },
    {
      question: "Who was the first President of the United States?",
      answers: [
        "Thomas Jefferson",
        "George Washington",
        "Abraham Lincoln",
        "John Adams",
      ],
      correct: "George Washington",
    },
    {
      question: "What is the main ingredient in guacamole?",
      answers: ["Tomato", "Onion", "Garlic", "Avocado"],
      correct: "Avocado",
    },
    {
      question: "What is the capital of Japan?",
      answers: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
      correct: "Tokyo",
    },
    {
      question: "How many legs does a spider have?",
      answers: ["6", "8", "10", "12"],
      correct: "8",
    },
    {
      question: "Who developed the theory of relativity?",
      answers: [
        "Isaac Newton",
        "Galileo Galilei",
        "Nikola Tesla",
        "Albert Einstein",
      ],
      correct: "Albert Einstein",
    },
    {
      question: "What is the tallest mountain in the world?",
      answers: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
      correct: "Mount Everest",
    },
    {
      question: "What is the primary language spoken in Brazil?",
      answers: ["Spanish", "English", "French", "Portuguese"],
      correct: "Portuguese",
    },
    {
      question: "What is the largest desert in the world?",
      answers: ["Arabian", "Gobi", "Kalahari", "Sahara"],
      correct: "Sahara",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestionIndex].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  const handlePreviousQuestion = () => {
    setSelectedAnswer(null);
    setShowScore(false);
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleBeginQuiz = () => {
    setCurrentQuestionIndex(0);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      {!showScore && currentQuestionIndex === -1 && (
        <div className="title-page">
          <h1>Hector's Kinda Hard (but not really) Trivia Quiz!</h1>
          <h2>Good Luck!</h2>
          <button onClick={handleBeginQuiz}>Begin</button>
        </div>
      )}
      {!showScore && currentQuestionIndex !== -1 && (
        <>
          <Question question={questions[currentQuestionIndex].question} />
          <div className="answers">
            {questions[currentQuestionIndex].answers.map((answer, index) => (
              <Answer
                key={index}
                answer={answer}
                handleAnswerClick={handleAnswerClick}
                selectedAnswer={selectedAnswer}
              />
            ))}
          </div>
          {selectedAnswer && (
            <div>
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
              >
                Previous Question
              </button>
              <button onClick={handleNextQuestion}>Next Question</button>
            </div>
          )}
        </>
      )}
      {showScore && (
        <div>
          <Score score={score} onRestartQuiz={handleRestartQuiz} />
        </div>
      )}
    </div>
  );
};

export default App;
