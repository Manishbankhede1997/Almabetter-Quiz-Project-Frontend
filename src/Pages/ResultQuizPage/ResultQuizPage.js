import React from "react";
import "./ResultQuizPage.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { resetQuiz } from "../../Redux/Actions";

function ResultQuizPage() {
  const score = useSelector((state) => state.reducer.answers.length);
  const name = useSelector((state) => state.reducer.name);
  const Quiz = useSelector((state) => state.reducer.quiz);

  const navigation = useNavigate();
  const dispatch = useDispatch();
  const handleScorebutton = () => {
    navigation("/");
    dispatch(resetQuiz());
  };

  return (
    <div className="result">
      <div className="box">
        <img
          className="congrate-img"
          src="congratulations.jpg"
          alt="congratulation"
        />
        <h2
          className="congratulation"
          style={{
            color: "blue",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          {name}
        </h2>
        <p className="finalscore">
          Your Scored : {score} Out Of : {Quiz[0].questions.length}
        </p>
        <Button
          variant="outlined"
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => {
            handleScorebutton();
          }}
        >
          Go to Homepage
        </Button>
      </div>
    </div>
  );
}

export default ResultQuizPage;
