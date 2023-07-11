import React from "react";
import "./PlayQuiz.css";
import { Button } from "@mui/material";
import { Radio } from "@mui/material";

function PlayQuiz() {
  return (
    <div className="card-bg">
      <div className="card">
        <h2 className="cardheading">Title of the Question</h2>

        <hr />
        <div className="cardquestion">
          <p>
            Ques1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis, inventore.
          </p>
        </div>
        <div className="quizoption">
          <div className="radioOption">
            <Radio />
            <p>here is option</p>
          </div>{" "}
          <div className="radioOption">
            <Radio />
            <p>here is option</p>
          </div>{" "}
          <div className="radioOption">
            <Radio />
            <p>here is option</p>
          </div>
        </div>
        <div className="nextdiv">
          <p
            style={{
              paddingRight: "20vw",
            }}
          >
            Question 1/5
          </p>
          <Button variant="contained" size="small">
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PlayQuiz;
