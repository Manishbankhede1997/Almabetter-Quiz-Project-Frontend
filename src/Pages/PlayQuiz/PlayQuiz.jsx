import React, { useState } from "react";
import "./PlayQuiz.css";
import { Button } from "@mui/material";
import { Radio } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAnswer } from "../../Redux/Actions";

function PlayQuiz() {
  // State to keep track of the current question number, selected option, and score
  const [quesNo, setQuesNo] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  const navigation = useNavigate();
  const dispatch = useDispatch();

  // Get the list of all quizzes from the redux store
  const Quiz = useSelector((state) => state.reducer.quiz);

  console.log("quiz1", Quiz);

  // Get the selected quiz index from the redux store
  const quizNo = useSelector((state) => state.reducer.selectedQuizIndex);

  // Function to handle option selection
  const handleOptionChange = (opt) => {
    setSelectedOption(opt);
  };

  // Function to handle the "Next Question" button click
  const handleNext = () => {
    if (selectedOption) {
      const correct = Quiz[quizNo].questions[quesNo];
      if (selectedOption === correct.correctoption) {
        // Increase the score if the selected option is correct
        setScore(score + 1);
        // Dispatch the updated score to the redux store
        dispatch(getAnswer(score));
      }
      // Move to the next question
      setQuesNo(quesNo + 1);
      setSelectedOption("");
    }
  };

  // Function to handle the "Submit" button click
  const handleSubmit = () => {
    if (selectedOption) {
      const correct = Quiz[quizNo].questions[quesNo];
      if (selectedOption === correct.correctoption) {
        // Increase the score if the selected option is correct
        setScore(score + 1);
        // Dispatch the updated score to the redux store
        dispatch(getAnswer(score));
      }
      // Navigate to the resultQuiz page
      navigation("/resultQuiz");
    }
  };

  return (
    <div className="card-bg">
      <div className="card">
        {/* Display the quiz title */}
        <h2 className="cardheading">{Quiz[quizNo].title}</h2>

        <hr />

        <div>
          {/* Display the current question */}
          <div className="cardquestion">
            <p>
              {quesNo + 1}.{Quiz[quizNo].questions[quesNo].question}
            </p>
          </div>

          {/* Display the quiz options */}
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

        {/* Display the question progress and the "Next Question" or "Submit" button */}
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
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlayQuiz;
