import "./MyQuiz.css";
import React from "react";
import { Button } from "@mui/material";
import MyTable from "./Table";
import { Link } from "react-router-dom";

function MyQuiz() {
  return (
    <div>
      <div className="myQuiz">
        <h2 className="myQuizHeading">My Quizes</h2>
        <Link to="/createQuiz">
          <Button variant="contained">Create New Quiz</Button>
        </Link>
      </div>

      <div className="tablemanage">
        <MyTable />
      </div>
    </div>
  );
}

export default MyQuiz;
