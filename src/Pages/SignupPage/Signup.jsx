import React, { useState } from "react";
import "./Signup.css";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Error from "../../Components/Error";
import { useDispatch, useSelector } from "react-redux";
import { getName } from "../../Redux/Actions";
import HomePageModal from "../CreateQuiz/Modals";

function Signup() {
  // State variables
  const [name, setName] = useState("");
  const [error, setError] = useState({ error: false, message: "" });

  // Hooks
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const Quiz = useSelector((state) => state.reducer.quiz);
  const quizNo = useSelector((state) => state.reducer.selectedQuizIndex);
  const activeQuiz = useSelector((state) =>
    state.reducer.quiz.map((obj) => obj.isActive)
  );

  // Function to handle input change
  const handleChange = (e) => {
    setName(e.target.value);
    setError({
      error: false,
      message: "",
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 5 || name.length > 50) {
      setError({
        error: true,
        message: "Please fill Full-Name (minimum-5 characters required)",
      });
    } else if (Quiz.length < 1) {
      return;
    } else {
      // Dispatch action to store the name in the Redux store
      dispatch(getName(name));
      // Navigate to the "playQuiz" page
      navigation("/playQuiz");
    }
  };

  // Filter active quizzes
  const filterActiveQuiz = Quiz.filter((quiz, quizNo) => !activeQuiz[quizNo]);

  return (
    <div className="sign-body">
      <div className="sign-bg">
        {/* Title of the Quiz */}
        <h2 className="tittle-heading">Title of the Quiz</h2>
        {Quiz?.length > 0 ? (
          // Display selected quiz information
          <p className="quizNo">
            Selected : {quizNo + 1}: {Quiz[quizNo]?.title}
          </p>
        ) : (
          // Display a modal when no quiz is available
          <HomePageModal
            typographyMessage="No Quiz Available for play"
            buttonName="close"
          />
        )}

        {/* Display active quizzes */}
        <div className="activeQuiz">
          <h2 className="active-heading"> Active Quizzes :</h2>
          {filterActiveQuiz.map((quiz, quizNo) => (
            <div className="heading-Ques" key={quizNo}>
              {quizNo + 1} <span>{quiz.title}</span>
            </div>
          ))}
        </div>

        {/* Description of the quiz */}
        <p>
          A multiple-choice quiz is a form of assessment where participants are
          presented with questions and multiple answer options. The participants
          must choose the correct answer from the provided choices. The quiz
          summary typically includes the following elements: Question Display:
          Each question is displayed along with the possible answer choices.
          User Selection: The user selects one of the answer choices for each
          question. Score Calculation: The quiz is scored based on the number of
          correct answers, and the user's total score is displayed.
        </p>

        {/* Form for entering the user's name */}
        <div>
          <span className="name">Write Your Name</span> <br />
          <TextField
            onChange={handleChange}
            variant="outlined"
            size="small"
            style={{ backgroundColor: "white" }}
          />
          {/* Display error message, if any */}
          {error.error && <Error message={error.message} />}
        </div>

        {/* Button to start the quiz */}
        <div>
          <Button
            variant="outlined"
            style={{
              paddingLeft: "25px",
              backgroundColor: "green",
              color: "white",
            }}
            onClick={handleSubmit}
          >
            Start-Quiz
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
