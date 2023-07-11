import React from "react";
import "./ResultQuizPage.css";

function ResultQuizPage() {
  return (
    <div className="result bg-pink-400 w-full h-screen flex justify-center items-center">
      <div className="bg-box w-96 flex-col text-center h-96 gap-4 text-xl font-bold bg-gray-300 flex justify-center items-center">
        <span>congratulation</span>
        <span>You've scored 5 of 10</span>
      </div>
    </div>
  );
}

export default ResultQuizPage;
