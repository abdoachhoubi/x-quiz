import React, { useState, useEffect } from "react";
import quiz from "@/data/quiz";
import { useRouter } from "next/router";
import useShuffle from "@/pages/api/useShuffle";

Array.prototype.shuffle = function () {
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]];
  }
  return this;
};

const QuizSection = ({ topic }) => {
  const router = useRouter();
  const [shuffledQuiz, setShuffledQuiz] = useState(null);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleQuiz = (option) => {
    if (option.correct) {
      setScore(score + 1);
    }
    if (currentQuestion < quiz[topic].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else router.push(`/result?score=${score}`);
  };

  useEffect(() => {
    if (quiz && quiz[topic]) {
      setShuffledQuiz(quiz[topic].shuffle());
    }
  }, []);

  return (
    <>
      <h2 className="score">Score {score}</h2>
      <h1 className="quiz__question">
        {quiz && quiz[topic] && quiz[topic][currentQuestion]?.question}
      </h1>
      {shuffledQuiz &&
        shuffledQuiz[currentQuestion]?.options
          ?.shuffle()
          .map((option, index) => {
            return (
              <button
                key={index}
                className="cta__choose"
                onClick={() => handleQuiz(option, index)}
              >
                {option?.option}
              </button>
            );
          })}
    </>
  );
};

export default QuizSection;
