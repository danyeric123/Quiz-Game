import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import QuestionCard from "./components/QuestionCard";
import {
  getQuizQuestions,
  Difficulty,
  Questions,
} from "./services/apiServices";

const totalQuestions = 10;

export interface Attempt {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Attempt[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await getQuizQuestions(
      totalQuestions,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.innerText;
      const correct = questions[number].correct_answer === answer;
      console.log(answer);
      console.log(correct);
      console.log(questions[number].correct_answer);
      if (correct) {
        setScore((prev: number) => prev + 1);
      }
      const attempt: Attempt = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev: Attempt[]) => [...prev, attempt]);
    }
  };

  const nextQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextNum = number + 1;
    if (nextNum === totalQuestions) {
      setGameOver(true);
    } else {
      setNumber(nextNum);
    }
  };

  return (
    <div id="container">
      <Header />
      {gameOver && (
        <button onClick={startTrivia} id="start-btn">
          Start
        </button>
      )}
      {!gameOver && (
        <section>
          <h1 id={userAnswers[number]?.correct ? "won" : "lost"}>
            {userAnswers[number] &&
              (!userAnswers[number]?.correct ? "Wrong" : "Correct!")}
          </h1>
          <p>Score: {score}</p>
        </section>
      )}
      {loading && <p>Loading Questions...</p>}
      {!loading && !gameOver && (
        <QuestionCard
          questionNum={number + 1}
          totalQuestions={totalQuestions}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== totalQuestions && (
          <button onClick={nextQuestion} id="next">
            Next
          </button>
        )}
    </div>
  );
};

export default App;
