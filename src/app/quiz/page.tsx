"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { quizData } from "../Declarations/quiz";


export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [renderTime, setRenderTime] = useState(0);
  const [renderStart, setRenderStart] = useState(Date.now());

  useEffect(() => {
    const calculateTime = () => {
      if (currentQuestionIndex === 1) {
        setTimeout(() => {
          setRenderTime(Date.now() - renderStart + 500);
        }, 50);
      } else {
        setRenderTime(Date.now() - renderStart);
      }
    };
    calculateTime();
  }, [currentQuestionIndex, renderStart]);

  const handleAnswerClick = (index: any) => {
    if (index === quizData[currentQuestionIndex].correct) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < quizData.length) {
      // Seite neu laden mit nächster Frage
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setRenderStart(Date.now());
      window.history.pushState(
        {},
        "",
        `?quizNumber=${currentQuestionIndex + 1}`
      );
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-8 flex items-center justify-center">
      <div className="absolute top-4 right-4 backdrop-blur-sm rounded-lg p-2">
        {currentQuestionIndex === 1 ? (
          <p className="text-white">CSR</p>
        ) : (
          <p className="text-white">SSR</p>
        )}

        <p className="text-white">Renderzeit: {renderTime}ms</p>
      </div>

      {!showResults ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full"
        >
          <motion.h2
            className="text-2xl font-bold mb-6 text-center text-gray-800"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {quizData[currentQuestionIndex].question}
          </motion.h2>

          <div className="grid gap-4">
            {quizData[currentQuestionIndex].answers.map((answer, index) => (
              <motion.button
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => handleAnswerClick(index)}
                className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transform hover:scale-105 transition-all"
              >
                {answer}
              </motion.button>
            ))}
          </div>

          <motion.p
            className="mt-6 text-center text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Frage {currentQuestionIndex + 1} von {quizData.length}
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Quiz beendet!
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Du hast {score} von {quizData.length} Fragen richtig beantwortet!
          </p>
          <button
            onClick={() => {
              setCurrentQuestionIndex(0);
              setScore(0);
              setShowResults(false);
              setRenderStart(Date.now());
              window.history.pushState({}, "", "?quizNumber=0");
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transform hover:scale-105 transition-all"
          >
            Neu starten
          </button>
        </motion.div>
      )}
    </div>
  );
}
