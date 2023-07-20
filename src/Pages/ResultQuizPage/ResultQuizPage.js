import "./ResultQuizPage.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { resetQuiz } from "../../Redux/Actions";

function ResultQuizPage() {
  // Get the score, name, quiz data, and selected quiz index from the redux store
  const score = useSelector((state) => state.reducer.answers.length);
  const name = useSelector((state) => state.reducer.name);
  const Quiz = useSelector((state) => state.reducer.quiz);

  const quizNo = useSelector((state) => state.reducer.selectedQuizIndex);

  const navigation = useNavigate();
  const dispatch = useDispatch();

  // Function to handle the "Go to Homepage" button click
  const handleScorebutton = () => {
    // Navigate back to the homepage and reset the quiz state in the redux store
    navigation("/");
    dispatch(resetQuiz());
  };

  return (
    <div className="result">
      <div className="box">
        {/* Display an image to represent congratulations */}
        <img
          className="congrate-img"
          src="congrates.jpg"
          alt="congratulation"
        />

        {/* Display the user's name */}
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

        {/* Display the quiz score and total number of questions */}
        <p className="finalscore">
          Your Scored : {score} Out Of : {Quiz[quizNo].questions.length}
        </p>

        {/* "Go to Homepage" button */}
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
