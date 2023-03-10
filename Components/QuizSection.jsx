import React, { useState } from "react";
import quiz from "@/data/quiz";
import logo_pic from "@/public/logo.png";
import Router from "next/router";
const { src: logo } = logo_pic;

const QuizSection = ({ data, topic }) => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleQuiz = (option, index) => {
    if (option.correct) {
      setScore(score + 1);
    }
    if (currentQuestion < quiz[topic].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else Router.push(`/result?score=${score}`);
  };

  return (
    <>
      <h2 className="score">Score {score}</h2>
      <h1 className="quiz__question">
        {quiz[topic][currentQuestion].question}
      </h1>
      {quiz[topic][currentQuestion].options.map((option, index) => {
        return (
          <button
            key={index}
            className="cta__choose"
            onClick={() => handleQuiz(option, index)}
          >
            {option.option}
          </button>
        );
      })}
    </>
  );
};

export default QuizSection;
