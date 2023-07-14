import React, { useState } from "react";
import "./PlayQuiz.css";
import { Button } from "@mui/material";
import { Radio } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAnswer } from "../../Redux/Actions";

function PlayQuiz() {
  const [quesNo, setQuesNo] = useState(0);
  // const [quizNo, setQuizNo] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const Quiz = useSelector((state) => state.reducer.quiz);
  const quizNo = useSelector((state) => state.reducer.selectedQuizIndex);
  console.log("selecQuiz", quizNo);
  const handleOptionChange = (opt) => {
    setSelectedOption(opt);
  };

  const handleNext = () => {
    if (selectedOption) {
      const correct = Quiz[quizNo].questions[quesNo];
      if (selectedOption === correct.correctoption) {
        setScore(score + 1);
        dispatch(getAnswer(score));
      }
      setQuesNo(quesNo + 1);
      setSelectedOption("");
    }
  };
  const handleSubmit = () => {
    if (selectedOption) {
      const correct = Quiz[quesNo].questions[quesNo];
      if (selectedOption === correct.correctoption) {
        setScore(score + 1);
        dispatch(getAnswer(score));
        console.log("myScore", score);
      }
      navigation("/resultQuiz");
      console.log("quizAns", score);
    }
  };

  return (
    <div className="card-bg">
      <div className="card">
        <h2 className="cardheading">{Quiz[quizNo].title}</h2>

        <hr />
        <div>
          <div className="cardquestion">
            <p>
              {quesNo + 1}.{Quiz[quizNo].questions[quesNo].question}
            </p>
          </div>
          <div className="quizoption">
            {Quiz[quizNo].questions[quesNo].options.map((opt, i) => {
              return (
                <div className="radioOption" key={i}>
                  <Radio
                    checked={selectedOption === opt.title}
                    onChange={() => handleOptionChange(opt.title)}
                  />
                  <p>{opt.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="nextdiv">
          <p
            style={{
              paddingRight: "20vw",
            }}
          >
            {quesNo + 1}/{Quiz[quizNo].questions.length}
          </p>
          {Quiz[quizNo].questions.length !== quesNo + 1 ? (
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                handleNext();
              }}
              disabled={!selectedOption}
            >
              Next Question
            </Button>
          ) : (
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                handleSubmit();
              }}
            >
              submit
            </Button>
          )}
        </div>
        <div>
          <p>Correct Answer Count:{score} </p>
          {/* Display the count of correct answers */}
        </div>
      </div>
    </div>
  );
}

export default PlayQuiz;
