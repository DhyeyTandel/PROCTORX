
import React, { useState } from 'react';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  }
];

export default function ExamQuestions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
      {showScore ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">You scored {score} out of {questions.length}</h2>
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowScore(false);
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Restart Exam
          </button>
        </div>
      ) : (
        <>
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold">Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="text-xl mb-6">{questions[currentQuestion].question}</div>
          </div>
          <div className="flex flex-col space-y-4">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerOptionClick(option)}
                className="bg-gray-200 hover:bg-gray-300 text-left text-gray-800 font-semibold py-3 px-4 rounded-lg transition duration-200"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
