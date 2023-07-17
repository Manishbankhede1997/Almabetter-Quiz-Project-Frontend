import React from "react";
import { useState } from "react";
import "./Signup.css";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Error from "../../Components/Error";
import { useDispatch, useSelector } from "react-redux";
import { getName } from "../../Redux/Actions";
import HomePageModal from "../CreateQuiz/Modals";
import Checkbox from "@mui/material/Checkbox";
function Signup() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const Quiz = useSelector((state) => state.reducer.quiz);
  const quizNo = useSelector((state) => state.reducer.selectedQuizIndex);
  const activeQuiz = useSelector((state) =>
    state.reducer.quiz.map((obj) => obj.isActive)
  );
  console.log("togleSign", activeQuiz);
  console.log("myQuiz", Quiz);

  // useEffect(() => {
  //   setQuiz(JSON.parse(localStorage.getItem("quizData")));
  // }, [Quiz]);

  const [name, setName] = useState("");
  const [error, setError] = useState({ error: false, message: "" });
  const handleChange = (e) => {
    setName(e.target.value);
    setError({
      error: false,
      message: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 5 || name.length > 50) {
      setError({
        error: true,
        message: "Please fill  Full-Name(minimum-5 character required)",
      });
    } else if (Quiz.length < 1) {
      return;
    } else {
      dispatch(getName(name));

      navigation("/playQuiz");
    }
  };
  const filterActiveQuiz = Quiz.filter((quiz, quizNo) => !activeQuiz[quizNo]);
  return (
    <div className="sign-body">
      <div className="sign-bg">
        <h2 className="tittle-heading">Title of the Quiz</h2>
        {Quiz?.length > 0 ? (
          <p className="quizNo">
            Selected to Play : {quizNo + 1}: {Quiz[quizNo].title}
          </p>
        ) : (
          <HomePageModal
            typographyMessage="No Quiz Available for play"
            buttonName="close"
          />
        )}

        <div className="activeQuiz">
          <h2 className="active-heading"> Active Quizzes :</h2>
          {filterActiveQuiz.map((quiz, quizNo) => (
            <>
              <div className="heading-Ques">
                {quizNo + 1} <span>{quiz.title}</span>
              </div>
            </>
          ))}
        </div>

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

        <div>
          <span className="name">Write Your Name</span> <br />
          <TextField
            onChange={handleChange}
            variant="outlined"
            size="small"
            style={{ backgroundColor: "white" }}
          />
          {error.error && <Error message={error.message} />}
        </div>

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
