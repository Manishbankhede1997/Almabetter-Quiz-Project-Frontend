import React from "react";
import { useState } from "react";
import "./Signup.css";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Error from "../../Components/Error";
import { useDispatch, useSelector } from "react-redux";
import { getName } from "../../Redux/Actions";
import HomePageModal from "../CreateQuiz/Modals";
function Signup() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const Quiz = useSelector((state) => state.reducer.quiz);
  const quizNo = useSelector((state) => state.reducer.selectedQuizIndex);
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
    if (name === "") {
      setError({ error: true, message: "Please fill  Full-Name" });
    } else if (Quiz.length < 1) {
      return;
    } else {
      dispatch(getName(name));

      navigation("/playQuiz");
    }
  };
  return (
    <div className="sign-body">
      <div className="sign-bg">
        <h2 className="tittle-heading">Title of the Quiz</h2>
        {Quiz?.length > 0 ? (
          <p className="quizNo">
            Quiz-No {quizNo + 1}: {Quiz[quizNo].title}
          </p>
        ) : (
          <HomePageModal
            typographyMessage="No Quiz Available for play"
            buttonName="close"
          />
        )}

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          nihil fuga excepturi dolorum quaerat soluta optio facere velit
          expedita delectus iure nobis animi aut. Nulla quibusdam similique sed
          cupiditate maxime? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Maxime quia facere amet esse quam enim reprehenderit repellendus
          est impedit similique. Lorem ipsum dolor sit, amet consectetur
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
