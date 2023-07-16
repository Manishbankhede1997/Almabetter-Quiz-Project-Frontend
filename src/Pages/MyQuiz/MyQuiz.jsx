import "./MyQuiz.css";
import React from "react";
import { Button } from "@mui/material";
import MyTable from "./Table";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePageModal from "../CreateQuiz/Modals";

function MyQuiz({ buttonName, typographyMessage }) {
  // Get the list of quizzes from the Redux store
  const Quiz = useSelector((state) => state.reducer.quiz);

  return (
    <div>
      <div className="myQuiz">
        {/* Heading for the My Quizzes page */}
        <h2 className="myQuizHeading">My Quizzes</h2>

        {/* Button to navigate to the Create New Quiz page */}
        <Link to="/createQuiz">
          <Button variant="contained">Create New Quiz</Button>
        </Link>
      </div>

      <div className="tablemanage">
        {/* Conditional rendering based on whether quizzes are available or not */}
        {Quiz.length < 1 ? (
          // If no quizzes are available, display a modal with a message
          <HomePageModal
            typographyMessage="No Quiz Available for play"
            buttonName="close"
          />
        ) : (
          // If quizzes are available, display the table of quizzes
          <MyTable Quiz={Quiz} />
        )}
      </div>
    </div>
  );
}

export default MyQuiz;
